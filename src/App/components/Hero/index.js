import React from 'react'
import { withState } from 'App/state'
import { Hero } from 'App/contents/parts'


export default withState(
  ({ splashShowing }) => (
    <div className="Hero">
      <Hero />
    </div>
  )
)
