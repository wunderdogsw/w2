import React, { Fragment } from 'React'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import Chapter from 'App/components/Chapter'

import heroThumb from './perusterveys-hero-thumb.jpg'
import hero from './perusterveys-hero.png'

export default () => (
  <Fragment>
    <MainTitle>PerusTerveys</MainTitle>
    <SubTitle useAsMeta>Feeling better about booking online</SubTitle>
    <hr />
    <Keywords>Full-stack development, Service design</Keywords>
    <Image thumbSrc={ heroThumb } src={ hero } alt="PerusTerveys" />
    <Chapter title="Our simple yet smart solution">
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
  </Fragment>
)
