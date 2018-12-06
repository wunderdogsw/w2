import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <h4>Berlin</h4>
    <address>
      Kottbusser Damm 103A<br />
      10967 Berlin, Germany<br />
      <TransitionLink
        to="https://www.google.fi/maps/place/Kottbusser+Damm+103A+10967+Berlin"
        children="Map"
      />
    </address>
  </Fragment>
)
