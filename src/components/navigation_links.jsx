import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

export default class NavigationLinks extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Aldrien Studying<img src={logo} width="150" height="30" alt="" />
          </NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink exact to="/" activeClassName="active" className="nav-link">
                  Home <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/about" activeClassName="active" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact to="/battle" activeClassName="active" className="nav-link">Battle</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
