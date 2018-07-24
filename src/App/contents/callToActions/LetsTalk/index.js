import React, { Fragment } from 'react'
import Button from 'App/components/Button'

export default () => (
  <Fragment>
    <h1>Let's talk!</h1>
    <p>Find various ways to contact us from our contact page</p>
    <Button to="/contact" useAccent reversed>Contact</Button>
  </Fragment>
)
