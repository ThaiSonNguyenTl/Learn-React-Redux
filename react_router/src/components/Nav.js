import React, { Component } from "react";

import {Route,Link} from 'react-router-dom';

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
      <Route
        path={to}
        exact={activeOnlyWhenExact}
        children={({ match }) => {
          let active = match ? "displayActive" : "";
          return (
            <li className={`nav-item ${active}`}>
              <Link to={to} className="nav-link">
                {label}
              </Link>
            </li>
          );
        }}
      />
    );
};
const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true,
    },
    {
        name: 'About',
        to: '/about',
        exact: false,
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false,
    },
    {
        name: 'Products',
        to: '/products',
        exact: false,
  },
  {
    name: 'Login',
    to: '/login',
    exact: false,
},
]
class App extends Component { 
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {this.showMenus(menus)}
          </ul>
        </div>
      </nav>
    );
    }
    showMenus = (menus) => {
        let result = null
        if (menus.length > 0) {
            result = menus.map((menu,index) => (<MenuLink key={index} label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} />))
        }
        return result
}
}
export default App;
