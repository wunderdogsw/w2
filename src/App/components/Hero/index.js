import './index.css'
import React from 'react'
import cs from 'classnames'
import { withState } from 'App/state'
import { Hero as Content } from 'App/contents/parts'


export default withState(
  ({ splashShowing }) => (
    <section
      className={ cs('Hero', !splashShowing && 'Hero--showContent') }
      children={ <Content /> }
    />
  )
)
