import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch , Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import NewItem from "./components/NewItem"
import Items from "./components/Items"

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/items">
        <Items />
      </Route>
      <Route path="/items/new"> 
        <NewItem />
      </Route>
      <Route path="/">
        <h4>404 NOT FOUND</h4>
      </Route>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);