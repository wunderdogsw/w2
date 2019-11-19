import NotFound from 'App/components/NotFound'
import * as generalPages from 'App/contents/pages'
import { pageview } from 'App/utils/analytics'
import React, { Component, Fragment } from 'react'
import './index.css'

let pages = Object.entries(generalPages).reduce((res, [key, value]) => {
  res[
    key
      .match(/[A-Z][a-z]+/g)
      .join('-')
      .toLowerCase()
  ] = value
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
    pageview()
  }

  render() {
    const { match } = this.props
    const subpath = match.params.subpath && match.params.subpath.toLowerCase()

    const contentKey = match.params.page && match.params.page.toLowerCase()

    const Content = pages[contentKey]

    return (
      <div className='Page'>
        <article className='Page__inner'>
          {Content ? <Content /> : <NotFound />}
        </article>
      </div>
    )
  }
}
