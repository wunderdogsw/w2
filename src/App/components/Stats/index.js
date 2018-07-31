import './index.css'
import React, { Component, createRef } from 'react'
import cs from 'classnames'


export default class extends Component {
  state = {
    current: 0,
  }
  timer = null
  ref = createRef()

  componentDidMount() {
    this.timer = setInterval(this.change, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  change = () => {
    const ref = this.ref.current
    let next = this.state.current + 1
    if (next >= ref.children.length) next = 0
    this.setState({ current: next })
  }

  render() {
    const { children, useAccent } = this.props
    const { current } = this.state
    return (
      <section className={cs(
        'Stats',
        useAccent && 'Stats--useAccent',
        `Stats--${ current }`
      )}>
        <ul ref={ this.ref }>{ children }</ul>
      </section>
    )
  }
}
