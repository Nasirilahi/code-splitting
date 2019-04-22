import _ from 'lodash'
import cusLodash from './custom-lodash'
import { add } from './math'

function component() {
  let element = document.createElement('div')
  element.innerHTML = _.join(['Hello', 'webpack'])
  return element
}

document.body.appendChild(component())
