import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
      <div>
        <div>
          <NavLink to='/'>App Name</NavLink>
        </div>
        <div>
          <NavLink to='/profile'>Profile</NavLink>
          <NavLink to='/bills'>Bills</NavLink>
        </div>
      </div>
    );
  }