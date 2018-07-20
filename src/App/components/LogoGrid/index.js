import './index.css'
import React from 'react'

export default ({ children }) => (
  <ul className="LogoGrid">
    { children.map(([alt, url]) => (
      <li>
        <span
          style={{ backgroundImage: `url(${ url })` }}
          title={ alt }
        />
      </li>
    ))}
  </ul>
)
