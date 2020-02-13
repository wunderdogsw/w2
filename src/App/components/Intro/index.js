import './index.css'
import React from 'react'
import { Intro as Content } from '../../contents/other'

export default ({ children }) => (
  <div className="Intro"
    children={ <Content /> }
  />
)
