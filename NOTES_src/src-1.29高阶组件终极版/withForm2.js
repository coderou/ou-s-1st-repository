import React from 'react'

export default function withForm2(yourComponentName) {
  return class extends React.Component {
    state = {
      username: '',
      password: '',
      repassword: ''
    }
    handle = (name) => (e) => {
      this.setState({ [name]: e.target.value })
    }
    render() {
      return (<yourComponentName {...this.state}{...this.props} handle={this.handle}></yourComponentName>)
    }
  }


}
