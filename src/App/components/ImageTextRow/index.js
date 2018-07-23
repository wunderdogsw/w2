import './index.css'
import React from 'react'
import cs from 'classnames'

export default ({ children, reversed }) => {
  const childs = Array.isArray(children) ? children : [children]
  return (
    <div className={cs( 'ImageTextRow', reversed && 'ImageTextRow--reversed' )}>
      <div className="ImageTextRow__image">
        { childs[0] }
      </div>
      <div className="ImageTextRow__content">
        { childs.filter((_, i) => i !== 0) }
      </div>
    </div>
  )
}
