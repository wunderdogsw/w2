import './index.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Hero from 'App/components/Hero'

export default () => (
  <div className="Home">
    <Hero />
    <Link to="/case/Smartly">smartl updateed</Link>
  </div>
)
