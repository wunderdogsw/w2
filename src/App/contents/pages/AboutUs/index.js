import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Image from 'App/components/Image'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import { AboutUs } from 'App/contents/stats'

import heroThumb from './about-us-hero-thumb.jpg'
import hero from './about-us-hero.jpg'
import photo1Thumb from './about-us1-thumb.jpg'
import photo1 from './about-us1.jpg'
import photo2Thumb from './about-us2-thumb.jpg'
import photo2 from './about-us2.jpg'


export default () => (
  <Fragment>
    <MainTitle>About us</MainTitle>
    <SubTitle>
      We're your partner in turning good ideas into well working digital reality.
    </SubTitle>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Wunderdog people" />

<Chapter>
  <h4>We offer high-end consyltancy in creating digital products and service</h4>
  <p>
    We guide our customers through the maze of crafting digital services from
    ideation to execution. <br />
    <br />
    By combining the smart ways of working, human-centered design and
    high-quality code, we build future-proof digital services together with
    our customers.

  </p>
</Chapter>

<Stats>
  <AboutUs />
</Stats>

<Chapter>
  <h4>Together we do Wunders</h4>
  <p>
    To ensure that our culture of being and doing is transmitted to the customer,
    we commit to the following principles:</p>
  <h5>Collaboration</h5>
  <p>
    Working from customer’s office as a part of their team enabling
    open communication
  </p>
  <h5>Community</h5>
  <p>
    The support and intelligence of the entire Wunderdog behind each
    individual and team
  </p>
  <h5>Transparency</h5>
  <p>
    Projects, weekly, daily status always visualised
  </p>
  <h5>Experience and continuos learning</h5>
  <p>
    Knowledge of 27 languages (at least and still counting) and internal
    trainings on weekly basis
  </p>
  <h5>Reasonability</h5>
  <p>
    Identifying and focusing on high value targets. Small and rapid steps from
    concept to validation
  </p>
</Chapter>

<ImageRow>
<Image thumbSrc={ photo1Thumb } src={ photo1 } alt="Wunderdog photo stock 1" />
<Image thumbSrc={ photo2Thumb } src={ photo2 } alt="Wunderdog photo stock 2" />
</ImageRow>


  </Fragment>
)
