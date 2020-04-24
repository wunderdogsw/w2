import React, { Fragment } from 'react'

import TransitionLink from '../../../components/TransitionLink'

export default () => (
  <Fragment>
    <h2>Join the pack</h2>
    <TransitionLink className="TransitionLink--list" to="https://wunderdog.breezy.hr/p/5cd5b2850f13-open-applications">
      <span>Open application</span>
      <span class="grey">Helsinki & Berlin</span>
    </TransitionLink>
  </Fragment>
)
