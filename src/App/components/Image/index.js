import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'



export default class extends Component {
  state = {
    loaded: false,
    thumbHidden: false,
  }
  mounted = true

  componentDidMount() {
    const { src } = this.props
    const loader = new Image()
    loader.onload = loader.onerror = () => {
      // setTimeout(() => {
        if (this.mounted) this.setState({ loaded: true }, () => {
          setTimeout(() => {
            if (this.mounted) this.setState({ thumbHidden: true })
          }, 1000)
        })
      // }, 1000)
    }
    loader.src = src
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    const { loaded, thumbHidden } = this.state
    const { className, thumbSrc, src, asBackground, ...rest } = this.props

    return (
      <span className={ cs(
        'Image',
        thumbSrc && 'Image--hasThumb',
        loaded && 'Image--loaded',
        thumbHidden && 'Image--thumbHidden',
        asBackground && 'Image--asBackground',
        className
      )}>
        { thumbSrc && (
          asBackground ? (
            <span
              className="Image__thumb"
              style={{ backgroundImage: `url(${ thumbSrc })` }}
            />
          ) : (
            <img { ...rest }
              src={ thumbSrc }
              className="Image__thumb"
            />
          )
        )}
        { (loaded || !thumbSrc) && (
          asBackground ? (
            <span
              className="Image__main"
              style={{ backgroundImage: `url(${ src })` }}
            />
          ) : (
            <img { ...rest }
              src={ src }
              className="Image__main"
            />
          )
        )}
      </span>
    )
  }
}
