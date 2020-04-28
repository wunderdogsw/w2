import React, { Fragment } from 'react'

import CssVars from '../../../components/CssVars'
import MainTitle from '../../../components/MainTitle'
import Image from '../../../components/Image'
import Chapter from '../../../components/Chapter'
import CallToAction from '../../../components/CallToAction'
import { OpenPositions } from '../../callToActions'
import hero from './wunderdog-office1.jpg'
import photo1 from './wunderdog-office4.jpg'
import photo2 from './wunderdog-office3.jpg'

export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#000000',
        '--color-text-on-accent': '#fff',
      }}
    </CssVars>
    <MainTitle narrow>Happy people create the best workplace</MainTitle>
    <Image src={ hero } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>We offer an endless platform for personal growth and shared learning</h2>
    </Chapter>
    <Chapter>
      <p>
        We believe things can be done better, so we challenge both ourselves
        and current thinking to  make the world work better and smarter. One
        project at a time, we’re improving how companies, communities, and
        societies work.
      </p>
    </Chapter>
    <Image src={ photo1 } alt="Wunderdog people" indent="left" hero/>
    <Chapter>
      <h2>Our culture is born out of what we all do each day</h2>
    </Chapter>
    <Chapter>
      <p>
        <b>We actively avoid setting obstacles in our way</b> <br/>
        We recruit intelligent and competent people who can make decisions
        independently. We are given freedom and responsibility accordingly.
      </p>
      <p>
        <b>The most important thing is that we all enjoy being at work</b> <br/>
        We respect every employee regardless of gender, age, religion, sexual
        orientation or ethnic background.
      </p>
      <p>
        <b>We value our colleagues’ success as much as our own</b> <br/>
        We support each other with our collective know-how, since, even though
        we are competent, none of us is master of everything.
      </p>
      <p>
        <b>We share information openly and fairly amongst colleagues</b> <br/>
        By default, all company information is public to all our employees.
        We limit access to knowledge only for a good reason.
      </p>
      <p>
        <b>We encourage bold and open-minded experimentation</b> <br/>
        We all fail sometimes. We believe that making a mistake and learning
        from it is far more important than not trying something for fear of
        failure. An important part of learning is to ask feedback - which we
        are always happy to give.
      </p>
    </Chapter>
    <Image src={ photo2 } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>
        We help our people in finding and reaching their fullest potential
      </h2>
    </Chapter>
    <Chapter>
      <p>
        Active communications and knowledge sharing are at our core. We don’t
        compete against each other, we believe in succeeding together.
        Behind each individual doggo there’s always the support of the entire
        Wunderdog team.
      </p>
    </Chapter>
    <CallToAction color="blue" large grid>
      <OpenPositions />
    </CallToAction>
  </Fragment>
)
