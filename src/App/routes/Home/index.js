import './index.css'
import React from 'react'
import Hero from 'App/components/Hero'
import CaseCards from 'App/components/CaseCards'
import Clients from 'App/components/Clients'
import CareerBox from 'App/components/CareerBox'

export default () => (
  <div className="Home">
    <Hero />
    <CaseCards />
    <Clients />
    <CareerBox />
  </div>
)
