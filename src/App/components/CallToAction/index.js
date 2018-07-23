import './index.css'
import React from 'react'

export default ({ children }) => {
  if (!children) return null

  return (
    <section className="CallToAction">
      { children }
    </section>
  )
}
