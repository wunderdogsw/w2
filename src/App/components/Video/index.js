import './index.css'
import React, { Component } from 'react'
import volume from './volume-x.svg'

export default class extends Component {
  state = {
    muted: true
  }

  handleVideoClick = e => {
    if (!this.props.useUnmute) return
    this.setState({ muted: !this.state.muted })
  }

  render() {
    const { muted } = this.state
    const { src, useUnmute } = this.props

    return (
      <span className="Video" onClick={ this.handleVideoClick }>
        <div className="Video__inner">
          <video autoPlay muted={ muted } loop playsInline preload="metadata">
            <source src={ src } type="video/mp4" />
          </video>
          {muted &&
            <div className="Icon">
              <img
                src={ volume }
                className="Image__main"
              />
            </div>
          }
        </div>
      </span>
    )
  }
}
