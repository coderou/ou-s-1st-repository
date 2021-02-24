import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routers from "./config/router";

import "./App.css";
// @1import {Button} from 'antd-mobile';
class app extends Component {
  render() {
    return (
      <Router>
        {/* @1<Button type="primary">primary</Button> */}
        {/* <div id="box"></div> */}
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

export default app;
