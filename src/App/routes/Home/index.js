import './index.css'
import React, { Component } from 'react'
import { pageview } from 'App/utils/analytics'
import Hero from 'App/components/Hero'
import Nudge from 'App/components/Nudge'
import CaseCards from 'App/components/CaseCards'
import Clients from 'App/components/Clients'
import CallToAction from 'App/components/CallToAction'
import LatestBlogPosts from 'App/components/LatestBlogPosts'
import { JoinThePack } from 'App/contents/callToActions'
import { HomeCaseCards, HomeBlogPostsContent } from 'App/contents/other'

export default class extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    pageview()
  }

  render() {
    return (
      <div className="Home">
        <Hero />
        <Nudge>
          <CaseCards>
            <HomeCaseCards />
          </CaseCards>
        </Nudge>
        <Clients />
        <CallToAction>
          <JoinThePack />
        </CallToAction>
        <LatestBlogPosts>
          <HomeBlogPostsContent />
        </LatestBlogPosts>
      </div>
    )
  }
}
