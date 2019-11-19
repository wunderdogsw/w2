import './index.css'
import React from 'react'
import TransitionLink from 'App/components/TransitionLink'
import cs from 'classnames'

export default ({ children, to, type }) => (
  <TransitionLink to={ to } className={ cs(
    'Card',
    type == 'post' && 'Card--post',
    type == 'work' && 'Card--work'
  )}>
    { children }
  </TransitionLink>
)
