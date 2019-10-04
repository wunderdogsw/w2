import cs from 'classnames'
import React, { Component } from 'react'
import './index.css'



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
      if (this.mounted) this.setState({ loaded: true }, () => {
        setTimeout(() => {
          if (this.mounted) this.setState({ thumbHidden: true })
        }, 1000)
      })
    }
    loader.src = src
  }

  componentWillUnmount() {
    this.mounted = false
  }

  render() {
    const { loaded, thumbHidden } = this.state
    const { className, src, asBackground, style, hero, indent, ...rest } = this.props

    const thumbSrc = src.substring(0, src.lastIndexOf('.')) + '.thumb' + src.substring(src.lastIndexOf('.'), src.length)

    return (
      <span className={ cs(
        'Image',
        thumbSrc && 'Image--hasThumb',
        loaded && 'Image--loaded',
        thumbHidden && 'Image--thumbHidden',
        asBackground && 'Image--asBackground',
        hero && 'Image--isHero',
        indent && 'Image--indent'
      )}>
        { thumbSrc && (
          asBackground ? (
            <span
              className="Image__thumb"
              style={{ backgroundImage: `url(${ thumbSrc })`, ...style }}
            />
          ) : (
            <img { ...rest }
              style={ style }
              src={ thumbSrc }
              className="Image__thumb"
            />
          )
        )}
        { (loaded || !thumbSrc) && (
          asBackground ? (
            <span
              className="Image__main"
              style={{ backgroundImage: `url(${ src })`, ...style }}
            />
          ) : (
            <img { ...rest }
              style={ style }
              src={ src }
              className="Image__main"
            />
          )
        )}
      </span>
    )
  }
}
