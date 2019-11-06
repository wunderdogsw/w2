import React, { Fragment } from 'react'
import Button from 'App/components/Button'
import Grid from 'App/components/Grid'
import DoubleLine from 'App/components/DoubleLine'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <h2>Apply for a position below, or send us a heartfelt letter</h2>
    <TransitionLink className="TransitionLink--list" to="https://wunderdog.breezy.hr/p/9aa01a0d81cd-fullstack-developer-helsinki-finland">
      <span>Full-stack developer</span>
      <span class="grey">Helsinki, Finland</span>
    </TransitionLink>
    <TransitionLink className="TransitionLink--list" to="https://wunderdog.breezy.hr/p/4512f54c796a-fullstack-developer-d-f-m--berlin--germany">
      <span>Full-stack developer</span>
      <span class="grey">Berlin, Germany</span>
    </TransitionLink>
    <TransitionLink className="TransitionLink--list" to= "https://wunderdog.breezy.hr/p/9fdd4744af8f-fullstack-developer-malm--sweden">
      <span>Full-stack developer</span>
      <span class="grey">Malmö, Sweden</span>
    </TransitionLink>
  </Fragment>
)
