import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <TransitionLink to="https://www.instagram.com/wunderdogsw" children="Instagram" />
    <TransitionLink to="https://www.linkedin.com/company/wunderdog-oy/" children="Linkedin" />
  </Fragment>
)
