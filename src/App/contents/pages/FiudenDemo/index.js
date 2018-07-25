import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Summary from 'App/components/Summary'

import heroThumb from './FiudenDemo-hero-thumb.jpg'
import hero from './FiudenDemo-hero.png'
import photo1Thumb from './smartly-photo1-thumb.jpg'
import photo1 from './smartly-photo1.jpg'
import summary from './smartly-summary.svg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#FFBBC5',
        '--color-text-on-accent': '#000',
      }}
    </CssVars>
    <MainTitle>Fiuden Demo</MainTitle>
    <SubTitle useAsMeta>Fiudenaattori koodaa</SubTitle>
    <hr />
    <Keywords>Dev</Keywords>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Smartly hero" />
    <Chapter>
      <h4>Setting the scene</h4>
      <p>
        If you know anything about the Finnish startup scene, you’ve almost
        certainly heard about Smartly.io. The success of the company has been
        nothing short of staggering, with fast growth and an ever-increasing
        number of clients using Smartly.io’s solution to optimize their social
        media marketing.
      </p>
    </Chapter>
    <Image thumbSrc={ photo1Thumb } src={ photo1 } alt="Smartly photo stock 1" />
    <Chapter>
      <h4>The bright idea</h4>
      <p>
        What if Smartly.io’s increasingly large and complex systems could be
        iterated faster and more reliably?
      </p>
      <p>
        Smartly.io got in touch to find out if we had any seasoned engineers
        that could help do just that. And guess what? We did.
      </p>
    </Chapter>
    <Chapter>
      <h4>The inevitable challenge</h4>
      <p>
        DevOps – the seamless interplay of people, technology, and processes –
        is a good way to give developers solid ground to work on and develop a
        product. But Smartly.io’s DevOps team needed some external help to
        drive the bits of DevOps development that were otherwise getting neglected.
        The existing continuous integration system was at full capacity, and the
        development experience needed to be improved with easier development
        environments and smoother deployments.
      </p>
    </Chapter>
    <Chapter>
      <h4>Our hands-on solution</h4>
      <p>
        We brought experience from multiple clients and different DevOps setups
        that gave perspective to the discussion about how to best solve the
        challenges at hand. This, combined with our ability to turn plans into
        action, meant we were confident that the collaboration would deliver
        the goods.
      </p>
    </Chapter>
    <Chapter>
      <h4>So how did it go?</h4>
      <p>
        This project is all about great collaboration, and our relationship
        with Smartly.io has grown from strength to strength. The work has now
        been going on for over a year and our strong contribution and the
        progress made have shown that by joining forces we can deliver value
        in a very demanding environment.
      </p>
    </Chapter>
    <Chapter>
      <h4>Success that speaks for itself</h4>
      <p>
        With the new continuous integration system we provided results are
        delivered faster and more reliably. Development environments are
        already easier and significantly faster to set up, saving time and
        energy. And the DevOps team’s processes have also moved forward with
        agile improvements such as Kanban, daily meetings, and retrospectives.
        This collaboration continues to prove that working together is working
        smartly.
      </p>
    </Chapter>
    <Summary>
      <Image src={ summary } alt="" />
      <h4>The challenge</h4>
      <p>
        Assist the Smartly.io DevOps team with their work, migrating to a new
        continuous integration system and improving the development
        environments.
      </p>
      <h4>The result</h4>
      <p>
        A successful partnership leading to significant improvements in the
        development environments, with faster test runs and better
        modularization.
      </p>
    </Summary>
  </Fragment>
)
