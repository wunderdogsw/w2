import React from 'react'
import { withState } from 'App/state'

export default withState(({ splashShowing, hideSplash }) => (
  <div className="Splash">
    splashy splash { splashShowing ? 'showing' : 'hiddn' }
    <br />
    <button onClick={ hideSplash }>hidee</button>
  </div>
))
