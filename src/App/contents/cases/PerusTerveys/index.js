import React, { Fragment } from 'React'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import Chapter from 'App/components/Chapter'
import Summary from 'App/components/Summary'

import heroThumb from './perusterveys-hero-thumb.jpg'
import hero from './perusterveys-hero.png'
import summary from './perusterveys-summary.svg'

export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#f6db4a',
        '--color-text-on-accent': '#000',
      }}
    </CssVars>
    <MainTitle>PerusTerveys</MainTitle>
    <SubTitle useAsMeta>Feeling better about booking online</SubTitle>
    <hr />
    <Keywords>Full-stack development, Service design</Keywords>
    <Image thumbSrc={ heroThumb } src={ hero } alt="PerusTerveys" />
    <Chapter>
      <h4>Our simple yet smart solution</h4>
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
      <h4>So how did it go?</h4>
      <p>
        Our team was responsible for the complete redesign and build of the
        new online booking system, from service and visual design to
        development, and it was launched within the planned schedule.
        Customer feedback on the system has been very positive.
      </p>
    </Chapter>
    <Chapter>
      <h4>Success that speaks for itself</h4>
      <p>
        The new system increased the number of booked appointments online by
        51.5%, while positive feedback on the user experience increased by
        78.8%. Healthy results by anyone’s standards.
      </p>
    </Chapter>
    <Summary>
      <Image src={ summary } alt="" />
      <h4>The challenge</h4>
      <p>Build the best online booking system in the world.</p>
      <h4>The result</h4>
      <p>
        The new system increased booked appointments online by 51.5% and
        triggered 78.8% more positive feedback on the user experience.
      </p>
      <h4>Technologies used</h4>
      <p>React, Redux, and Node.</p>
    </Summary>
  </Fragment>
)
