import './index.css'
import React from 'react'
import Header from 'App/components/Header'
import Hero from 'App/components/Hero'
import CaseCards from 'App/components/CaseCards'

export default () => (
  <div className="Home">
    <Header />
    <Hero />
    <CaseCards />
  </div>
)
