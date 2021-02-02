import React, { Component } from 'react'
import Cat from './components/Cat'
import Mouse from './components/Mouse'
import Position from './Position'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>猫抓老鼠</h1>
        {/* <Position render={state=>{return <Mouse state={state}></Mouse>}}></Position>
        <Position render={state=>{return <Cat state={state}></Cat>}}></Position> */}

        <Position>{state => <Mouse>{state = { state }}</Mouse>}</Position>
        <Position>{state => <Cat >{state = { state }}</Cat>}</Position>
      </div>
    )
  } 
}
