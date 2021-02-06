import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import Login from './components/Login';
import Bills from './bills/Bills';
import Profile from "./user/Profile";

export default function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/bills'>
            <Bills />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


