import './index.css'
import React from 'react'
import { withState } from 'App/state'
import { JoinThePackBox as Content } from 'App/contents/parts'

export default withState(
  () => (
    <div className="JoinThePackBox">
      <Content />
    </div>
  )
)
