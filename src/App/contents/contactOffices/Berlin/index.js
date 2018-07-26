import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <h4>Berlin</h4>
    <address>
      Wilmersdorfer Str. 60-61<br />
      10627 Berlin, Germany<br />
      <TransitionLink
        to="https://www.google.fi/maps/place/Wilmersdorfer+Str+60-61+10627+Berlin"
        children="Map"
      />
    </address>
  </Fragment>
)
