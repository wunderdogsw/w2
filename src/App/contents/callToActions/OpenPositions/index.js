import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <h1>Open positions</h1>
    <p>
      <TransitionLink to="https://wunderdog.breezy.hr/p/9fdd4744af8f">
        Full-stack developer, Lund
      </TransitionLink>
      <br />
      <TransitionLink to="https://wunderdog.breezy.hr/p/9aa01a0d81cd">
        Full-stack developer, Helsinki
      </TransitionLink>
      <br />
      <TransitionLink to="https://wunderdog.breezy.hr/p/4512f54c796a">
        Full-stack developer, Berlin
      </TransitionLink>
      <br />
    </p>
  </Fragment>
)
