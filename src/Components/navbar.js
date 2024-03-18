import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">
        Bad Bank
      </NavLink>
      <div className="navbar-nav">
        <NavLink to="/" className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}>
          Home
        </NavLink>
        <NavLink to="/createaccount" className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}>
          Create Account
        </NavLink>
        <NavLink to="/deposit" className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}>
          Deposit
        </NavLink>
        <NavLink to="/withdraw" className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}>
          Withdraw
        </NavLink>
        <NavLink to="/alldata" className={({ isActive }) => "nav-item nav-link" + (isActive ? " active" : "")}>
          All Data
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;
