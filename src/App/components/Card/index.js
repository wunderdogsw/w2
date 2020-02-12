import React from 'react'
import cs from 'classnames'

import './index.css'
import TransitionLink from '../TransitionLink'

export default ({ children, to, type }) => (
  <TransitionLink to={ to } className={ cs(
    'Card',
    type == 'post' && 'Card--post',
    type == 'work' && 'Card--work'
  )}>
    { children }
  </TransitionLink>
)
