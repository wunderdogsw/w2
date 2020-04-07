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
import HubspotForm from 'react-hubspot-form'
import SubTitle from 'App/components/SubTitle'
import './index.css'

import Video from '../../../components/Video'

import photo from './northstarmetrics.jpg'



export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
    <MainTitle narrow>Build for Growth With the North Star Framework</MainTitle>
    <Chapter>
      <p>
      <i>
      Join us for <b>an online workshop</b> to discover how
      product-led companies drive business outcomes. Hosted by Wunderdog and powered by
      Amplitude.
      </i>
      </p>
      <p>
      <i>
      <b>Wednesday 20th May, 10:00-12:00 Helsinki time (GMT+3).</b>
      </i>
      </p>
      <p>
      <i>
      The online workshop will be facilitaded by Zoom video streaming servive.
      Link to stream will be shared to regirtered attendees.
      </i>
      </p>
      <p>
      <i>
      Registration <a href="#register">here</a>.
      </i>
      </p>
      </Chapter>
    <Image src={ photo } alt="Wunderdog people" indent hero/>
    <Chapter>
    <h2>
      What's your North Star metric?
    </h2>
      <p>
      Designed around the North Star Framework, you’ll learn how the best
      digital product teams use a narrow set of meaningful metrics to align
      product strategy with on-the-ground team initiatives.
      </p>
      <p>
      As product managers, you understand that building great products is hard,
      and the bar for successful products is only rising. With consumers having
      almost limitless choices at their disposal, the only way to succeed is by
      delivering the best customer experience through rapidly innovating and
      responding to their needs.
      </p>
      <p>
      Product-led companies are winning in this digital era by rallying their
      teams around a product North Star—the metric that connects the business
      outcomes they are trying to deliver to the work they do each day.
      </p>
      <p>
      Join this hands-on workshop and we'll share a practical framework for how
      to use business objectives and engagement models to determine your
      product's North Star.
      </p>
    </Chapter>
    <Video src="https://player.vimeo.com/external/404915504.hd.mp4?s=31dcbebb14c021ca02a3acd4f9e708ad5ac83d27&profile_id=175" />
    <Chapter>
      <h2>
        Agenda
      </h2>
      <p><b>10:00am Welcome & Briefing</b><br />Check in and welcome words by Wunderdog</p>
      <p><b>10:15am Setting a North Star Metric</b><br />Learn the principles behind an effective North Star, see how it's different across engagement models, and walk through a case study of a leading product company</p>
      <p><b>11:00am Demo</b><br />A brief demo of a product analytics tool</p>
      <p><b>11:30am Q&A</b><br />Discussion and Q&A session</p>
      <p><b>11:50am Wrap-up</b><br />Thank you for joining us!</p>
    </Chapter>
    <Chapter>
    <h2>
      Event Details
    </h2>
    <p><b>Date & Time</b><br />20th May, 10:00-12:00am Helsinki time (GMT + 3)</p>
    <p><b>Location</b><br />Online workshop will be facilitated by Zoom video streaming service. Link to stream will be shared to registered attendees.</p>
    <p><b>Presenter</b><br /><a href="https://www.linkedin.com/in/richardeckles/">Richard Eckles</a>, Amplitude Customer Success Manager</p><p>
    </p>
    </Chapter>
    <Chapter>
    <h2>
      Registration
    </h2>
      <p id="register">We are collecting a waiting list
      and will confirm the attendance to as many persons as possible.
      Confirmations will be sent a few weeks prior to the event. Register to the
      waiting list by filling in your e-mail below:</p>
      <HubspotForm
        portalId='1704241'
        formId='2e04a6dc-afa5-4f5e-8879-b34caa36e88e'
        css=''
      />
    </Chapter>

  </Fragment>
)
