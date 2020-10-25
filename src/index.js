import React from 'react';
import ReactDOM from 'react-dom';
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
