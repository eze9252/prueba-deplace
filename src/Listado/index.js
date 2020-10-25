import * as React from 'react'
import NavbarPage from '../Navbar'
import axios from 'axios'
import { AppProvider } from '../../src/Context'
import Form from 'react-bootstrap/Form'
import TableList from './components/table'
import Pagination from "react-js-pagination";
require("react-bootstrap");

class Listado extends React.Component{
  
  constructor(props) {
    super(props);

    this.state = {
        active_page: 1,
        characters: [],
        info: {},
        name:''
    };
  }


  fetchApiData() {
    return axios.get('https://rickandmortyapi.com/api/character/?name='+this.state.name+'&page='+this.state.active_page)
    .then(res => {
        this.setState({ 
          info: res.data.info,
          characters: res.data.results
        });
    })
    .catch(error => {
      console.log("error: "+error);
    });
  }

  componentDidMount() {
      this.fetchApiData()
  }


  handleChangeName = (event) => {
    this.setState({
        name: event.target.value,
        active_page: 1
    },this.fetchApiData);
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({
        active_page: pageNumber
    },this.fetchApiData);
    }

  render(){

    console.log(this.state.info)
    console.log(this.state.characters)
    return (
      <AppProvider value={this.state}>
        <div className="App">
          <NavbarPage/>
          <div className="container">
            <Form.Control className="input-search" type="text" placeholder="Ingrese un nombre de personaje" onChange={this.handleChangeName} />
            <TableList/>
            <Pagination
                activePage={this.state.active_page}
                itemsCountPerPage={20}
                totalItemsCount={this.state.info.count}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange.bind(this)}
                />
          </div>
        </div>
      </AppProvider>
    );
  }
  
}

export default Listado;