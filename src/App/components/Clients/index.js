import './index.css'
import React from 'react'
import { withState } from 'App/state'
import { Clients as Content } from 'App/contents/parts'


export default withState(
  ({ splashShowing }) => (
    <section
      className="Clients"
      children={ <Content /> }
    />
  )
)
