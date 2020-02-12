import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import cs from 'classnames'

import './index.css'
import { withState } from '../../state'
import Logo from '../Logo'
import { MainNav, SocialNav } from '../../contents/other'


export default withRouter(withState(
  class extends Component {
    state = {
      navShowing: false,
      logoShowing: true
    }

    componentDidMount() {
      window.addEventListener('scroll', this.toggleLogo)
      window.addEventListener('resize', this.hideNav)
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.toggleLogo)
      window.removeEventListener('resize', this.hideNav)
    }

    handleNavClick = e => {
      this.hideNav()
    }

    toggleNav = e => {
      e.preventDefault()
      this.setState({ navShowing: !this.state.navShowing })
    }

    showNav = () => {
      this.setState({ navShowing: true })
    }

    toggleLogo = () => {
      this.setState({ logoShowing: window.scrollY <= 20 })
    }

    hideNav = () => {
      this.setState({ navShowing: false })
    }


    render() {
      const { splashShowing, match } = this.props
      const { navShowing, logoShowing } = this.state
      return (
        <header className={cs(
          'Header',
          !splashShowing && 'Header--contentShowing',
          navShowing && 'Header--navShowing',
          // only animate when exact path, default is '/'
          match.isExact && 'Header--animate'
        )}>
          <div
            className="Main-navigation"
            onClick={ this.handleNavClick }
          >
            <nav>
              <MainNav />
            </nav>
            <nav>
              <SocialNav />
            </nav>
          </div>
          <Logo className={cs(
            !logoShowing && 'Visibility--hidden'
          )} useHorizontal to="/" />
          <a
            href="#"
            className="Header__toggleNav"
            onClick={ this.toggleNav }
          >
            <div class="icon">
              <span/>
              <span/>
              <span/>
            </div>
          </a>
        </header>
      )
    }
  }
))
