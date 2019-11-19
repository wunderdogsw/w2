import './index.css'
import React from 'react'
import cs from 'classnames'

export default ({ minHeight, main, children }) => (
  <footer className={ cs(
    'Footer',
    !main && 'Footer--secondary',
    minHeight && 'Footer--isLarge'
  )}>
    { children }
  </footer>
)
