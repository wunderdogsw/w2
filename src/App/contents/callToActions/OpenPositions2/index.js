import React, { Fragment } from 'react'
import Button from 'App/components/Button'

export default () => (
  <Fragment>
    <h1>Wundernut</h1>
    <p>
      Our latest coding challenge, Wundernut Back to School, is running.
      Send your solution by September 30. Check the nut @ GitHub.
    </p>
    <Button to="https://github.com/wunderdogsw/wunderpahkina-vol9" reversed>
      Crack the nut
    </Button>
  </Fragment>
)
