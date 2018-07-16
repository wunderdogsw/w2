import './index.css'
import React from 'react'
import { withState } from 'App/state'
import Logo from 'App/components/Logo'



export default withState(
  ({ splashShowing, hideSplash }) => (
    <div className="Splash">
      <Logo animate />
    </div>
  )
)
