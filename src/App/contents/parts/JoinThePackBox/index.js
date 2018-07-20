import React, { Fragment } from 'react'
import MainTitle from 'App/components/MainTitle'
import Button from 'App/components/Button'

export default () => (
  <Fragment>
    <h1>Join the pack</h1>
    <p>
      We believe happy people create the best workplace.<br />
      Welcome to join our pack!
    </p>
    <Button to="/careers" useAccent reversed>
      Read more
    </Button>
  </Fragment>
)
