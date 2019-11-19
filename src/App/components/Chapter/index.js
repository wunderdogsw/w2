import './index.css'
import React from 'react'
import cs from 'classnames'

export default ({ children, large }) => (
  <div className={ cs(
    'Chapter',
    large && 'Chapter--large'
  )}>
    { children }
  </div>
)
