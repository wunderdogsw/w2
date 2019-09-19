import React, { Fragment } from 'react'
import Button from 'App/components/Button'
import DoubleLine from 'App/components/DoubleLine'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <h2>Open positions</h2>
    <DoubleLine>
      <TransitionLink to="https://wunderdog.breezy.hr/p/9aa01a0d81cd-fullstack-developer-helsinki-finland">
        Full-stack developer, Helsinki
      </TransitionLink><br/>
      <TransitionLink to="https://wunderdog.breezy.hr/p/4512f54c796a-fullstack-developer-d-f-m--berlin--germany">
        Full-stack developer, Berlin
      </TransitionLink><br/>
      <TransitionLink to= "https://wunderdog.breezy.hr/p/9fdd4744af8f-fullstack-developer-malm--sweden">
        Full-stack developer, Malmö
      </TransitionLink>
    </DoubleLine>
  </Fragment>
)
