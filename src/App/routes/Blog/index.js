import Keywords from 'App/components/Keywords'
import MainTitle from 'App/components/MainTitle'
import Image from 'App/components/Image'
import NotFound from 'App/components/NotFound'
import SubTitle from 'App/components/SubTitle'
import * as blogPages from 'App/contents/blog'
import { pageview } from 'App/utils/analytics'
import React, { Component, Fragment } from 'react'
import Button from 'App/components/Button'
import Footer from 'App/components/Footer'
import FooterNext from 'App/components/FooterNext'
import { FooterBottom } from 'App/contents/other'

let pages = Object.entries(blogPages).reduce((res, [key, value]) => {
  res[
    key
      .match(/[A-Z][a-z]+/g)
      .join('-')
      .toLowerCase()
  ] = value
  return res
}, {})

export const allCategory = 'all'
export const categories = [allCategory]
export const posts = []

for (const key in pages) {
  if (pages.hasOwnProperty(key)) {
    const post = pages[key]
    post.key = key
    post.id = key
    posts.push(post)

    const { category } = post
    if (!categories.includes(category)) categories.push(category)
  }
}

posts.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate)) // From new to old


posts.forEach((post, idx) => {
  const next = posts[idx + 1] ? posts[idx + 1] : posts[0]

  post.nextBlog = {
    id: next.id,
    title: next.title,
    image: next.image
  }
})

categories.sort()

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
    const contentKey = match.params.page && match.params.page.toLowerCase()

    const Page = pages[contentKey]

    return (
      <Fragment>
        <div className='Page'>
          <article className='Page__inner'>
            <MainTitle narrow>{ Page.title }</MainTitle>
            <SubTitle>
              By { Page.author.name }, <span className="grey">{ Page.author.title }</span> • { Page.publishDate } • Read time { Page.readTimeMinutes } min
            </SubTitle>
            {Page.image && (
              <Image src={ Page.image } hero />
            )}
            <Keywords>{ Page.keywords }</Keywords>
            <Page.content />
          </article>
        </div>
        {Page.nextBlog && (
          <Footer>
            <FooterNext to={ Page.nextBlog.id } action="Go to next post" title={ Page.nextBlog.title } image={ Page.nextBlog.image } />
            <FooterBottom />
          </Footer>
        )}
      </Fragment>
    )
  }
}
