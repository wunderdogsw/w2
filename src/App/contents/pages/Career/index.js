import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Image from 'App/components/Image'
import Chapter from 'App/components/Chapter'
import ImageTextRow from 'App/components/ImageTextRow'
import CallToAction from 'App/components/CallToAction'
import LatestBlogPosts from 'App/components/LatestBlogPosts'
import Stats from 'App/components/Stats'

import { OpenPositions } from 'App/contents/callToActions'
import { FunStats } from 'App/contents/stats'
import { CareerBlogPostsContent } from 'App/contents/other'

import heroThumb from './career-hero-v2-thumb.jpg'
import hero from './career-hero-v2.jpg'
import photo1Thumb from './career-photo1-thumb.jpg'
import photo1 from './career-photo1.png'
import photo2Thumb from './career-photo2-thumb.jpg'
import photo2 from './career-photo2.png'
import photo3Thumb from './career-photo3-thumb.jpg'
import photo3 from './career-photo3.png'
import photo4Thumb from './career-photo4-thumb.jpg'
import photo4 from './career-photo4.jpg'
import photo5Thumb from './career-photo5-thumb.jpg'
import photo5 from './career-photo5.jpg'



export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fff',
        '--color-text-on-accent': '#6cd69d',
      }}
    </CssVars>
    <MainTitle>Join the Pack</MainTitle>
    <SubTitle>
      Our people are at the heart of our culture. We help each other to be the
      better versions of ourselves.<br />
      And we want to have fun whilst working.
    </SubTitle>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Wunderdog crew" />
    <CallToAction>
      <OpenPositions />
    </CallToAction>
    <ImageTextRow>
      <Image thumbSrc={ photo1Thumb } src={ photo1 } alt="Wunderdogs" />
      <h4>The most important thing is that we all enjoy being at work</h4>
      <p>
        We respect every employee regardless of gender, age, religion, sexual
        orientation or ethnic background.
      </p>
    </ImageTextRow>
    <ImageTextRow reversed>
      <Image thumbSrc={ photo2Thumb } src={ photo2 } alt="Wunderdogs" />
      <h4>We actively avoid setting obstacles in our way</h4>
      <p>
        We recruit only intelligent and competent people who can make
        decisions independently. We are given freedom and responsibilty
        accordingly.
      </p>
    </ImageTextRow>
    <Stats useAccent>
      <FunStats />
    </Stats>
    <ImageTextRow>
      <Image thumbSrc={ photo3Thumb } src={ photo3 } alt="Wunderdogs" />
      <h4>We value our colleagues' success as much as our own</h4>
      <p>
        We support each other with our collective know-how, since, even
        though we are competent, none of us is master of everything.
      </p>
    </ImageTextRow>
    <ImageTextRow reversed>
      <Image thumbSrc={ photo4Thumb } src={ photo4 } alt="Wunderdogs" />
      <h4>We share information openly and fairly amongst colleagues</h4>
      <p>
        By default, all company information is public to all our employees.
        We limit access to knowledge only for a good reason.
      </p>
    </ImageTextRow>
    <ImageTextRow>
      <Image thumbSrc={ photo5Thumb } src={ photo5 } alt="Wunderdogs" />
      <h4>We encourage bold and open-minded experimentation</h4>
      <p>
        We all fail sometimes. We believe that making a mistake and learning
        from it is far more important than not trying something for fear of
        failure. An important part of learning is to ask feedback - which
        we are always happy to give.
      </p>
    </ImageTextRow>
    <CallToAction>
      <OpenPositions />
    </CallToAction>
    <LatestBlogPosts culture>
      <CareerBlogPostsContent />
    </LatestBlogPosts>
  </Fragment>
)
