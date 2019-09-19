import './index.css'
import React from 'react'
import cs from 'classnames'

export default ({ useDark, children }) => (
  <div className={cs(
    'Block',
    useDark && 'Block--dark'
  )}>
    { children }
  </div>
)
