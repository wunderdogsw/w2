import './index.css'
import React from 'react'

export default ({ children }) => {
  const childs = Array.isArray(children) ? children : [children]
  return (
    <section className="ContactRow">
      <div className="ContactRow__info">
        { childs[0] }
      </div>
      <ul className="ContactRow__faces">
        { childs.filter((_, i) => i !== 0).map(child => <li>{ child }</li>) }
      </ul>
    </section>
  )
}
