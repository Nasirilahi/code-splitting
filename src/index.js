import _ from 'lodash'
// import { add } from './math'

function component() {
  let element = document.createElement('div')
  import(/*webpackChunkName: "Amitabh" */'./math').then( math => {
    element.innerHTML = _.join(['Hello', 'webpack', `${math.sum(10, 20)}`], ' ')
  }) 
  // element.innerHTML = _.join(['Hello', 'webpack', `${math.sum(10, 20)}`]
  return element
}

document.body.appendChild(component())
