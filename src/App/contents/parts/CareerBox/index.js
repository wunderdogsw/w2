import React, { Fragment } from 'react'
import Button from 'App/components/Button'

export default () => (
  <Fragment>
    <h1>Join the pack</h1>
    <p>
      We believe happy people create the best workplace.<br />
      Welcome to join our pack!
    </p>
    <Button to="/career" useAccent reversed>
      Read more
    </Button>
  </Fragment>
)
