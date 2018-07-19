import './index.css'
import React from 'react'
import TransitionLink from 'App/components/TransitionLink'

export default ({ children, to }) => (
  <TransitionLink to={ to } className="Card">
    { children }
  </TransitionLink>
)
