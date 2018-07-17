import './index.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from 'App/components/Header'
import Hero from 'App/components/Hero'

export default () => (
  <div className="Home">
    <Header />
    <Hero />
    <Link to="/case/Smartly">smartl updateed</Link>
  </div>
)
