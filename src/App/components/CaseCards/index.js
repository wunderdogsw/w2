import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'

export default ({ children, unAligned }) => {
  return (
    <section className="CaseCards" className={cs( 'CaseCards', unAligned && 'CaseCards--unAligned')}>
      { children }
    </section>
  )
}
