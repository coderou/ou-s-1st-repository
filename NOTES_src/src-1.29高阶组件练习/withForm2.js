import React from 'react'

export default function withForm2(yourComponentName) {
  return class extends React.Component {
    state = {
      username: '',
      password: '',
      repassword: ''
    }






    render() {
      return (< yourComponentName {...this.state} > </yourComponentName>)
    }
  }
}