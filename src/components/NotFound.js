import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404 - Not Found</h1>
        <p>Whoops, you seem to be lost. You can find your way home by clicking below:</p>
        <Redirect to='/' />
      </div>
    )
  }
}
export default NotFound
