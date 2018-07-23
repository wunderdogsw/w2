import './index.css'
import React from 'react'
import { withState } from 'App/state'
import { CareerBox as Content } from 'App/contents/parts'

export default withState(
  () => (
    <div className="CareerBox">
      <Content />
    </div>
  )
)
