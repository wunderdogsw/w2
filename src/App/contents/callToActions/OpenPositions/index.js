import React, { Fragment } from 'react'
import Button from 'App/components/Button'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <h1>Open positions</h1>
    <p>
      <TransitionLink to="https://wunderdog.breezy.hr/p/9aa01a0d81cd-fullstack-developer-helsinki-finland">
        Full-stack developer, Helsinki
      </TransitionLink><br/>
      <TransitionLink to="https://wunderdog.breezy.hr/p/4512f54c796a-fullstack-developer-d-f-m--berlin--germany">
        Full-stack developer, Berlin
      </TransitionLink><br/>
      <TransitionLink to= "https://wunderdog.breezy.hr/p/9fdd4744af8f-fullstack-developer-malm--sweden">
        Full-stack developer, Malmö
      </TransitionLink><br/>
    </p>
    <Button to="https://wunderdog.breezy.hr/" reversed>
      All Positions
    </Button>
  </Fragment>
)
