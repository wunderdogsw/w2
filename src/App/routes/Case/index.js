import './index.css'
import React from 'react'
import * as cases from 'App/contents/cases'

const casesLower = Object
  .entries(cases)
  .reduce((res, [key, value]) => {
    res[key.toLowerCase()] = value
    return res
  }, {})

export default ({ match }) => {
  const contentKey =
    match.params.content
    && match.params.content.toLowerCase()
  const Content = casesLower[contentKey]

  if (!Content) return 'wat no content'

  return (
    <div className="Case">
      <Content />
    </div>
  )
}
