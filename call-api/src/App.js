import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { Switch, Route, BrowserRouter } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Menu />
          <div className="container">
            <div className="row">
              <Switch>{this.showContentMenus(routes)}</Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
  showContentMenus = (routes) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ));
    }
    return result;
  };
}
export default App;
