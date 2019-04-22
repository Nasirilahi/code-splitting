import React, { Component, lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import OtherComopnent from './OtherComponent'

// const OtherComopnent = lazy(() => import(/*webpackChunkName: "OtherComponent" */'./OtherComponent'))
class DummyContainer extends Component {
  render() {
    return (
      <div>
        {/* <Suspense fallback={<div>Loadiiing....</div>}> */}
        Hello Code splitting...
        <OtherComopnent />
        {/* </Suspense> */}
      </div>
    )
  }
}
export default DummyContainer

const wrapper = document.getElementById('root')

wrapper ? ReactDOM.render(<DummyContainer />, wrapper) : false
