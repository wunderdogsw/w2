import 'babel-polyfill'
import './index.css'

import ReactDom from 'react-dom'
import React from 'react'
import App from 'App'

const render = () => {
  ReactDom.render(<App />, document.getElementById('root'))
}
render()


if (module.hot) {
  // module.hot.dispose(() => {})
  module.hot.accept(() => {
    render()
  })
}
