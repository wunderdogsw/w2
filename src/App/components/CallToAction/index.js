import './index.css'
import React from 'react'
import cs from 'classnames'

export default ({ grid, children }) => {
  if (!children) return null

  return (
    <section className={ cs(
      'CallToAction',
      grid && 'CallToAction--grid'
    )}>
      <div className="CallToAction__inner">
        { children }
      </div>
    </section>
  )
}
