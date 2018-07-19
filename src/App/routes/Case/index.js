import './index.css'
import React, { Component } from 'react'
import * as cases from 'App/contents/cases'

const casesLower = Object
  .entries(cases)
  .reduce((res, [key, value]) => {
    res[key.toLowerCase()] = value
    return res
  }, {})


export default class extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render () {
    const { match } = this.props
    const contentKey =
      match.params.content
      && match.params.content.toLowerCase()
    const Content = casesLower[contentKey]

    if (!Content) return 'wat no content'

    return (
      <div className="Case">
        <article className="Case__inner">
          <Content />
        </article>
      </div>
    )
  }
}
