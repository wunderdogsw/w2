import './index.css'
import React, { Component } from 'react'
import * as pages from 'App/contents/pages'

const pagesLower = Object
  .entries(pages)
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
      match.params.page
      && match.params.page.toLowerCase()
    const Content = pagesLower[contentKey]

    if (!Content) return 'wat no content'

    return (
      <div className="Page">
        <article className="Page__inner">
          <Content />
        </article>
      </div>
    )
  }
}
