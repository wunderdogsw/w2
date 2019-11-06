import './index.css'
import React, { Component } from 'react'
import { pageview } from 'App/utils/analytics'
import Hero from 'App/components/Hero'
import Intro from 'App/components/Intro'
import Nudge from 'App/components/Nudge'
import CaseCards from 'App/components/CaseCards'
import Clients from 'App/components/Clients'
import CallToAction from 'App/components/CallToAction'
import LatestWork from 'App/components/LatestWork'
import LatestBlogPosts from 'App/components/LatestBlogPosts'
import { OpenPositions } from 'App/contents/callToActions'
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
          <Intro />
          <LatestWork />
        </Nudge>
        <LatestBlogPosts>
          <HomeBlogPostsContent />
        </LatestBlogPosts>
        <CallToAction color="blue" large grid>
          <OpenPositions />
        </CallToAction>
      </div>
    )
  }
}
