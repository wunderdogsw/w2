import './index.css'
import React, { Component } from 'react'
import * as cards from 'App/contents/cards'
import Card from 'App/components/Card'


export default () => (
  <section className="CaseCards">
    <Card to="/redbull">
      { cards['RedBull']() }
    </Card>
    <Card to="/smartly">
      { cards['Smartly']() }
    </Card>
    <Card to="/perusterveys">
      { cards['PerusTerveys']() }
    </Card>
    <Card to="/pexraytech">
      { cards['Pexraytech']() }
    </Card>
  </section>
)
