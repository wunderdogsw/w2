import './index.css'
import React, { Component } from 'react'
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

      await this.transition()
      userNavigated()

      if (external) {
        window.location = to
      } else {
        history.push(to)
      }
    }

    transition = () => new Promise(resolve => {
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
        }, 50)
      }, 150)
    })

    render() {
      const { children, to, className, onClick, history } = this.props
      return (
        <a
          className={cs(
            'TransitionLink',
            history.location.pathname === to && 'active',
            className
          )}
          href={ to }
          onClick={ onClick ? onClick : this.handleClick }
          children={ children }
        />
      )
    }
  }
))
