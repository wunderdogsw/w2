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
import {AnteroTorhonen} from '../../contactSalesFaces'
import CallToAction from "../../../components/CallToAction"
import {CaseContactInfo} from "../../callToActions"

import hero from './trainings-wunderdog.jpg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
    <MainTitle narrow>Our experienced coaches are here to help</MainTitle>
    <Image src={ hero } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>We know our way around trainings</h2>
    </Chapter>
    <Chapter>
      <p>
        <i>Remote or not, we can help you broaden your skills to meet the needs of
        the constantly changing digital world.</i>
      </p>
    </Chapter>

    <Chapter>
      <p><b>° TypeScript</b><br /> We organise TypeScript sessions for novices
      and advanced developers.</p>
      <p><b>° API-Development</b><br /> Protocols, error handling, and code
      modularity are just some of the questions your team needs to address
      before building a great API.</p>
      <p><b>° Design Sprint </b><br /> You'll learn how to use this method to find
      out how potential users would react to your idea and, as a result, you
      will be able to make a well-founded
      decision on how to progress.</p>
      <p><b>° Elements of a successful software project</b><br /> This training
      is designed for anyone who works or is interested in working in the
      digital world.</p>
    </Chapter>
    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let's talk.">
        <AnteroTorhonen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
)
