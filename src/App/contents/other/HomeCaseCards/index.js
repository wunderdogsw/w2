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
    <Card to="/Oodi">
      <Oodi/>
    </Card>
    <Card to="/Smartly">
      <Smartly/>
    </Card>
    <Card to="/Redbull">
      <RedBull/>
    </Card>
    <Card to="/BluePrintGenetics">
      <BluePrintGenetics/>
    </Card>
  </Fragment>
)
