import React, { Component } from 'react'

import './index.css'
import { pageview } from '../../utils/analytics'
import Hero from '../../components/Hero'
import Intro from '../../components/Intro'
import Nudge from '../../components/Nudge'
import CallToAction from '../../components/CallToAction'
import LatestWork from '../../components/LatestWork'
import LatestBlogPosts from '../../components/LatestBlogPosts'
import { OpenPositions } from '../../contents/callToActions'
import {
  HomeBlogPostsContent,
  HomeCaseContent,
  HomeSecondaryImage
} from '../../contents/other'

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
        </Nudge>
        <LatestWork>
          <HomeCaseContent />
        </LatestWork>
        <HomeSecondaryImage />
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
