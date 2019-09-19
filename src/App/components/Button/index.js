import './index.css'
import React from 'react'
import cs from 'classnames'
import TransitionLink from 'App/components/TransitionLink'

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
