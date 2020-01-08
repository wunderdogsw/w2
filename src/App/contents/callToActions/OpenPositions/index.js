import React, { Fragment } from 'react'
import Button from 'App/components/Button'
import Grid from 'App/components/Grid'
import DoubleLine from 'App/components/DoubleLine'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <h2>Join the pack</h2>
    <TransitionLink className="TransitionLink--list" to="https://wunderdog.breezy.hr/p/685af3eaf0c2-backend-developer-consultant">
      <span>Backend developer</span>
      <span class="grey">Helsinki</span>
    </TransitionLink>
    <TransitionLink className="TransitionLink--list" to="https://wunderdog.breezy.hr/p/07ed55ef20f3-frontend-developer-consultant-helsinki">
      <span>Frontend developer</span>
      <span class="grey">Helsinki</span>
    </TransitionLink>
    <TransitionLink className="TransitionLink--list" to="https://wunderdog.breezy.hr/p/61fa38d29b4f-ui-ux-developer-consultant-helsinki">
      <span>UI/UX Developer</span>
      <span class="grey">Helsinki</span>
    </TransitionLink>
    <TransitionLink className="TransitionLink--list" to="https://wunderdog.breezy.hr/p/9aa01a0d81cd-fullstack-developer-helsinki-finland">
      <span>Full-stack developer</span>
      <span class="grey">Helsinki</span>
    </TransitionLink>
    <TransitionLink className="TransitionLink--list" to="https://wunderdog.breezy.hr/p/61fa38d29b4f-ui-ux-developer-consultant-helsinki">
      <span>UI/UX Developer</span>
      <span class="grey">Helsinki</span>
    <TransitionLink className="TransitionLink--list" to="https://wunderdog.breezy.hr/p/4512f54c796a-fullstack-developer-d-f-m--berlin--germany">
      <span>Full-stack developer</span>
      <span class="grey">Berlin</span>
    </TransitionLink>
    <TransitionLink className="TransitionLink--list" to="https://wunderdog.breezy.hr/p/5cd5b2850f13-open-applications">
      <span>Open application</span>
      <span class="grey">Helsinki</span>
    </TransitionLink>
  </Fragment>
)
