import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'

export default ({minimal}) => (
  <Fragment>
    <address>
      Stora Varvsgatan 6a<br />
      21119 Malmö, Sweden<br />
      Business ID, 559106-6435<br />
      { !minimal &&
        <TransitionLink
          to="https://www.google.fi/maps/place/Bankgatan+1+22352+Lund"
          children="Map"
        />
      }
    </address>
  </Fragment>
)
