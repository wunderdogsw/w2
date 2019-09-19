import './index.css'
import React from 'react'
import cs from 'classnames'

export default ({ justifyContent, children, large }) => (
  <div className={cs(
    'Grid',
    large && 'Grid--large',
    justifyContent && `Grid--${justifyContent}`
  )}>
    { children }
  </div>
)
