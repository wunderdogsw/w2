import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'



export default class extends Component {
  state = {
    loaded: false,
  }
  mounted = true

  componentDidMount() {
    const { src } = this.props
    const loader = new Image()
    loader.onload = loader.onerror = () => {
      // setTimeout(() => {
        if (this.mounted) this.setState({ loaded: true })
      // }, 1000)
    }
    loader.src = src
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    const { loaded } = this.state
    const { className, thumbSrc, src, ...rest } = this.props

    return (
      <div className={ cs(
        'Image',
        thumbSrc && 'Image--hasThumb',
        loaded && 'Image--loaded',
        className
      )}>
        { thumbSrc && (
          <img { ...rest } src={ thumbSrc } />
        )}
        { (loaded || !thumbSrc) && (
          <img { ...rest } src={ src } className="Image__main" />
        )}
      </div>
    )
  }
}
