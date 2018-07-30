import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import { SeriousStats } from 'App/contents/stats'
import ChapterRow from 'App/components/ChapterRow'
import CaseCards from 'App/components/CaseCards'

import heroThumb from './about-us-hero-thumb.jpg'
import hero from './about-us-hero.jpg'
import photo1Thumb from './about-us1-thumb.jpg'
import photo1 from './about-us1.jpg'
import photo2Thumb from './about-us2-thumb.jpg'
import photo2 from './about-us2.jpg'


export default () => (
  <Fragment>
    <MainTitle>About us</MainTitle>
    <SubTitle>
      We're your partner in turning good ideas into well working digital reality
    </SubTitle>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Wunderdog people" />

    <Chapter>
      <h4>We offer high-end consultancy in creating digital products and service</h4>
      <p>
        We guide our customers through the maze of crafting digital services from
        ideation to execution. <br />
        <br />
        By combining the smart ways of working, human-centered design and
        high-quality code, we build future-proof digital services together with
        our customers.
      </p>
    </Chapter>

    <ChapterRow>
      <Chapter>
        <h5>Business Design</h5>
        <p>Developing, testing and concepting of new businesses</p>
      </Chapter>
      <Chapter>
        <h5>Design (UI/UX)</h5>
        <p>Easy-to-use interfaces to generate great user experiences</p>
      </Chapter>
      <Chapter>
        <h5>Coding</h5>
        <p>Expert execution of digital products & services</p>
      </Chapter>
      <Chapter>
        <h5>Coaching & Team leading</h5>
        <p>Agile methods to support smart ways of working</p>
      </Chapter>
    </ChapterRow>

    <Stats>
      <SeriousStats />
    </Stats>

    <Chapter>
      <h4>We believe things can be done better</h4>
      <p>
        By challenging ourselves and the current thinking, we aim to make the
        world work better and easier applying the latest technologies and smarter
        ways of working.</p>
    </Chapter>


  </Fragment>
)
