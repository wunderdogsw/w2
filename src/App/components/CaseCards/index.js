import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'
import { withState } from 'App/state'
import * as cards from 'App/contents/cards'
import Card from 'App/components/Card'


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
      const { splashShowing } = this.props
      const { nudged, nudgeCancelled } = this.state
      return(
        <section className={cs(
          'CaseCards',
          nudged && !nudgeCancelled && 'CaseCards--nudged',
        )}>
          <div className="CaseCards__inner">
              <Card to="/case/perusterveys">
                { cards['PerusTerveys']() }
              </Card>
              <Card to="/case/pexraytech">
                { cards['Pexraytech']() }
              </Card>
              <Card to="/case/smartly">
                { cards['Smartly']() }
              </Card>
              <Card to="/case/redbull">
                { cards['RedBull']() }
              </Card>
          </div>
        </section>
      )
    }
  }
)
