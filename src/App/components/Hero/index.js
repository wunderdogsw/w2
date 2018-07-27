import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'
import throttle from 'lodash.throttle'
import { withState } from 'App/state'
import { Hero as Content } from 'App/contents/other'


export default withState(
  class extends Component {
    state = {
      height: 0,
    }
    mounted = false

    componentDidMount() {
      this.mounted = true
      this.updateHeight()
      window.addEventListener('resize', this.handleResize)
      window.addEventListener('scroll', this.handleResize)
    }

    componentWillUnmount() {
      this.mounted = false
      window.removeEventListener('resize', this.handleResize)
      window.removeEventListener('scroll', this.handleResize)
    }

    handleResize = throttle(() => {
      // Resize in 100px intervals to prevent weird behaviour on mobile devces
      const { height } = this.state
      const nextHeight = window.innerHeight
      if (Math.abs(height - nextHeight) < 150) return
      this.updateHeight()
    }, 50)

    updateHeight = () => {
      if ( this.mounted ) this.setState({
        height: window.innerHeight,
      })
    }

    render() {
      const { splashShowing } = this.props
      const { height } = this.state
      return (
        <section
          style={ height > 0 ? { height } : null}
          className={ cs('Hero', !splashShowing && 'Hero--showContent') }
          children={ <Content /> }
        />
      )
    }
  }
)
