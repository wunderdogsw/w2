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

import photo1 from './joanna-wunderdog.jpg'
import photo2 from './emilia-vesa-wunderdog.jpg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
    <MainTitle narrow>Registration to WIT virtual breakfast date:
    psychologically sustainable remote work practices

</MainTitle>
    <Chapter>
      <p>
      <i>It's 2020 and remote work is here to stay. We need to make sure our
      working environments meet the needs of our employees not only for
      successful navigation through the tough times but also, for a sustainable
      future of work.</i>
      </p>

      <p><i>
      <b>Tuesday 8th September, 08:00-09:30 Helsinki time.</b>
      </i></p>

      <p><i>Welcome to join Wunderdog for this breakfast event to discuss how
      to build psychologically sustainable remote work practices.
      </i></p>

      </Chapter>
      <Image src={ photo1 } alt="Joanna Rindell" indent hero/>
      <Chapter>
      <h2>
        Registration
      </h2>

        <HubspotForm
          portalId='1704241'
          formId='bfbc8420-202e-407a-8180-181491765f5a'
          css=''
        />
      </Chapter>
        <Chapter>
        <h2>
          About the event
        </h2>
      <p>For this session, we have gathered our insights on the dos and don'ts of
      working remotely. We will discuss practical examples for you to take with
      you to your own working environment. We'll introduce the theory frame of
      basic psychological needs and discuss how sustainable remote work
      practices can be built keeping those in mind. In addition to our
      presentation, we hope the event works as a platform for discussion and
      sharing useful insights for the participants to take into practice.
      </p>
      <p>The session will be hosted by Wunderdog's Head of People Operations,
      Emilia Vesa and Wunderdog GmbH COO Joanna Rindell.
      </p>

      </Chapter>
      <Image src={ photo2 } alt="Emilia Vesa" indent="left" hero/>
      <Chapter>
      <h2>
        Event Details
      </h2>
      <p><b>Date & Time</b><br />8th September, 08:00-09:30am Helsinki time</p>
      <p><b>Location</b><br />This event is organized online. The link to the
      event will be shared to all registered participants closer to the event</p>
      </Chapter>
      <Chapter>
    <h2>
      About Wunderdog
    </h2>
      <p>
      Founded in Helsinki in 2014, Wunderdog is a Software Development Consulting
      company headquartered in Helsinki, Finland with a branch
      in Berlin since 2018. The company employs over 100 software development
      and design professionals. Together with their clients, Wunderdog crafts
      digital solutions in a variety of industries, company sizes and projects,
      and leads sustainable digital transformations.</p>
      <p> The backbone of Wunderdog’s success is a strong company culture geared
      towards their people and the processes they build, fostering a healthy
      work-life balance and fostering diversity, equality, inclusion, and overall
      employee well-being.
      </p>
    </Chapter>


  </Fragment>
)
