import React, { Fragment } from 'react'
import Card from 'App/components/Card'
import {
  RedBull,
  Smartly,
  PerusTerveys,
  Pexraytech,
} from 'App/contents/cards'

export default () => (
  <Fragment>
    <Card to="/redbull">
      <RedBull/>
    </Card>
    <Card to="/smartly">
      <Smartly/>
    </Card>
    <Card to="/perusterveys">
      <PerusTerveys/>
    </Card>
    <Card to="/pexraytech">
      <Pexraytech/>
    </Card>
  </Fragment>
)
