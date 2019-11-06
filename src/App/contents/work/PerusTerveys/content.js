import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import Chapter from 'App/components/Chapter'
import Summary from 'App/components/Summary'
import DatLine from 'App/components/DatLine'

import photo from './perusterveys-photo.png'
import summary from './perusterveys-summary.svg'

export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#f6db4a',
        '--color-text-on-accent': '#000',
      }}
    </CssVars>
    <Chapter>
      <h2>Setting the scene</h2>
      <p>
        PerusTerveys is revolutionizing the Finnish healthcare services
        industry with general practitioner and laboratory services at
        affordable prices and without long waiting times. The positive
        public response has led to rapid growth – the business has expanded
        from a handful of medical centers to a national chain of private
        clinics.
      </p>
    </Chapter>
    <Chapter>
      <h2>The bright idea</h2>
      <p>
        What if private healthcare services could be made accessible for
        everyone?
      </p>
      <p>
        To do this, the online booking system should be as user friendly and
        easy to use as possible – in fact, it should be the best booking
        system in the world.
      </p>
    </Chapter>
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
        According to customer feedback, PerusTerveys’s current online booking
        system was far too complicated to use – so much so that most of
        their customers ended up booking appointments by phone instead.
        With no developer or service designer expertise in-house,
        PerusTerveys turned to Wunderdog to handle the entire execution of
        their new online booking system, from service design to full stack
        development.
      </p>
    </Chapter>
    <Image src={ photo } alt="Crew photo" />
    <Chapter>
      <h2>Our simple yet smart solution</h2>
      <p>
        We created the booking system on top of PerusTerveys’s patient data
        interface. Our brief was to make the best booking system there is; it
        should be simple to use and work on both desktop and mobile. Other
        than that we had a free hand.
      </p>
      <p>
        We started by mapping the customer journey, aiming at extreme
        simplicity with only the most important steps included in the service.
        Visually the service was designed to perfect the customer experience
        and match the PerusTerveys brand.
      </p>
      <p>
        We kept the feedback loop short, giving PerusTerveys full access in
        real time to all our ideas and prototypes. In addition, we held weekly
        face-to-face meetings and carried out on-the-go iterations according
        to feedback.
      </p>
    </Chapter>
    <Chapter>
      <h2>So how did it go?</h2>
      <p>
        Our team was responsible for the complete redesign and build of the
        new online booking system, from service and visual design to
        development, and it was launched within the planned schedule.
        Customer feedback on the system has been very positive.
      </p>
    </Chapter>
    <Chapter>
      <h2>Success that speaks for itself</h2>
      <p>
        The new system increased the number of booked appointments online by
        51.5%, while positive feedback on the user experience increased by
        78.8%. Healthy results by anyone’s standards.
      </p>
    </Chapter>
    <Summary>
      <Image src={ summary } alt="" />
      <h2>The challenge</h2>
      <p>Build the best online booking system in the world.</p>
      <h2>The result</h2>
      <p>
        The new system increased booked appointments online by 51.5% and
        triggered 78.8% more positive feedback on the user experience.
      </p>
    </Summary>
  </Fragment>
)
