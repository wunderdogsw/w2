import React, { Component } from 'react'
import Cookies from 'js-cookie'

import './index.css'
import { ALLOW_COOKIES } from '../../constants'

// Disallowing cookies will disable analytics tracking.
// See App/utils/analytics.js



export default class extends Component {
  state = {
    hide: Cookies.get(ALLOW_COOKIES) === '1',
  }

  handleClick = e => {
    const { target } = e
    switch ( target.name ) {
      case 'allow':
        this.allow()
        break

      case 'disallow':
        this.disallow()
        break

      default:
    }
  }

  allow() {
    Cookies.set(ALLOW_COOKIES, 1)
    this.setState({ hide: true })
  }

  disallow() {
    Cookies.set(ALLOW_COOKIES, 0)
    this.setState({ hide: true })
  }

  render() {
    const { children } = this.props
    const { hide } = this.state
    if ( hide ) return null
    return (
      <div className="CookieMonster" onClick={ this.handleClick }>
        { children }
      </div>
    )
  }
}
