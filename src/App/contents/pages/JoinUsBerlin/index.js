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
import TransitionLink from 'App/components/TransitionLink'

import { OpenPositions } from 'App/contents/callToActions'
import { FunStats } from 'App/contents/stats'
import { CareerBlogPostsContent } from 'App/contents/other'

import hero from './joinus-berlin1.jpg'
import photo1 from './joinus-berlin2.jpg'
import photo2 from './joinus-berlin3.jpg'
import photo3 from './joinus-berlin4.jpg'
import photo4 from './joinus-berlin5.jpg'
import photo5 from './joinus-berlin6.jpg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#000000',
        '--color-text-on-accent': '#fff',
      }}
    </CssVars>
    <MainTitle narrow>Willkommen in unserem Berliner Büro</MainTitle>
    <Image src={ hero } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>We’re hiring!</h2>
      <p>
        We’re Wunderdog, a software development company. We find solutions and
        craft digital experiences together with our customers. Here are some
        facts about who we are and the way we work. Don’t hesitate to contact us
        if you want to learn more. Or just apply.
      </p>
    </Chapter>
    <Image src={ photo1 } alt="Wunderdog people" indent="left" hero/>
    <Chapter>
      <h2>A platform for your personal growth</h2>
      <p>
        <b>Multiple customized learning sessions every month.</b> <br/>
        Our learning sessions are tailored to improve your skills, such as new
        programming languages, tools and technologies. We also provide non-tech
        sessions, providing insight on topics like communication, culture or
        diversity. Would you also like to share your expertise? You can host a
        session yourself: they are shaped for and by people like you.
      </p>
      <p>
        <b>We compensate your open source hours. </b> <br/>
        You’ll be compensated for working on <TransitionLink to='https://osactivitiesclient.lab.wunder.dog/'>open source projects in your spare
        time.</TransitionLink> We want everyone to participate in open source and we don’t limit
        this program to pull requests to major popular packages or frameworks.
        Rather, we encourage all types of contributions, including your own
        projects and ideas.
      </p>
      <p>
        <b> We support your participation in events and conferences all year round.</b> <br/>
        We allocate an individual budget for you to keep learning, be it attending
        conferences and events, specialized literature, learning tools or
        technologies or travelling.
      </p>
      <p>
        <b>Find support from your peers: developers, designers, marketers, lawyers and people operations.</b> <br/>
        We support each other with our knowledge and experience. Even though we
        are competent, none of us is a master of everything.
      </p>
      <p>
        <b>Be part of a strong ecosystem that offers end-to-end services for all digital problems: DevOps, software maintenance or venture design.</b> <br/>
        Wunderdog is part of a strong ecosystem that offers end-to-end services for
        all digital problems. Those are also great opportunities for our people to
        get in touch with our sister companies Polar Squad, OrangIT and Coventures.
      </p>
  </Chapter>
  <Image src={ photo2 } alt="Wunderdog people" indent hero/>
  <Chapter>
        <h2>We facilitate your work</h2>
      <p>
        <b>However, we’re self-determining.</b> <br/>
        Help is always available, but not imposed. The decisions regarding your work
        are mainly yours to make.
      </p>
      <p>
        <b>We provide a stable workload and projects for you to work on.</b> <br/>
        Get involved in our community of people, sectors, services and companies.
        Together we make sure you can focus on the work without external hassles.
      </p>
      <p>
        <b>Improve your consultation skills with a team of high-skilled senior
        developers that will have your back if needed.</b> <br/>
        Our customers vary from start-ups to global enterprises, which allows you
        to see and learn from many different kinds of environments, cultures and
        ways of working while relying on your peers when needed.
      </p>
      <p>
        <b>We try to find projects matching the technologies or industries you’re
        interested in.</b> <br/>
        We’re always open to your suggestions, especially when we have specific
        projects you want to be involved in. We’ll do our best to accommodate your
        professional wishes and needs.
      </p>
      <p>
        <b>Our timelines are flexible.</b> <br/>
        If you feel it’s time to move on from a project, we create a timeline to
        find a replacement for you and a colleague to take over your project.
      </p>
    </Chapter>
    <Image src={ photo3 } alt="Wunderdog people" indent="left" hero/>
    <Chapter>
      <h2>Challenging projects tailored for you</h2>
      <p>
      <b>We take your workload preferences into account.</b> <br/>
        We all have different preferences in terms of project commitments and
        workloads. From quarterly projects to long-term partnerships, we try to
        balance your needs and Wunderdog’s company goals.
      </p>
      <p>
        <b>You won’t get stuck into one stack.</b> <br/>
        Be part of challenging projects using different technologies and
        strengthen your technical experience at the same time.
      </p>
      <p>
        <b>Take ownership working for different-sized companies and environments.</b> <br/>
        Gather experience working with various clients, sectors and projects
        using different technologies in Berlin.
      </p>
      <p>
        <b>We provide a platform between projects for you to learn what you want to learn.</b> <br/>
        We make sure you keep learning and improving your skills in between
        projects. Your personal and professional development is important for us.
      </p>
    </Chapter>
    <Image src={ photo4 } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>You make the difference</h2>
      <p>
        <b>We trust your professional skills.</b> <br/>
        That means we won’t tell you how things should be done. Instead, we
        encourage you to shape your work as you consider the best of you.
      </p>
      <p>
        <b>We all fail sometimes. Making a mistake and learning from it is far
        more important than not trying something for fear of failure.</b> <br/>
        Mistakes and failures teach us important things. We let them be the seed
        for future great ideas, so we’ll always encourage you to try.
      </p>
      <p>
        <b>Decision-making is also a collective task.</b> <br/>
        We want our work to make sense to everybody. That’s why we set a
        participative culture in which your voice matters.
      </p>
      <p>
        <b>We develop Wunderdog together, as a team.</b> <br/>
        How? Read the blog post about how we reported ourselves to equality consultants.
      </p>
    </Chapter>
    <Image src={ photo5 } alt="Wunderdog people" indent="left" hero/>
    <Chapter>
      <h2>Because people matter</h2>
      <p>
        <b>We help you find the best tools to work with.</b> <br/>
        You can choose the equipment and tools to use in your work. If you need
        advice, we help you find the most suitable ones for you.
      </p>
      <p>
        <b>We support you in all stages of life.</b> <br/>
        Whether it's about combining work and family life or starting your
        studies, we want to be there to support you.
      </p>
      <p>
        <b>Fridays are our special day.</b> <br/>
        Some of our projects are located at the customer’s premises. However,
        Fridays are Wunderdog’s special day: we all have breakfast and work
        together at the office.
      </p>
      <p>
        <b>We value our time together.</b> <br/>
        We enjoy spending time together and getting to know each other. That’s
        why we take care of our company culture through team-building activities,
        coffee breaks, joint meals and hangouts.
      </p>
      <p>
        <b>Discover Berlin with an international team.</b> <br/>
        We’re located between Kreuzberg and Neukölln, a central location in one
        of the most thriving cities in Europe. Take a break by the river, try
        the Turkish market’s flavours or savour the gastronomic variety of the
        restaurants nearby. Join our Berlin office!
      </p>
    </Chapter>
    <CallToAction color="blue" large grid>
      <OpenPositions />
    </CallToAction>
  </Fragment>
)
