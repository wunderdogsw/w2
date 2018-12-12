import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <h4>Lund</h4>
    <address>
      Bankgatan 1<br />
      22352 Lund, Sweden<br />
       Business ID, 559106-6435<br />
      <TransitionLink
        to="https://www.google.fi/maps/place/Bankgatan+1+22352+Lund"
        children="Map"
      />
    </address>
  </Fragment>
)
