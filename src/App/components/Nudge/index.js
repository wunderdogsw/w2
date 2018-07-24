import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'
import { withState } from 'App/state'


export default withState(
  class extends Component {
    state = {
      nudgeCancelled: false,
      nudged: false,
    }
    nudgeTimer = null

    componentDidUpdate() {
      this.nudgeMaybe()
    }

    componentDidMount() {
      window.addEventListener('scroll', this.cancelNudge)
      this.nudgeMaybe()
      if (window.innerHeight > 1440) this.cancelNudge()
    }

    componentWillUnmount() {
      this.cancelNudge()
    }

    nudgeMaybe() {
      if (
        !this.state.nudged &&
        !this.nudgeTimer &&
        !this.props.splashShowing
      ) {
        this.nudgeTimer = setTimeout(() => {
          this.setState({ nudged: true })
          this.clearNudgeTimerAndListener()
        }, 2000)
      }
    }

    cancelNudge = () => {
      this.setState({ nudgeCancelled: true })
      this.clearNudgeTimerAndListener()
    }

    clearNudgeTimerAndListener() {
      window.removeEventListener('scroll', this.cancelNudge)
      clearTimeout(this.nudgeTimer)
      this.nudgeTimer = null
    }

    render() {
      const { splashShowing, userHasNavigated, children } = this.props
      const { nudged, nudgeCancelled } = this.state

      return(
        <div className={cs(
          'Nudge',
          nudged && !nudgeCancelled && 'Nudge--nudged',
          userHasNavigated && 'Nudge--nudgeInstant'
        )}>
          { children }
        </div>
      )
    }
  }
)
