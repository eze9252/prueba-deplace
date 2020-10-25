import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Detalle from './Detalle'
import Listado from './Listado';
import { Router, Route } from 'react-router';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
            <Route exact path="/" component={Listado} />
            <Route exact path="/detalle/:id" component={Detalle} />
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
