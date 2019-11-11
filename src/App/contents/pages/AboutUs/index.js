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

import hero from './about-us-1.jpg'
import photo1 from './about-us-4.jpg'
import photo2 from './about-us-2.jpg'

export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
    <MainTitle narrow>We build on top of opportunities</MainTitle>
    <Image src={ hero } alt="Wunderdog people" indent hero/>

    <Indent>
      <Chapter>
        <h2>High-end consultancy services in creating digital
        products and services</h2>
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
          high-quality code, we build products and services together with
          our customers.
        </p>
      </Chapter>

      <Stats useAccent>
        <SeriousStats />
      </Stats>
    </Indent>

    <Indent>
      <Chapter>
        <h2>
          Our services
        </h2>
      </Chapter>
    </Indent>

    <Indent twice>
      <Chapter>
        <p><b>Software development</b><br />Delivering high-quality digital products & services</p>
        <p><b>Product Analytics</b><br />Understanding and developing how users engage with what we build</p>
        <p><b>Business Design</b><br />Developing, testing and concepting of new businesses</p>
        <p><b>Service and Product Design</b><br />Easy-to-use interfaces to generate great user experiences</p>
        <p><b>Coaching & Team leading</b><br />Agile methods to support smart ways of working</p>
        <p><b>Scoped projects & co-sourcing</b><br />Reliable delivery to accelerate the development process</p>
      </Chapter>
    </Indent>

    <Indent>
      <Chapter>
        <h2>
          Our ecosystem
        </h2>
      </Chapter>
    </Indent>

    <Indent twice>
      <Chapter>
        <p>
          We focus on the things we are really good at. We believe it’s the only way to offer the best service
          to our customers. But we’re not alone. Together we create a strong ecosystem that offers end-to-end
          services to our clients for all digital problems.
        </p>
      </Chapter>
      <Logos>
        <Ecosystem />
      </Logos>
    </Indent>

    <Image src={ photo1 } alt="Wunderdog people" indent="left" hero/>

    <Indent>
      <Chapter>
        <h2>
          We're your partner in turning good ideas into digital reality
        </h2>
      </Chapter>
    </Indent>

    <Indent twice>
      <Logos>
        <Clients />
      </Logos>
    </Indent>

    <Image src={ photo2 } alt="Wunderdog people" large hero/>

  </Fragment>
)
