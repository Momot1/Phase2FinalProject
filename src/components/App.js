import React from "react";
import { BrowserRouter, Switch , Route } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import NewItem from "./NewItem"
import Login from "./Login"
import Signup from "./Signup"


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
      <Route path="/items/new"> 
        <NewItem />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <h4>404 NOT FOUND</h4>
      </Route>0
    </Switch>
  </BrowserRouter>
  )
}

export default App;