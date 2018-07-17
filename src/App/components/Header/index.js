import './index.css'
import React from 'react'
import { Link } from 'react-router-dom'
import cs from 'classnames'
import { withState } from 'App/state'
import Logo from 'App/components/Logo'


export default withState(
  ({ splashShowing }) => (
    <header className={ cs('Header', !splashShowing && 'Header--showContent') }>
      <Logo useHorizontal to="/" />
      <nav>
        <Link to="/about" children="About" />
        <Link to="/career" children="Career" />
      </nav>
    </header>
  )
)
