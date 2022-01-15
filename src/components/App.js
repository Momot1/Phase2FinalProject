import React, {useState} from "react";
import { BrowserRouter, Switch , Route } from "react-router-dom"
import NavBar from "./NavBar"
import Home from "./Home"
import NewItem from "./NewItem"
import Login from "./Login"
import Signup from "./Signup"
import Logout from "./Logout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <BrowserRouter>
    <NavBar isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)}/>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/new"> 
        <NewItem isLoggedIn={isLoggedIn}/>
      </Route>
      <Route path="/login">
        <Login onUpdateIsLoggedIn = {() => setIsLoggedIn(!isLoggedIn)}/>
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/logout">
        <Logout />
      </Route>
      <Route path="/">
        <h4>404 NOT FOUND</h4>
      </Route>0
    </Switch>
  </BrowserRouter>
  )
}

export default App;