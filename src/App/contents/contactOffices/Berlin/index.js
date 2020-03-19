import React, { Fragment } from 'react'

import TransitionLink from '../../../components/TransitionLink'

export default ({minimal}) => (
  <Fragment>
    <h2>Berlin</h2>
    <address>
      Schinkestraße 9<br />
      12047 Berlin, Germany<br />
      Business ID HRB 191256<br />
      { !minimal &&
        <TransitionLink
        to="https://www.google.fi/maps/place/Schinkestra%C3%9Fe+9,+12047+Berlin"
        children="Map"
        />
      }
    </address>
  </Fragment>
)
