import React from "react";
import { BrowserRouter, Switch , Route } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import NewItem from "./NewItem"
import Items from "./Items"


function App() {

  function setRootStyling(){
    const root = document.getElementById("root")
    console.log(root)
  }
  
  setRootStyling()


  return (
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
  </BrowserRouter>
  )
}

export default App;
