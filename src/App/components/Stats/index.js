import './index.css'
import React, { Component, createRef } from 'react'
import cs from 'classnames'


export default ({ useAccent, children }) => (
  <section className={cs(
    'Stats',
    useAccent && 'Stats--useAccent'
  )}>
    { children }
  </section>
)
