import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Home from './home'
import Login from './login'
import Toolbar from '../components/toolbar'

import 'semantic-ui-css/semantic.min.css';
import '../css/main.css';

const Register = () => [<Toolbar />, <h1> Register </h1>]

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact  component={Home}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/register" exact component={Register}/>
    </Switch>
  </Router>
)
export default App
