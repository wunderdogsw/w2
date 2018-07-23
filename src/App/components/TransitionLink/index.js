import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'
import { withRouter } from 'react-router-dom'


export default withRouter(
  class extends Component {
    handleClick = e => {
      const { history, to } = this.props
      const external = to && to.indexOf('http') === 0
      const root = document.getElementById('root')
      e.preventDefault()

      root.style.opacity = 0
      root.style.transform = 'scale3d(0.99, 0.99, 1)'

      setTimeout(() => {
        if (external) {
          window.location = to
          return
        }
        
        history.push(to)
        root.style.opacity = ''
        root.style.transform = ''
      }, 800)
    }

    render() {
      const { children, to, className, onClick } = this.props
      return (
        <a
          className={cs( 'TransitionLink', className )}
          href={ to }
          onClick={ onClick ? onClick : this.handleClick }
          children={ children }
        />
      )
    }
  }
)
