import React, { Fragment } from 'React'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <h4>Lund</h4>
    <p>
      Mikonkatu 13 A, 4 krs.<br />
      00100 Helsinki, Finland<br />
      <TransitionLink
        to="https://www.google.fi/maps/place/Mikonkatu+13,+00100+Helsinki"
        children="Map"
      />
    </p>
  </Fragment>
)
