import './index.css'
import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import cs from 'classnames'
import { withState } from 'App/state'
import Logo from 'App/components/Logo'


export default withRouter(withState(
  ({ splashShowing, match }) => (
    <header className={cs(
      'Header',
      !splashShowing && 'Header--showContent',

      // only animate when exact path, default is '/'
      match.isExact && 'Header--animate'
    )}>
      <div className="Header__inner">
        <Logo useHorizontal to="/" />
        <nav>
          <Link to="/about" children="About" />
          <Link to="/career" children="Career" />
        </nav>
      </div>
    </header>
  )
))
