import React, { Component } from 'react'

 class Pet extends Component {
  render() {
    return (
      <div>i am a {this.props.sprcie}, name {this.props.name}</div>
    )
  }
}

export default Pet