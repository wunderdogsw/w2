import React, { Fragment } from 'react'
import Button from 'App/components/Button'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <h1>Join us</h1>
    <p>
    Unique people make us who we are.<br/>
    We are now hiring new personalities to join our pack.
    </p>
    <Button to="https://weare.wunder.dog/join-us" reversed>
      View more
    </Button>
  </Fragment>
)
