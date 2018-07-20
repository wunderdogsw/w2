import './index.css'
import React from 'react'
import Hero from 'App/components/Hero'
import CaseCards from 'App/components/CaseCards'
import Clients from 'App/components/Clients'
import JoinThePackBox from 'App/components/JoinThePackBox'

export default () => (
  <div className="Home">
    <Hero />
    <CaseCards />
    <Clients />
    <JoinThePackBox />
  </div>
)
