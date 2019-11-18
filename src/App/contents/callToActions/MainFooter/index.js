import React, { Fragment } from 'react'
import Button from 'App/components/Button'
import TransitionLink from 'App/components/TransitionLink'
import Grid from 'App/components/Grid'
import Logo from 'App/components/Logo'
import { Helsinki, Berlin, Malmo, Empty } from 'App/contents/contactOffices'
import { MainNav } from 'App/contents/other'

export default () => (
  <Fragment>
    <Logo useHorizontal to="/" />
    <h1>We are more than code and design</h1>
    <nav>
      <MainNav />
    </nav>
  </Fragment>
)
