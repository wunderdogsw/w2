import React from 'react'

import './index.css'

export default ({children, slogan}) => {
  const salespeople = Array.isArray(children) ? children : [children]
  return (
    <section className="CaseContactInfo">
      <h2 className="CaseContactInfo__header">
        Interested?<br />{slogan}
      </h2>
      <ul className="CaseContactInfo__salespeople">
        { salespeople.map((salesperson, i) =>
          <li className="CaseContactInfo__salespeople__personCard" key={i}>{ salesperson }</li>
        )}
      </ul>
    </section>
  )
}


