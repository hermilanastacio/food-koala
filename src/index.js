import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Cart from './pages/Cart/Cart';

ReactDOM.render(
  <HashRouter>
    <Route exact path="/">
      <App/>
    </Route>
    <Route exact path="/cart">
      <Cart/>
    </Route>
  </HashRouter>,
  document.getElementById('root')
);