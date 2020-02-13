import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './index.css'
import { NotFound as Content } from '../../contents/other'
import { event } from '../../utils/analytics'

export default withRouter(
  class extends Component {
    componentDidMount() {
      const { match } = this.props
      event({
        category: 'Page not found',
        action: match.url,
      })
    }

    render() {
      return (
        <div className="NotFound">
          <Content />
        </div>
      )
    }
  }
)
