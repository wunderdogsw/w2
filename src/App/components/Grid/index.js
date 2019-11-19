import './index.css'
import React from 'react'
import cs from 'classnames'

export default ({ justifyContent, column, children, large }) => (
  <div className={cs(
    'Grid',
    large && 'Grid--large',
    column && 'Grid--column',
    justifyContent && `Grid--${justifyContent}`
  )}>
    { children }
  </div>
)
