import React, { Fragment } from 'react'
import Card from 'App/components/Card'
import {
  RedBull,
  Smartly,
  Oodi,
  Pexraytech,
} from 'App/contents/cards'

export default () => (
  <Fragment>
    <Card to="/Oodi">
      <Oodi />
    </Card>
    <Card to="/RedBull">
      <RedBull/>
    </Card>
    <Card to="/Smartly">
      <Smartly/>
    </Card>
    <Card to="/Oodi">
      <Oodi />
    </Card>
  </Fragment>
)
