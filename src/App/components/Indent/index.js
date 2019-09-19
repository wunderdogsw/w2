import './index.css'
import React from 'react'
import cs from 'classnames'

export default ({ twice, children }) => (
  <div className={ cs(
    'Indent',
    twice && 'Indent--twice'
  )}>
    { children }
  </div>
)
