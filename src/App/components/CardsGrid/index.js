import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'

export default ({ children, disharmony }) => (
  <section className={ cs(
    'CardsGrid',
    disharmony && 'CardsGrid--disharmony'
  )}>
    { children }
  </section>
)
