import React, { Component, Suspense } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import routers from './config/routers'
import './App.css'

export default class app extends Component {
  render() {
    return (
      <Suspense
        fallback={<div style={{ fontSize: 50, color: 'red' }}>loading...</div>}
      >
        <Router>
          {routers.map((i) => {
            return (
              <Route
                key={i.path}
                path={i.path}
                component={i.component}
                exact={i.exact}
              ></Route>
            )
          })}
        </Router>
      </Suspense>
    )
  }
}
