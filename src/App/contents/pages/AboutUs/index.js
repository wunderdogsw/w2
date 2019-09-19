import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Indent from 'App/components/Indent'
import Grid from 'App/components/Grid'
import Block from 'App/components/Block'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import { SeriousStats } from 'App/contents/stats'
import ChapterRow from 'App/components/ChapterRow'
import Clients from 'App/components/Clients'
import CssVars from 'App/components/CssVars'

import heroThumb from './about-us-hero-new-thumb.jpg'
import hero from './about-us-hero-new.jpg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
    <MainTitle>About us</MainTitle>
    <SubTitle narrow>
      We're your partner in turning good ideas into digital reality.
    </SubTitle>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Wunderdog people" indent/>

    <Indent>
      <Chapter>
        <h2>High-end consultancy in creating digital products and services</h2>
      </Chapter>
    </Indent>
    <Indent twice>
      <Chapter>
        <p>
          We guide our customers through the maze of crafting digital products
          and services from ideation to execution.
        </p>
        <p>
          By combining smart ways of working, human-centered design and
          high-quality code, we build future-proof services together with
          our customers.
        </p>
      </Chapter>

      <Stats useAccent>
        <SeriousStats />
      </Stats>
    </Indent>

    <Block useDark>
      <ChapterRow>
        <Chapter>
          <h2>Business Design</h2>
          <p>Developing, testing and concepting of new businesses</p>
        </Chapter>
        <Chapter>
          <h2>Design (UI/UX)</h2>
          <p>Easy-to-use interfaces to generate great user experiences</p>
        </Chapter>
      </ChapterRow>
      <ChapterRow>
        <Chapter>
          <h2>Development</h2>
          <p>Delivering high-quality digital products & services</p>
        </Chapter>
        <Chapter>
          <h2>Coaching & Team leading</h2>
          <p>Agile methods to support smart ways of working</p>
        </Chapter>
      </ChapterRow>
    </Block>

    <Indent>
      <Chapter>
        <h2>
          High-end consultancy in creating digital products and services.
        </h2>
      </Chapter>
    </Indent>

    <Indent twice>
      <Clients />
    </Indent>


  </Fragment>
)
