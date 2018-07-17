import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'
import { withState } from 'App/state'
import * as cards from 'App/contents/cards'
import Card from 'App/components/Card'


export default withState(
  class extends Component {
    render() {
      const { splashShowing } = this.props
      return(
        <div className={
          cs('CaseCards', !splashShowing && 'CaseCards--showContent')
        }>
          <div className="CaseCards__inner">
            <div>
            <Card to="/case/perusterveys">
              { cards['PerusTerveys']() }
            </Card>
            </div>
            <div>
            <Card to="/case/pexraytech">
              { cards['Pexraytech']() }
            </Card>
            </div>
            <div>
            <Card to="/case/smartly">
              { cards['Smartly']() }
            </Card>
            </div>
            <div>
            <Card to="/case/redbull">
              { cards['RedBull']() }
            </Card>
            </div>
          </div>
        </div>
      )
    }
  }
)
