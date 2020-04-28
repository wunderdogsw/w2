import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Indent from 'App/components/Indent'
import Grid from 'App/components/Grid'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import { SeriousStats } from 'App/contents/stats'
import Logos from 'App/components/Logos'
import { Clients, Ecosystem } from 'App/contents/other'
import CssVars from 'App/components/CssVars'
import TransitionLink from '../../../components/TransitionLink'

import hero from './wunderdog-office3.jpg'
import photo1 from './wunderdog-office2.jpg'
import photo2 from './wunderdog-office.jpg'

export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
    <MainTitle narrow>We believe things can be done better</MainTitle>
    <p>
    We are currently serving 100% of our customers remotely. Would you also like to be served?
    <TransitionLink to='https://wunderdog.fi/smarter-future'> See more.</TransitionLink>
    </p>
    <Image src={ hero } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>Born years later than the leaders in the field, we inevitably
      started off as an underdog.</h2>
    </Chapter>
    <Chapter>
      <p>
        Our dedication and goals made it clear that being an underdog was only
        temporary. We added a W to the name to give the wow-effect that would
        foreshadow the upcoming. Together the people of this company would do
        wonders.
      </p>
    </Chapter>

    <Indent twice>
      <Stats useAccent>
        <SeriousStats />
      </Stats>
    </Indent>

    <Chapter>
      <h2>
        Our services
      </h2>
      <p><b>Software development</b><br />Delivering high-quality digital products & services</p>
      <p><b>Product Analytics</b><br />Understanding and developing how users engage with what we build</p>
      <p><b>Business Design</b><br />Developing, testing and creating concepts for new businesses</p>
      <p><b>Service and Product Design</b><br />Easy-to-use interfaces to generate great user experiences</p>
      <p><b>Coaching & Team leading</b><br />Agile methods to support smart ways of working</p>
      <p><b>Scoped projects & co-sourcing</b><br />Reliable delivery to accelerate the development process</p>
    </Chapter>

    <Chapter>
    <h2>
    High-end consulting in creating digital products and services
    </h2>
    <p>
    We guide our customers through the maze of crafting digital products and
    services from ideation to execution. By combining smart ways of working,
    human-centered design and high-quality code, we build future products and
    services together with our customers.
    </p>
    </Chapter>


    <Image src={ photo1 } alt="Wunderdog people" indent="left" hero/>

    <Chapter>
      <h2>
        Our ecosystem
      </h2>
      <p>
        We focus on the things we are really good at. We believe it’s the only way to offer the best service
        to our customers. But we’re not alone. Together we create a strong ecosystem that offers end-to-end
        services to our clients for all digital problems.
      </p>
    </Chapter>

    <Indent twice>
      <Logos>
        <Ecosystem />
      </Logos>
    </Indent>

    <Chapter>
      <h2>
        We're your partner in turning good ideas into digital reality
      </h2>
    </Chapter>
    <Indent twice>
      <Logos>
        <Clients />
      </Logos>
    </Indent>



    <Image src={ photo2 } alt="Wunderdog people" large hero/>

  </Fragment>
)
