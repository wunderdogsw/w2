import Keywords from 'App/components/Keywords'
import MainTitle from 'App/components/MainTitle'
import NotFound from 'App/components/NotFound'
import SubTitle from 'App/components/SubTitle'
import * as blogPages from 'App/contents/blog'
import * as generalPages from 'App/contents/pages'
import * as workPages from 'App/contents/work'
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

export const subPages = {
  work: Object.entries(workPages).reduce((res, [key, value]) => {
    res[
      key
        .match(/[A-Z][a-z]+/g)
        .join('-')
        .toLowerCase()
    ] = value
    return res
  }, {}),

  blog: Object.entries(blogPages).reduce((res, [key, value]) => {
    res[
      key
        .match(/[A-Z][a-z]+/g)
        .join('-')
        .toLowerCase()
    ] = value
    return res
  }, {}),
}

const generateBlogPost = ({ title, author, publishDate, readTimeMinutes, keywords, BlogComponent }) => (
  <Fragment>
    <MainTitle narrow>{title}</MainTitle>
    <SubTitle useAsMetaTitle style={{ whiteSpace: 'no-wrap' }}>
      {`By ${author} • ${publishDate} • Read time ${readTimeMinutes} min`}
    </SubTitle>
    <Keywords>{keywords}</Keywords>
    <BlogComponent />
  </Fragment>
)

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

    const Content =
      subPages[subpath] && subPages[subpath][contentKey] ? subPages[subpath][contentKey] : pages[contentKey]

    const isBlog = subpath === 'blog'

    return (
      <div className='Page'>
        <article className='Page__inner'>
          {Content ? isBlog ? generateBlogPost(Content) : <Content /> : <NotFound />}
        </article>
      </div>
    )
  }
}
