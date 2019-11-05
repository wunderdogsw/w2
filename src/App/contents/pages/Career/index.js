import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Image from 'App/components/Image'
import Indent from 'App/components/Indent'
import Chapter from 'App/components/Chapter'
import ImageTextRow from 'App/components/ImageTextRow'
import CallToAction from 'App/components/CallToAction'
import LatestBlogPosts from 'App/components/LatestBlogPosts'
import Stats from 'App/components/Stats'
import BlockQuote from 'App/components/BlockQuote'

import { OpenPositions } from 'App/contents/callToActions'
import { FunStats } from 'App/contents/stats'
import { CareerBlogPostsContent } from 'App/contents/other'

import heroThumb from './career-hero-new-thumb.jpg'
import hero from './career-hero-new.jpg'
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
        '--color-accent': '#000000',
        '--color-text-on-accent': '#fff',
      }}
    </CssVars>
    <MainTitle narrow>We believe happy people create the best workplace</MainTitle>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Wunderdog people" indent hero/>
    <Indent>
      <Chapter>
        <h2>Born years later than the leaders in the field, we inevitably
        started off as an underdog. </h2>
      </Chapter>
    </Indent>
    <Indent twice>
      <Chapter>
        <p>
          Our dedication and goals made it clear that being an underdog was only
          temporary. We added a W to the name to give the wow-effect that would
          foreshadow the upcoming. Together the people of this company would do
          wonders - or wunders as we put it.
        </p>
      </Chapter>
    </Indent>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Wunderdog people" indent="left" hero/>
    <Indent>
      <Chapter>
        <h2>Culture Manifesto</h2>
      </Chapter>
    </Indent>
    <Indent twice>
      <Chapter>
        <p>
          We actively avoid setting obstacles in our way.
          We recruit only intelligent and competent people who can make decisions
          independently. We are given freedom and responsibility accordingly.
        </p>
        <p>
          The most important thing is that we all enjoy being at work. We
          respect every employee regardless of gender, age, religion, sexual
          orientation or ethnic background.
        </p>
        <p>
          We value our colleagues’ success as much as our own
          We support each other with our collective know-how, since, even though
          we are competent, none of us is master of everything.
        </p>
        <p>
          We share information openly and fairly amongst colleagues
          By default, all company information is public to all our employees.
          We limit access to knowledge only for a good reason.
        </p>
        <p>
          We all fail sometimes. We believe that making a mistake and learning
          from it is far more important than not trying something for fear of
          failure. An important part of learning is to ask feedback - which we
          are always happy to give.
        </p>
      </Chapter>
    </Indent>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Wunderdog people" indent hero/>
    <Indent>
      <Chapter large>
        <p>
          We offer a communal workplace and endless platform for personal growth
          and shared learning.
        </p>
      </Chapter>
    </Indent>
    <Indent twice>
      <Chapter>
        <p>
          We believe things can be done better,  so we challenge both ourselves
          and current thinking to  make the world work better and smarter. One
          project at a time, we’re improving how companies, communities, and
          societies work.
        </p>
      </Chapter>
    </Indent>
    <CallToAction grid>
      <OpenPositions />
    </CallToAction>
  </Fragment>
)
