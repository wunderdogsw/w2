import './index.css'
import React from 'react'
import * as cases from 'App/contents/cases'

export default ({ match }) => {
  const contentKey = match.params.content.toLowerCase()

  const Content = cases[contentKey]

  if (!Content) return 'wat no content'

  return (
    <div className="Case">
      <Content />
    </div>
  )
}
