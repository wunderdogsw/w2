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
    <MainTitle narrow>Willkommen in unserem Berliner Büro</MainTitle>
    <Image src={ hero } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>Why Wunderdog?</h2>
    </Chapter>
    <Chapter>
      <p>
        Having been born some years later than the leaders in the field, we
        inevitably started off as an underdog. Our dedication and goals made it
        clear that being an underdog would only be a temporary thing. Thus we
        added a ‘W’ to the name to give it a wow-effect to foreshadow the
        upcoming.
      </p>
    </Chapter>
    <Image src={ photo1 } alt="Wunderdog people" indent="left" hero/>
    <Chapter>
      <h2>What makes working at Wunderdog special?</h2>
    </Chapter>
    <Chapter>
    <p>
      In Wunderdog, you’re not alone - learn about what makes our company and
      its people special.
    </p>
    <h2>Location: Berlin, Berlin</h2>
    <p>
      Working in a vibrant city like Berlin, at a central location, home to
      popular music, electronic music and a very dynamic cultural scene.
    </p>
    <p>
      (Within Berlin): Our office is close to the popular Turkish market and
      restaurants close to the area.
    </p>
    </Chapter>
    <Image src={ photo2 } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>Travel: Berlin, Berlin</h2>
    </Chapter>
    <Chapter>
      <p>
        Ability to switch offices in case you want to try and work in our
        Helsinki office (you choose for how long).
      </p>
      <p>
        We travel to Helsinki all together once a year to mingle with the
        Helsinki office.
      </p>
      <p>
        Wundertrip: we travel together once a year somewhere to spend a weekend
        together.
      </p>
      <p>
        Exchange program in Helsinki: twice a year
      </p>
    </Chapter>
    <Image src={ photo2 } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>Team: it’s all about good vibes</h2>
      <p>
        International team of people of different ages, nationalities and
        backgrounds
      </p>
      <p>
        In WD you’re not alone: our colleagues have your back professionally
        when you need it.
      </p>
      <p>
        Team-building activities, lunch lottery once a month and celebrate
        festivities together.
      </p>
      <p>
        We want to develop and shape Wunderdog together, as a team.
      </p>
      <p>
        Friendly atmosphere in a coworking space with other tech companies.
      </p>
      <p>
        We ensure a safe space for everyone, where you will be respected, valued
        and encouraged to bond with the team.
      </p>
      <p>
        Our company is shaped by more than 100 experts from different fields -
        developers, culture, designers, marketers, people operations - for you
        to learn from.
      </p>
      <p>
        Participative culture: important decision-making is a collective task
      </p>
    </Chapter>
    <Image src={ photo2 } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>Projects: Your choices matter</h2>
      <p>
        Ability to switch projects (from short -3 months- to long -multiple
        years projects). Each employee has different preferences in terms of
        project commitments and workloads, and we try to adjust to your needs.
      </p>
      <p>
        If you feel it’s time to move on from a project, we create a timeline
        (usually less than 3 months) to transition another person onto the
        project (and you onto another project you feel more attracted to).
      </p>
      <p>
        You won’t be forced to work in technologies or industries you are not
        interested in.
      </p>
      <p>
        No project leaders - we’re self-imposed/self-determining. Help is given
        when needed, but it is not forced.
      </p>
      <p>
        We won’t tell you how to do things. However, if you need advice, you can
        always rely on us. We give opportunities to show and improve your skills.
      </p>
      <p>
        We would like to make the world a better place, so we also want to find
        projects for you that will be meaningful to work at.
      </p>
    </Chapter>
    <Image src={ photo2 } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>Personal growth: Our investment is giving you freedom</h2>
      <p>
        Tech sessions on Fridays
      </p>
      <p>
        We trust your professional skills.
      </p>
      <p>
        We will support your participation for events and conferences.
      </p>
      <p>
        A platform for your personal growth: we care about your professional and
        personal development. Here you can learn from programming languages, to
        other tech skills or learn more about shaping company culture c
        ollectively.
      </p>
      <p>
        A place where you can also develop your consultant skills and learn from
        other consultants.
      </p>
      <p>
        Tech sessions: we give opportunities to do presentations on topics that
        interest you, and you can get to attend the Tech presentations of your
        coworkers.
      </p>
    </Chapter>
    <Image src={ photo2 } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>Open source made us who we are</h2>
      <p>
        Open source is at the core of what we do, and we want it to continue to
        thrive. Thus you’ll be compensated for working on open-source projects on
        your spare time.
      </p>
      <p>
        We want everyone to participate in open source. We don’t limit this
        program to pull requests to major popular packages or frameworks, but
        rather we encourage and compensate all kinds of contributions.
      </p>
      <p>
        Generally, if you’re contributing to the community, or improving your
        own skills we want to support you however we can! Growing our community
        and our employees is our business model.
      </p>
      <p>
        Here are some other examples of employee contributions that were
        compensated in this program:
      </p>
      <p>
        Writing a tutorial blog post and post that on Medium
        Preparing slides for a meetup talk on company culture
        Working with a colleague on a small side project in order to learn a new
        technology and pushing that to a public repository
        Organizing an event related to Wunderdog
        Volunteering as a mentor at a Meetup
      </p>
    </Chapter>
    <Image src={ photo2 } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>Culture: We care about you</h2>
      <p>
        Breakfast on Friday and get-togethers
        Office with kitchen, supplies, fruits and snacks.
        Your opinion matters, we care about your feedback and you have a space
        to voice it.
        We promote a healthy work-life balance.
        Possibility to work remote
        We learn from our mistakes and we won’t blame you for them.
        We listen and communicate -  we learn from each other.
        You don’t need to dress in a suit and tie to work with us! We like
        relaxed environments where you can just be yourself, just as you are.
      </p>
    </Chapter>
    <Chapter>
    <p>
      Ability to switch offices in case you want to try and work in our Helsinki
      office (you choose for how long).
    </p>
    <p>
      We travel to Helsinki all together once a year to mingle with the Helsinki
      office.
    </p>
    <p>
      Wundertrip: we travel together once a year somewhere to spend a weekend
      together.
    </p>
    <p>
      Exchange program in Helsinki: twice a year.
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
