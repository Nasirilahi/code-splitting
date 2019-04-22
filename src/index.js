import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class DummyContainer extends Component {
  render() {
    return (
      <div> Hello Code splitting... </div>
    )
  }
}
export default DummyContainer

const wrapper = document.getElementById("root")

wrapper ? ReactDOM.render(<DummyContainer />, wrapper) : false
