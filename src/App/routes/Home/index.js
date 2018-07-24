import './index.css'
import React, { Component } from 'react'
import Hero from 'App/components/Hero'
import Nudge from 'App/components/Nudge'
import CaseCards from 'App/components/CaseCards'
import Clients from 'App/components/Clients'
import CallToAction from 'App/components/CallToAction'
import { JoinThePack } from 'App/contents/callToActions'

export default class extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="Home">
        <Hero />
        <Nudge>
          <CaseCards />
        </Nudge>
        <Clients />
        <CallToAction>
          <JoinThePack />
        </CallToAction>
      </div>
    )
  }
}
