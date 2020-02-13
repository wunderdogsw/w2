import React, { Fragment } from 'react'

import TransitionLink from '../../../components/TransitionLink'

export default () => (
  <Fragment>
    <h1>Let's talk!</h1>
    <p>
      <TransitionLink to= "mailto:hello@wunderdog.fi">
        hello@wunderdog.fi
      </TransitionLink>
    </p>
  </Fragment>
)
