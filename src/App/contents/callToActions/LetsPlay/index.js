import React, { Fragment } from 'react'
import Button from 'App/components/Button'

export default () => (
  <Fragment>
    <h1>Let's play!</h1>
    <p>The campaign is still ongoing.</p>
    <Button to="https://yle.fi/urheilu/3-10531024" target="_blank">Play</Button>
  </Fragment>
)
