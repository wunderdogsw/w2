import './index.css'
import React from 'react'

export default ({ title, children }) => (
  <div className="Chapter">
    <h4>{ title }</h4>
    { children }
  </div>
)
