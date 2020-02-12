import React from 'react'
import cs from 'classnames'

import './index.css'
import TransitionLink from '../TransitionLink'

export default ({ useAccent, reversed, outlined, preventDefault, ...props}) => (
  <TransitionLink { ...props }
    onClick={ preventDefault ?
      e => {
        e.preventDefault()
      } : null
    }
    className={cs(
      'Button'
    )}
  />
)
