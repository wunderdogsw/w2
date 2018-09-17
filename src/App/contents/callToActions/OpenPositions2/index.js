import React, { Fragment } from 'react'
import Button from 'App/components/Button'

export default () => (
  <Fragment>
    <h1>Wundernut</h1>
    <p>
      Participate to our latest coding challenge in github!
    </p>
    <Button to="https://github.com/wunderdogsw/wunderpahkina-vol9" reversed>
      Crack the nut
    </Button>
  </Fragment>
)
