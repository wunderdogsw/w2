import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Image from 'App/components/Image'
import Chapter from 'App/components/Chapter'

import heroThumb from './about-us-hero-thumb.jpg'
import hero from './about-us-hero.jpg'


export default () => (
  <Fragment>
    <MainTitle>About us</MainTitle>
    <SubTitle>
      With experience, creativity and smart minds, we're your partner in
      turning good ideas into well working digital reality.
    </SubTitle>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Wunderdog people" />

<Chapter>
  <h4>We believe things can be done better</h4>
  <p>
    By challenging ourselves and the current thinking, we aim to make the world
    work better and easier applying the lates technologies and smarter
    ways of working.
  </p>

</Chapter>

  </Fragment>
)
