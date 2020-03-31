import React, { Component, Fragment } from 'react'

import Keywords from '../../components/Keywords'
import MainTitle from '../../components/MainTitle'
import Image from '../../components/Image'
import Video from '../../components/Video'
import SubTitle from '../../components/SubTitle'
import * as workPages from '../../contents/work'
import { pageview } from '../../utils/analytics'
import Footer from '../../components/Footer'
import { FooterBottom } from '../../contents/other'
import FooterNext from '../../components/FooterNext'

const pages = Object.entries(workPages).reduce((res, [key, value]) => {
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
export const works = []

for (const key in pages) {
  if (pages.hasOwnProperty(key)) {
    let work = pages[key]
    work.id = key
    works.push(work)

    const { category } = work
    if (!categories.includes(category)) categories.push(category)
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
            <SubTitle useAsMetaTitle>{ Page.client }</SubTitle>

            {Page.image && !Page.video && (
              <Image src={ Page.image } indent hero />
            )}
            {Page.video && (
              <Video src={ Page.video } indent useUnmute={ Page.videoMuteToggle } />
            )}
            <Keywords>{ Page.keywords }</Keywords>
            <Page.content />
          </article>
        </div>
        {Page.nextWork && (
          <Footer>
            <FooterNext to={ Page.nextWork.id } action="Go to next case" title={ Page.nextWork.title } image={ Page.nextWork.image } />
            <FooterBottom />
          </Footer>
        )}
      </Fragment>
    )
  }
}
