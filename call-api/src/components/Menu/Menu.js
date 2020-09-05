import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menu = [
  {
    name: "Home",
    to: "/",
    exact: true,
  },
  {
    name: "Product Management",
    to: "/product-list",
    exact: false,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => (
  <Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({ match }) => {
      let active = match ? "active" : "";
      return (
        <li className={`font-weight-bold ${active}`}>
          <Link className="nav-link" to={to}>
            {label}
          </Link>
        </li>
      );
    }}
  />
);

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <a className="navbar-brand">CALL API</a>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            {this.showMenus(menu)}
          </ul>
        </div>
      </nav>
    );
  }
  showMenus = (menu) => {
    let result = null;
    if (menu.length > 0) {
      result = menu.map((menuItem, index) => (
        <MenuLink
          key={index}
          label={menuItem.name}
          to={menuItem.to}
          activeOnlyWhenExact={menuItem.exact}
        />
      ));
    }
    return result;
  };
}
export default Menu;
