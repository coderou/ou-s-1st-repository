import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routers from "./config/routers";
import "./App.css";

export default class app extends Component {
  render () {
    return (
      <Router>
        {routers.map((i) => {
          return (
            <Route
              key={i.path}
              path={i.path}
              component={i.component}
              exact={i.exact}
            ></Route>
          );
        })}
      </Router>
    );
  }
}
