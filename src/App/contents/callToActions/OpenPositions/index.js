import React, { Fragment } from 'react'
import Button from 'App/components/Button'
import TransitionLink from 'App/Components/TransitionLink'

export default () => (
  <Fragment>
    <h1>Open positions</h1>
    <p>
      <TransitionLink to="https://www.recright.com/careers/en/wunderdog/full-stack-developer-5b6445f07c244b0001364709">
        Full-stack developer, Lund
      </TransitionLink><br/>
      <TransitionLink to="https://www.recright.com/careers/en/wunderdog/full-stack-developer-5b6308472954ea0001a7ef5b">
        Full-stack developer, Helsinki
      </TransitionLink><br/>
      <TransitionLink to= "https://www.recright.com/careers/en/wunderdog/full-stack-developer-5b6446f27c244b00013647d4">
        Full-stack developer, Berlin
      </TransitionLink><br/>
    </p>
    <Button to="https://www.recright.com/careers/en/wunderdog" reversed>
      All Positions
    </Button>
  </Fragment>
)
