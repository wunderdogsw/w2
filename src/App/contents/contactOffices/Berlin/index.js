import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <h4>Berlin</h4>
    <address>
      Mikonkatu 13 A, 4 krs.<br />
      00100 Helsinki, Finland<br />
      <TransitionLink
        to="https://www.google.fi/maps/place/Mikonkatu+13,+00100+Helsinki"
        children="Map"
      />
    </address>
  </Fragment>
)
