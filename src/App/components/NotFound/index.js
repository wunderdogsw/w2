import './index.css'
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { NotFound as Content } from 'App/contents/other'
import { event } from 'App/utils/analytics'


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
