import _ from 'lodash'
import cusLodash from './custom-lodash'
import { add } from './math'

cusLodash()

function component() {
  let element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack', ` ${add(10 ,20)}`])
  return element
}

document.body.appendChild(component())
