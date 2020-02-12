import React, { Component, createRef } from 'react'
import cs from 'classnames'
import throttle from 'lodash.throttle'

import './index.css'
import { getComputedCss } from  '../../utils'

export default class extends Component {

  ref = createRef()
  state = {
    height: 0,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = throttle(() => {
    const ref = this.ref && this.ref.current
    if ( !ref ) return

    const { width } = ref.getBoundingClientRect()
    const paddingLeft = parseInt(getComputedCss(ref, 'padding-left'), 10)|| 0
    const paddingRight = parseInt(getComputedCss(ref, 'padding-right'), 10) || 0

    const height = (width - paddingLeft - paddingRight) / 16 * 9
    this.setState({ height })

  }, 200)

  render() {
    const { width, height } = this.state
    const { className, videoId, ...rest } = this.props

    if ( !videoId ) return null

    return (
      <div { ...rest }
        ref={ this.ref }
        className={ cs('YoutubeVideo', className) }
      >
        <iframe
          src={`https://www.youtube.com/embed/${ videoId }?color=white`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ height }}
        />
      </div>
    )
  }
}
