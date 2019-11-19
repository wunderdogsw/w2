import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'

export default ({minimal}) => (
  <Fragment>
    <h2>Helsinki</h2>
    <address>
      Mikonkatu 13 A, 4th floor<br />
      00100 Helsinki, Finland<br />
      Business ID, 2617416-4<br />
      { !minimal &&
        <TransitionLink
          to="https://www.google.fi/maps/place/Mikonkatu+13,+00100+Helsinki"
          children="Map"
        />
      }
    </address>
  </Fragment>
)
