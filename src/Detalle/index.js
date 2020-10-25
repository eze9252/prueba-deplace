import * as React from 'react'
import NavbarPage from '../Navbar'
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import { AppConsumer } from '../Context'

class Detalle extends React.Component{
    static contextType = AppConsumer

    constructor(props) {
        super(props);
    
        this.state = {
            character: {},
        };
      }

    fetchApiData() {
        const id = this.props.match.params.id;
        return axios.get('https://rickandmortyapi.com/api/character/'+id)
        .then(res => {
            console.log(res.data)
            this.setState({ 
                character: res.data,
                location:res.data.location.name
            });
        })
        .catch(error => {
            console.log("error: "+error);
        });
    }

    componentDidMount() {
        this.fetchApiData()
    }

    render(){
            return(
            <div>
                <NavbarPage/>
                <div className="container">
                    <div className="flex-content"> 
                        <Card style={{ width: '40rem' }}>
                        <Card.Img variant="top" src={this.state.character.image} />
                        <Card.Body>
                            <Card.Title>{this.state.character.name}</Card.Title>
                            <Card.Text>Gender: {this.state.character.gender}</Card.Text>
                            <Card.Text>Species: {this.state.character.species}</Card.Text>
                            <Card.Text>Status: {this.state.character.status}</Card.Text>
                            <Card.Text>Location: {this.state.location}</Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="/">Volver al Listado</Card.Link>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            );
        }
}

export default Detalle;
