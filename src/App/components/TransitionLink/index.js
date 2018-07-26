import './index.css'
import React, { Component, Fragment } from 'react'
import cs from 'classnames'
import { withRouter } from 'react-router-dom'
import { withState } from 'App/state'
import prefixStyles from 'inline-style-prefixer/static'


export default withState(withRouter(
  class extends Component {
    handleClick = async e => {
      const { history, to, userNavigated } = this.props
      const external = to && to.indexOf('http') === 0

      e.preventDefault()
      if ( history.location.pathname === to ) return

      await this.transition(external)
      userNavigated()

      if (external) {
        window.open(to, '_blank')
      } else {
        history.push(to)
      }
    }

    transition = external => new Promise(resolve => {
      const root = document.getElementById('root')
      const style = prefixStyles({
        opacity: 0,
        transform: 'translate3d(0, -5px, 0)',
        transitionDuration: '100ms',
      })
      Object.entries(style).forEach(([prop, value]) =>
        root.style[prop] = value
      )

      setTimeout(() => {
        Object.entries(prefixStyles({
          transform: 'translate3d(0, 5px, 0)',
        })).forEach(([prop, value]) =>
          root.style[prop] = value
        )
      }, 100)

      setTimeout(() => {
        resolve()
        setTimeout(() => {
          Object.keys(style).forEach(prop => root.style[prop] = '')
        }, external ? 1000 : 50)
      }, 150)
    })

    render() {
      const { children, to, className, onClick, history } = this.props
      const external = to && to.indexOf('http') === 0
      return (
        <a
          className={cs(
            'TransitionLink',
            history.location.pathname === to && 'active',
            className
          )}
          href={ to }
          onClick={ onClick ? onClick : this.handleClick }
          children={ <Fragment>{ children }{ external ? ' ↗' : null }</Fragment> }
        />
      )
    }
  }
))
