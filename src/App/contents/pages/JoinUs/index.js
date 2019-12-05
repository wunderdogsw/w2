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

import hero from './career-1.jpg'
import photo1 from './career-5.jpg'
import photo2 from './career-4.jpg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#000000',
        '--color-text-on-accent': '#fff',
      }}
    </CssVars>
    <MainTitle narrow>12 reasons why you should join the Wunderdog pack</MainTitle>
    <Image src={ hero } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>We support your personal growth</h2>
    </Chapter>
    <Chapter>
      <p>
        <b>Tech sessions every Friday</b> <br/>
        At Wunderdog every Friday is special day and we work at our own office.
        We work together, have breakfast, and we have tech sessions where we
        learn from each other.
      </p>
      <p>
        <b>We support your participation for events and conferences</b> <br/>
        We want to support your learning every step of the way whether it's about
        conferences participation, books, new tools or trip to our other offices.
      </p>
      <p>
        <b>100 experts from different fields - developers, designers,
        marketers, layers, People Operations - for you to learn from</b> <br/>
        We support each other with our collective know-how, since, even though
        we are competent, none of us is master of everything.
      </p>
      <p>
        <b>We also have our besties Polars Squad, OrangIT and Co-Ventures.</b> <br/>
        Together we create a strong ecosystem that offers end-to-end services
        for all digital problems and great opportunities for our people.
      </p>
      <BlockQuote by="Antti aka Piispa, Senior Developer of Wunderdog since 2016">
        Fresh git, shiny stack, getting things done & mega cool pöhinä. Those
        are the things I like.
      </BlockQuote>
    </Chapter>
    <Image src={ photo1 } alt="Wunderdog people" indent="left" hero/>
    <Chapter>
      <h2>It’s your time to shine</h2>
    </Chapter>
    <Chapter>
    <p>
      <b>We won’t tell you how things should be done</b> <br/>
        We trust your professional skills and you free to make the decision
        regarding your work.
    </p>
    <p>
      <b>You get to take ownership in meaningful projects, for companies from
      startups to corporations from a two week project to long-term partnerships</b> <br/>
      We respect every employee regardless of gender, age, religion, sexual
      orientation or ethnic background.
    </p>
    <p>
      <b>We all fail sometimes. We believe that making a mistake and learning
      from it is far more important than not trying something for fear of failure</b> <br/>
      We support each other with our collective know-how, since, even though
      we are competent, none of us is master of everything.
    </p>
    <p>
      <b>We develop Wunderdog together, as a team</b> <br/>
      By default, all company information is public to all our employees.
      We limit access to knowledge only for a good reason.
    </p>
    <BlockQuote by="Maija, Senior Developer of Wunderdog since 2016">
      I believe being in the consultant’s role, even for a short period improves
      one’s professionalism.
    </BlockQuote>
    </Chapter>
    <Image src={ photo2 } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>Happy people create the best workplace</h2>
    </Chapter>
    <Chapter>
    <p>
      <b>You can sort your own working schedule suitable for you</b> <br/>
      We recruit intelligent and competent people who can make decisions
      independently. We are given freedom and responsibility accordingly.
    </p>
    <p>
      <b>We help you to find the best tools to work with</b> <br/>
      We respect every employee regardless of gender, age, religion, sexual
      orientation or ethnic background.
    </p>
    <p>
      <b>We support you in all stages of life whether it’s about combining work
      and family life or starting your studies.</b> <br/>
      We support each other with our collective know-how, since, even though
      we are competent, none of us is master of everything.
    </p>
    <p>
      <b>From Mon to Thur at customers’ but on Fridays, we all gather to wuffice
      to be together</b> <br/>
      By default, all company information is public to all our employees.
      We limit access to knowledge only for a good reason.
    </p>
    <BlockQuote by="Jarl-Erik aka Hoosee, Senior Developer of Wunderdog since 2018">
      At Wunderdog we don’t judge or boost our egos at the expense of others.
      People are genuine and nice. I’d be happy to have lunch with anybody here.
    </BlockQuote>
    </Chapter>
    <CallToAction color="blue" large grid>
      <OpenPositions />
    </CallToAction>
  </Fragment>
)
