import React, { Fragment } from 'react'
import Button from 'App/components/Button'
import TransitionLink from 'App/components/TransitionLink'
import Grid from 'App/components/Grid'
import Logo from 'App/components/Logo'
import { Helsinki, Berlin, Lund, Empty } from 'App/contents/contactOffices'

export default () => (
  <Fragment>
    <Grid large>
      <Logo useHorizontal animate />
      <Grid justifyContent="flex-end">
        <Helsinki minimal/>
        <Berlin minimal/>
        <Lund minimal/>
      </Grid>
    </Grid>
  </Fragment>
)
