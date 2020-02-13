import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'
import { withState } from '../../state'
import { Hero as Content } from '../../contents/other'

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
