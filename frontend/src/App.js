import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import Login from './components/Login';
import Bills from './bills/Bills';
import Profile from "./user/Profile";
import { fetchBills } from './api'

export default function App() {

  const [bill, setBill] = useState();

  useEffect(() => {
    fetchBills()
    .then(resp => setBill(resp))
  }, []);

  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/bills'>
            <Bills bill={bill}/>
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}


