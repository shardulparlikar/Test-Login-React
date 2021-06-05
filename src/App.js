import React from 'react'
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import NewPage from "./Component/NewPage"
import Login from './Component/Login'

const App = () => {
  return (
    <div>
      
      <Router>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/profile" component={NewPage}></Route>
      </Switch>
        </Router>
    </div>
  )
}

export default App
