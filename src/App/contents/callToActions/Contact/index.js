import React, { Fragment } from 'react'
import Button from 'App/components/Button'
import TransitionLink from 'App/components/TransitionLink'
import Grid from 'App/components/Grid'
import Logo from 'App/components/Logo'
import { Helsinki, Berlin, Malmo, Empty } from 'App/contents/contactOffices'

export default () => (
  <Fragment>
    <Logo useHorizontal animate />
    <h2>We are more than<br/>code & design</h2>
  </Fragment>
)
