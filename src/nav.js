import React from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
function Nav() {
  return (
    <div className="App">      
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">Recipe Book</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto ms-4">
              <li className="nav-item">
                <NavLink className="nav-link mx-2" to="/home" activeclassname="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2" to="/portfolio" activeclassname="active">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link mx-2" to="/adobo" activeclassname="active">Adobo</NavLink>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-sm-2" type="search" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;