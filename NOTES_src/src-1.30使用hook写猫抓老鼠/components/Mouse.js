import React, { Component } from 'react'
import MouseUrl from '../assets/mouse.gif'
import Position from '../Position'
export default function Mouse() {
  let { x, y } = Position()

  return (
    <div>
      <img
        src={MouseUrl}
        alt=''
        style={{ position: 'absolute', left: x, top: y, width: 100 }}
      />
    </div>
  )

}
