import './index.css'
import React from 'react'
import Tilt from 'react-tilt'

export default ({ children }) => (
  <ul className="LogoGrid">
    { children.map(([alt, url]) => (
      <li title={ alt }>
        <Tilt options={{ reverse: true, scale: 1.05, reset: true }}>
          <div
            style={{ backgroundImage: `url(${ url })` }}
          />
        </Tilt>
      </li>
    ))}
  </ul>
)
