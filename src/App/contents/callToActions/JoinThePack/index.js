import React, { Fragment } from 'react'
import Button from 'App/components/Button'

export default () => (
  <Fragment>
    <h1>Join the pack</h1>
    <p>
      We share a passion to solve real world problems with technology.<br />
      Welcome to join us!
    </p>
    <Button to="/career" useAccent>
      Read more
    </Button>
  </Fragment>
)
