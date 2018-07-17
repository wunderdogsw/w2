import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'
import { withState } from 'App/state'
import Logo from 'App/components/Logo'




export default withState(
  class extends Component {
    state = {
      completelyHidden: false,
    }
    timer = null

    componentDidMount() {
      this.timer = setTimeout(this.hide, 2000)
    }

    componentWillUnmount() {
      clearTimeout(this.timer)
    }

    hide = () => {
      const { hideSplash } = this.props
      hideSplash()
      clearTimeout(this.timer)
      this.timer = setTimeout(this.hideCompletely, 1000)
    }

    hideCompletely = () => {
      this.setState({ completelyHidden: true })
    }

    render() {
      const { splashShowing } = this.props
      const { completelyHidden } = this.state

      if (completelyHidden) return null

      const classes = cs(
        'Splash',
        splashShowing && 'Splash--showing'
      )

      return (
        <div className={ classes } onClick={ this.hide }>
          <Logo animate />
        </div>
      )
    }
  }
)
