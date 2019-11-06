import './index.css'
import React from 'react'
import cs from 'classnames'

export default ({ grid, color, large, children }) => {
  if (!children) return null

  return (
    <section className={ cs(
      'CallToAction',
      grid && 'CallToAction--grid',
      large && 'CallToAction--large',
      color === 'blue' && 'CallToAction--blue',
      color === 'grey' && 'CallToAction--grey'
    )}>
      <div className="CallToAction__inner">
        { children }
      </div>
    </section>
  )
}
