import './index.css'
import React from 'react'
import { Intro as Content } from 'App/contents/other'

export default ({ children }) => (
  <div className="Intro"
    children={ <Content /> }
  />
)
