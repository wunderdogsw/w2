import './index.css'
import React, { Component } from 'react'
import { pageview } from 'App/utils/analytics'
import NotFound from 'App/components/NotFound'
import * as generalPages from 'App/contents/pages'
import * as workPages from 'App/contents/work'
import * as blogPages from 'App/contents/blog'

let pages = Object
  .entries(generalPages)
  .reduce((res, [key, value]) => {
    res[key.match(/[A-Z][a-z]+/g).join('-').toLowerCase()] = value
    return res
  }, {})

let subPages = {}

subPages.work = Object
  .entries(workPages)
  .reduce((res, [key, value]) => {
    res[key.match(/[A-Z][a-z]+/g).join('-').toLowerCase()] = value
    return res
  }, {})

subPages.blog = Object
  .entries(blogPages)
  .reduce((res, [key, value]) => {
    res[key.match(/[A-Z][a-z]+/g).join('-').toLowerCase()] = value
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

  render () {
    const { match } = this.props
    const subpath =
      match.params.subpath
      && match.params.subpath.toLowerCase()

    const contentKey =
      match.params.page
      && match.params.page.toLowerCase()

    const Content = subPages[subpath] && subPages[subpath][contentKey] ? subPages[subpath][contentKey] : pages[contentKey]

    return (
      <div className="Page">
        <article className="Page__inner">
          { Content ? <Content /> : <NotFound /> }
        </article>
      </div>
    )
  }
}
