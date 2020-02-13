import React, { Fragment } from 'react'

export default ({ action, title, to }) => (
  <Fragment>
    <p>{action}</p>
    <h1>{title}</h1>
  </Fragment>
)
