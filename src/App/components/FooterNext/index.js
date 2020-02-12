import React from 'react'

import './index.css'
import TransitionLink from '../TransitionLink'

export default ({ action, title, to, image }) => (
  <TransitionLink to={ to } className="FooterNext">
    <div className="Image" style={{ backgroundImage: `url(${ image })` }} />

    <p>{action}</p>
    <h1>{title}</h1>
  </TransitionLink>
)
