import './index.css'
import React from 'react'
import cs from 'classnames'
import TransitionLink from 'App/components/TransitionLink'

export default ({ useAccent, reversed, ...props}) => (
  <TransitionLink { ...props }
    className={cs(
      'Button',
      useAccent && 'Button--useAccent',
      reversed && 'Button--reversed',
    )}
  />
)
