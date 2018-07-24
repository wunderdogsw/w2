import './index.css'
import React from 'react'
import Hero from 'App/components/Hero'
import Nudge from 'App/components/Nudge'
import CaseCards from 'App/components/CaseCards'
import Clients from 'App/components/Clients'
import CallToAction from 'App/components/CallToAction'
import { JoinThePack } from 'App/contents/callToActions'

export default () => (
  <div className="Home">
    <Hero />
    <Nudge>
      <CaseCards />
      <Clients />
      <CallToAction>
        <JoinThePack />
      </CallToAction>
    </Nudge>
  </div>
)
