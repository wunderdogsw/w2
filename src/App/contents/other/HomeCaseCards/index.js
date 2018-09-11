import React, { Fragment } from 'react'
import Card from 'App/components/Card'
import {
  Futistietaja,
  Smartly,
  PerusTerveys,
  Pexraytech,
} from 'App/contents/cards'

export default () => (
  <Fragment>
    <Card to="/smartly">
      <Smartly/>
    </Card>
    <Card to="/futistietaja">
      <Futistietaja/>
    </Card>
    <Card to="/perusterveys">
      <PerusTerveys/>
    </Card>
    <Card to="/pexraytech">
      <Pexraytech/>
    </Card>
  </Fragment>
)
