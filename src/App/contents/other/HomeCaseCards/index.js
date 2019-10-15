import React, { Fragment } from 'react'
import Card from 'App/components/Card'
import {
  RedBull,
  Smartly,
  Oodi,
  BluePrintGenetics,
} from 'App/contents/cards'

export default () => (
  <Fragment>
    <Card to="/work/oodi">
      <Oodi/>
    </Card>
    <Card to="/work/smartly">
      <Smartly/>
    </Card>
    <Card to="/work/redbull">
      <RedBull/>
    </Card>
    <Card to="/work/blueprint-genetics">
      <BluePrintGenetics/>
    </Card>
  </Fragment>
)
