import './index.css'
import React from 'react'
import { withRouter } from 'react-router-dom'
import cs from 'classnames'
import { withState } from 'App/state'
import Logo from 'App/components/Logo'
import TransitionLink from 'App/components/TransitionLink'


export default withRouter(withState(
  ({ splashShowing, match }) => (
    <header className={cs(
      'Header',
      !splashShowing && 'Header--showContent',

      // only animate when exact path, default is '/'
      match.isExact && 'Header--animate'
    )}>
      <Logo useHorizontal to="/" />
      <nav>
        <TransitionLink to="/about" children="About" />
        <TransitionLink to="/career" children="Career" />
      </nav>
    </header>
  )
))
