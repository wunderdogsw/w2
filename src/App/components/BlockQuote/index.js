import './index.css'
import React from 'react'

export default ({ children, by }) => (
  <blockquote className="BlockQuote">
    <p>{ children }</p>
    { by &&
      <footer>
        { by }
      </footer>
    }
  </blockquote>
)
