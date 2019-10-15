import './index.css'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import cs from 'classnames'
import throttle from 'lodash.throttle'
import { withState } from 'App/state'
import Logo from 'App/components/Logo'
import TransitionLink from 'App/components/TransitionLink'
import { MainNav } from 'App/contents/other'



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
      this.setState({ logoShowing: window.scrollY == 0 })
    }

    hideNav = throttle(() => {
      this.setState({ navShowing: false })
    }, 500)


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
          <nav onClick={ this.handleNavClick }>
            <MainNav />
          </nav>
          <Logo className={cs(
            !logoShowing && 'Visibility--hidden'
          )} useHorizontal to="/" animate />
          <a
            href="#"
            className="Header__toggleNav"
            onClick={ this.toggleNav }
          />
        </header>
      )
    }
  }
))
