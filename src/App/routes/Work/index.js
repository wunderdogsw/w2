import Keywords from 'App/components/Keywords'
import MainTitle from 'App/components/MainTitle'
import Image from 'App/components/Image'
import Video from 'App/components/Video'
import NotFound from 'App/components/NotFound'
import SubTitle from 'App/components/SubTitle'
import * as workPages from 'App/contents/work'
import { pageview } from 'App/utils/analytics'
import React, { Component, Fragment } from 'react'
import Button from 'App/components/Button'
import Footer from 'App/components/Footer'
import { FooterBottom } from 'App/contents/other'
import FooterNext from 'App/components/FooterNext'

const pages = Object.entries(workPages).reduce((res, [key, value]) => {
  res[
    key
      .match(/[A-Z][a-z]+/g)
      .join('-')
      .toLowerCase()
  ] = value
  return res
}, {})

export const works = []

for (const key in pages) {
  if (pages.hasOwnProperty(key)) {
    let work = pages[key]
    work.id = key
    works.push(work)
  }
}

works.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate)) // From new to old

works.forEach((work, idx) => {
  const next = works[idx + 1] ? works[idx + 1] : works[0]

  work.nextWork = {
    id: next.id,
    title: next.title,
    image: next.image
  }
})

console.log(pages)

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
            <SubTitle useAsMetaTitle>{ Page.client }</SubTitle>

            {Page.image && !Page.video && (
              <Image src={ Page.image } hero />
            )}
            {Page.video && (
              <Video src={ Page.video } useUnmute={ Page.videoMuteToggle } />
            )}
            <Keywords>{ Page.keywords }</Keywords>
            <Page.content />
          </article>
        </div>
        {Page.nextWork && (
          <Footer>
            <FooterNext to={ Page.nextWork.id } action="Go to next project" title={ Page.nextWork.title } image={ Page.nextWork.image } />
            <FooterBottom />
          </Footer>
        )}
      </Fragment>
    )
  }
}
