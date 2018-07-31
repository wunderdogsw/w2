import './index.css'
import React, { Component, Fragment, createRef } from 'react'
import { pageview, event } from 'App/utils/analytics'
import cs from 'classnames'
import { withRouter } from 'react-router-dom'
import { withState } from 'App/state'
import prefixStyles from 'inline-style-prefixer/static'
import { getComputedCss } from 'App/utils'


export default withState(withRouter(
  class extends Component {
    state = {
      color: 'inherit',
    }
    ref = createRef()

    componentDidMount() {
      const ref = this.ref.current
      this.setState({
        color: getComputedCss(ref, 'color') || 'inherit',
      })
    }

    componentDidUpdate() {
      const ref = this.ref.current
      const nextColor = getComputedCss(ref, 'color') || 'inherit'

      // Prevent inifnite looops booii
      if (this.state.color === nextColor) return

      this.setState({
        color: nextColor,
      })
    }

    handleClick = async e => {
      const { history, to, userNavigated } = this.props
      const external = to && to.indexOf('http') === 0

      e.preventDefault()
      if ( history.location.pathname === to ) return

      await this.transition(external)
      userNavigated()

      if (external) {
        pageview(to)
        event({
          category: 'External link',
          action: `${ to }`,
        })
        window.open(to, '_blank')
      } else {
        history.push(to)
      }
    }

    handleContactLinkClick = () => {
      const { to } = this.props
      event({
        category: 'Contact link',
        action: `${ to }`,
      })
    }

    transition = external => new Promise(resolve => {
      const root = document.getElementById('root')
      const style = prefixStyles({
        opacity: 0,
        transform: 'translate3d(0, -5px, 0)',
        transitionDuration: '100ms',
      })
      Object.entries(style).forEach(([prop, value]) =>
        root.style[prop] = value
      )

      setTimeout(() => {
        Object.entries(prefixStyles({
          transform: 'translate3d(0, 5px, 0)',
        })).forEach(([prop, value]) =>
          root.style[prop] = value
        )
      }, 100)

      setTimeout(() => {
        resolve()
        setTimeout(() => {
          Object.keys(style).forEach(prop => root.style[prop] = '')
        }, external ? 1000 : 50)
      }, 150)
    })

    isExternalLink = () => {
      const { to } = this.props
      return to.toLowerCase().indexOf('http') === 0
    }

    isContactLink = () => {
      let { to } = this.props
      to = to.toLowerCase()
      return to.indexOf('mailto') === 0 || to.indexOf('tel') === 0
    }

    whichClick = () => {
      if (this.props.onClick) return this.props.onClick
      if (this.isContactLink()) return this.handleContactLinkClick
      return this.handleClick
    }

    render() {
      const { children, to, className, history } = this.props
      const { color } = this.state
      const drawArrow =
        (this.isExternalLink() || this.isContactLink())
        && typeof children === 'string'

      return (
        <a
          ref={ this.ref }
          className={cs(
            'TransitionLink',
            history.location.pathname === to && 'active',
            className
          )}
          href={ to }
          onClick={ this.whichClick() }
          children={
            <Fragment>
              { children }
              { drawArrow && (
                <ExternalArrow color={ color } />
              )}
            </Fragment>
          }
        />
      )
    }
  }
))


const ExternalArrow = ({ color }) => (
  <svg
    className="TransitionLink__externalArrow"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23 23"
    style={{ enableBackground: 'new 0 0 23 23' }}
    xmlSpace="preserve"
  >
    <line
      x1="3.7" y1="19.3" x2="18.6" y2="4.4"
      style={{ stroke: color }}
    />
    <polyline
      points="18.7,12.9 18.7,4.3 10.1,4.3"
      style={{ stroke: color }}
    />
  </svg>
)
