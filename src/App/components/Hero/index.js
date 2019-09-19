import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'
import throttle from 'lodash.throttle'
import { withState } from 'App/state'
import { Hero as Content } from 'App/contents/other'


export default withState(
  class extends Component {
    render() {
      const { splashShowing } = this.props
      return (
        <section
          className={ cs('Hero', !splashShowing && 'Hero--showContent') }
          children={ <Content /> }
        />
      )
    }
  }
)
