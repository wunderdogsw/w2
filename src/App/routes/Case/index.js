import './index.css'
import React from 'react'
import cases from 'App/contents/cases'
// import TestComponent from 'App/components/TestComponent'

export default ({ match }) => {
  const contentKey = match.params.content.toLowerCase()
  const Content = cases[contentKey]

  if (!Content) return 'wat no content'

  return (
    <div className="Case">
      <Content />
      {/* <TestComponent /> */}
    </div>
  )
}
