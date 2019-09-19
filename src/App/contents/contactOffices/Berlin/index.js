import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'

export default ({minimal}) => (
  <Fragment>
    <address>
      Kottbusser Damm 103A<br />
      10967 Berlin, Germany<br />
      Business ID HRB 191256<br />
      { !minimal &&
        <TransitionLink
        to="https://www.google.fi/maps/place/Kottbusser+Damm+103A+10967+Berlin"
        children="Map"
        />
      }
    </address>
  </Fragment>
)
