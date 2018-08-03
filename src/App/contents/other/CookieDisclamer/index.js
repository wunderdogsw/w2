import React, { Fragment } from 'react'
import Button from 'App/components/Button'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <p>Yadda yadda cookies smookies. <TransitionLink to="/privacy">Check out our privacy policy</TransitionLink></p>
    <Button
      preventDefault
      name="allow"
      children="Allow"
      reversed
    />
    <Button
      preventDefault
      name="disallow"
      children="Nope"
      outlined
    />
  </Fragment>
)