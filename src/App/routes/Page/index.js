import './index.css'
import React, { Component } from 'react'
import NotFound from 'App/components/NotFound'
import * as pages from 'App/contents/pages'

const pagesLower = Object
  .entries(pages)
  .reduce((res, [key, value]) => {
    res[key.toLowerCase()] = value
    return res
  }, {})

export default class extends Component {
  componentDidMount() {
    this.initPage()
  }

  componentDidUpdate(lastProps) {
    const { match: lastMatch } = lastProps
    const { match } = this.props
    if (match.params.page !== lastMatch.params.page) {
      this.initPage()
    }
  }

  initPage() {
    window.scrollTo(0, 0)
  }

  render () {
    const { match } = this.props
    const contentKey =
      match.params.page
      && match.params.page.toLowerCase()
    const Content = pagesLower[contentKey]

    return (
      <div className="Page">
        <article className="Page__inner">
          { Content ? <Content /> : <NotFound /> }
        </article>
      </div>
    )
  }
}
