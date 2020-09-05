import React, { Component } from "react";
import "./App.css";
import NavBar from './components/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from './routes';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* menu */}
          <NavBar/>
          {/* content */}
          <Switch>
            {this.showContentMenu(routes)}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
  showContentMenu = (routes) => {
    let result = null
    if (routes.length > 0) {
      result = routes.map((route,index) => (<Route key={index} path={route.path} exact={route.exact}>{route.main}</Route>))
    }
    return result
  }
}
export default App;
