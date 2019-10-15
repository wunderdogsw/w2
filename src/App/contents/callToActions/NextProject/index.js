import React, { Fragment } from 'react'
import Button from 'App/components/Button'
import TransitionLink from 'App/components/TransitionLink'

export default ({ action, title, to }) => (
  <Fragment>
    <p>{action}</p>
    <h1>{title}</h1>
  </Fragment>
)
