import Keywords from 'App/components/Keywords'
import MainTitle from 'App/components/MainTitle'
import Image from 'App/components/Image'
import NotFound from 'App/components/NotFound'
import SubTitle from 'App/components/SubTitle'
import * as blogPages from 'App/contents/blog'
import * as generalPages from 'App/contents/pages'
import * as workPages from 'App/contents/work'
import { pageview } from 'App/utils/analytics'
import React, { Component, Fragment } from 'react'
import Button from 'App/components/Button'
import Footer from 'App/components/Footer'
import { FooterBottom } from 'App/contents/other'
import { NextProject } from 'App/contents/callToActions'
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

export const allCategory = 'all'
export const categories = [allCategory]
export const posts = []

for (const key in subPages.blog) {
  if (subPages.blog.hasOwnProperty(key)) {
    const post = subPages.blog[key]
    post.id = key
    posts.push(post)

    const { category } = post
    if (!categories.includes(category)) categories.push(category)
  }
}

categories.sort()
posts.sort((a, b) => new Date(a.publishDate) - new Date(b.publishDate)) // From new to old

posts.forEach((post, idx) => {
  const next = posts[idx + 1]
  if (next) post.next = { id: next.id, title: next.title }
})

const generateBlogPost = ({ category, title, image, author, publishDate, readTimeMinutes, keywords, BlogComponent, next }) => (
  <Fragment>
    <div className='Page'>
      <article className='Page__inner'>
        <MainTitle narrow>{title}</MainTitle>
        <SubTitle>
          By { author.name } <span class="grey">{ author.title }</span> • { publishDate } • Read time { readTimeMinutes } min
        </SubTitle>
        {image && (
          <Image src={ image } />
        )}
        <Keywords>{keywords}</Keywords>
        <BlogComponent />
      </article>
    </div>
    {next && (
      <Footer>
        <NextProject to={next.id} action="Go to next post" title={next.title} />
        <FooterBottom />
      </Footer>
    )}
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

    if (subpath === 'blog') {
      return (
        generateBlogPost(Content)
      )
    }

    return (
      <div className='Page'>
        <article className='Page__inner'>
          {Content ? <Content /> : <NotFound />}
        </article>
      </div>
    )
  }
}
