import React, { Component } from 'react'
import CatUrl from '../assets/cat.gif'
import Position from '../Position'
export default function Cat() {
  let { x, y } = Position()
  x += 200
  y -= 50

  return (
    <div>
      <img
        src={CatUrl}
        alt=''
        style={{ position: 'absolute', left: x, top: y }}
      />
    </div>
  )
}
