import _ from 'lodash'

function component() {
  let element = document.createElement('div')
  import(/*webpackChunkName: "Math" */ './math').then(math => {
    element.innerHTML = _.join([`Totol sum is:- ${math.add(10, 20)}`])
  })
  return element
}

document.body.appendChild(component())
