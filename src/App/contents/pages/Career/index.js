import React, { Fragment } from 'React'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Image from 'App/components/Image'
import Chapter from 'App/components/Chapter'
import ImageTextRow from 'App/components/ImageTextRow'
import CallToAction from 'App/components/CallToAction'

import { OpenPositions } from 'App/contents/callToActions'

import heroThumb from './career-hero-thumb.jpg'
import hero from './career-hero.png'
import photo1Thumb from './career-photo1-thumb.jpg'
import photo1 from './career-photo1.png'
import photo2Thumb from './career-photo2-thumb.jpg'
import photo2 from './career-photo2.png'
import photo3Thumb from './career-photo3-thumb.jpg'
import photo3 from './career-photo3.png'


export default () => (
  <Fragment>
    <MainTitle>Join the Pack!</MainTitle>
    <SubTitle>
      We believe happy people create the best workplace.<br />
      Welcome to join our pack!
    </SubTitle>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Wunderdog crew" />
    <CallToAction>
      <OpenPositions />
    </CallToAction>
    <ImageTextRow>
      <Image thumbSrc={ photo1Thumb } src={ photo1 } alt="Wunderdogs" />
      <h4>The most important thing is that we all enjoy being at work</h4>
      <p>
        We support each other with our collective know-how, since, even
        though we are competent, none of us is a master of everything.
      </p>
    </ImageTextRow>
    <ImageTextRow reversed>
      <Image thumbSrc={ photo2Thumb } src={ photo2 } alt="Wunderdogs" />
      <h4>We share information openly and fairly amongst colleagues</h4>
      <p>
        By default, all company information is public to all our employees.
        We limit access to knowledge only for a good reason.
      </p>
    </ImageTextRow>
    <ImageTextRow>
      <Image thumbSrc={ photo3Thumb } src={ photo3 } alt="Wunderdogs" />
      <h4>The most important thing is that we all enjoy being at work</h4>
      <p>
        We support each other with our collective know-how, since, even
        though we are competent, none of us is a master of everything.
      </p>
    </ImageTextRow>

  </Fragment>
)
