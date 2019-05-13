import React, { Fragment } from 'react'
import Button from 'App/components/Button'

export default () => (
  <Fragment>
    <h1>Wundernut</h1>
    <p>
      Our latest coding challenge is out! Check it, and crack the nut by 2 June!</p>
    <Button to="https://wunder.dog/pahkina" reversed>
      Crack the nut
    </Button>
  </Fragment>
)
