import './index.css'
import React from 'react'
import cs from 'classnames'

export default ({ children, useAccent }) => (
  <section className={cs('Stats', useAccent && 'Stats--useAccent')}>
    <ul>{ children }</ul>
  </section>
)
