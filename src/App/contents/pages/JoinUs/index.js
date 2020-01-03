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
import Video from 'App/components/Video'
import TransitionLink from 'App/components/TransitionLink'

import { OpenPositions } from 'App/contents/callToActions'
import { FunStats } from 'App/contents/stats'
import { CareerBlogPostsContent } from 'App/contents/other'

import hero from './joinus1.jpg'
import photo1 from './joinus2.jpg'
import photo2 from './joinus3.jpg'
import photo3 from './joinus4.jpg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#000000',
        '--color-text-on-accent': '#fff',
      }}
    </CssVars>
    <MainTitle narrow>Join the Wunderdog pack. We'll tell you why.</MainTitle>
    <Video src="https://player.vimeo.com/external/382380565.sd.mp4?s=14c4fd9dee46e5507c8c203da0bab6623f1deeb1&profile_id=165" indent useUnmute />

    <Chapter>
      <h2>Heartfelt home for tech-savvy people.</h2>
    </Chapter>
    <Chapter>
      <p>
        We’re a design and technology consultancy, solving the problems our
        customers face and together crafting digital solutions to them. Today,
        we are 100+ consultants passionate for tech, creating a smoother working
        world. We're now looking for tech-savvy people to join us in our Helsinki
        and Berlin offices.
      </p>
      <p>
        Keep reading to find out more about who we are and how we work. Don’t
        hesitate to contact us if questions arise! Or just apply.
      </p>
    </Chapter>
    <Image src={ photo1 } alt="Wunderdog people" indent="left" hero/>
    <Chapter>
      <h2>We support your personal growth</h2>
    </Chapter>
    <Chapter>
      <p>
        <b>Multiple customized learning sessions</b> <br/>
        Every Friday our consultants join each other at our home office. We have
        our weekly breakfast, organize presentations about cool tech stuff, and
        work on projects together.
      </p>
      <p>
        <b>We support your participation for events, conferences and open source projects</b> <br/>
        We want to support your learning every step of the way whether it's about
        specialised literature or new tools, participating into a conference,
        a trip to our Berlin office or your open source projects on your spare time.
      </p>
      <p>
        <b>More than 100 experts with varying interests</b> <br/>
        Learn from our experts including functional programmers, Java lovers,
        JS hackers, Gophers, Pythonistas, etc.
      </p>
      <p>
        <b>Wunderdog family packed up with Polar Squad, OrangIT and Co-Ventures</b> <br/>
        Because of our ecosystem we can help our clients not only with new feature
        development but also with DevOps, maintenance, and opportunity discovery.
        This structure allows learning across the ecosystem, when knowledge is
        shared between people who all focus on what they’re best at.
      </p>
      <BlockQuote by="Antti aka Piispa, Senior Developer of Wunderdog since 2016">
        Fresh git, shiny stack, getting things done & mega cool pöhinä. Those
        are the things I like.
      </BlockQuote>
    </Chapter>
    <Image src={ hero } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>We facilitate your work</h2>
    </Chapter>
    <Chapter>
    <p>
      <b>We won’t tell you how things should be done</b> <br/>
        Autonomy is part of our culture. While we all love trust and freedom, you
        should know that at Wunderdog this means that we expect our people to
        make decisions instead of waiting for instructions.
    </p>
    <p>
      <b>You get to take ownership in meaningful projects, for companies from
        startups to enterprises from a two week project to long-term partnerships</b> <br/>
        Our customers vary from not-yet established start-ups to big global
        enterprises which allows you to see and to learn from many different
        kinds of companies, cultures and ways of working.
    </p>
    <p>
      <b>It’s okay to fail, making a mistake and learning from it is important for us</b> <br/>
        We have only five items on our culture manifest. 'Courage to improve' is
        one of them.
    </p>
    <p>
      <b>We develop Wunderdog together, as a team</b> <br/>
        All company information is open by default to our employees and all
        employees are expected to take part in decision making. For example, the
        initiative to start our Berlin office was made by our employee, not by
        our CEO. Read the <TransitionLink to='https://wunder.dog/blog/salary-audit'>blog post about how we reported ourselves to equality
        consultants.</TransitionLink>
    </p>
    <BlockQuote by="Taru aka Turger, Software Developer of Wunderdog since 2015">
    For me, it’s important that I get to do meaningful projects and grow
    professionally working with colleagues who I have fun with. At Wunderdog
    I’ve done varying projects each time for a different customer, with a
    different team and a different tech stack.
    </BlockQuote>
    </Chapter>
    <Image src={ photo3 } alt="Wunderdog people" indent="left" hero/>
    <Chapter>
      <h2>Because people matter</h2>
    </Chapter>
    <Chapter>
    <p>
      <b>We take your workload preferences into account</b> <br/>
      We all have different preferences in terms of project commitments and
      workloads. From quarterly projects to long-term partnerships, we try to
      balance your needs and Wunderdog’s company goals.
    </p>
    <p>
      <b>We help you to find the best tools to work with</b> <br/>
      You can choose the equipment and tools to use in your work. If you need
      advice, we help you find the most suitable ones for you.
    </p>
    <p>
      <b>We support you in all stages of life</b> <br/>
      Whether it’s about combining work and family life, starting your studies
      or when life throws you a curveball, we want to be there to support you.
    </p>
    <p>
      <b>We value our time together</b> <br/>
      We enjoy spending time together and getting to know each other. That’s why
      we take care of our company culture through team-building activities,
      coffee breaks, joint meals and hangouts.
    </p>
    <BlockQuote by="Lasse aka Kanki, Service Designer of Wunderdog since 2016">
      I believe being in the consultant’s role, even for a short period improves
      one’s professionalism.
    </BlockQuote>
    </Chapter>
    <CallToAction color="blue" large grid>
      <OpenPositions />
    </CallToAction>
  </Fragment>
)
