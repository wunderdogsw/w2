import React, { Fragment } from 'react'

import Chapter from '../../../components/Chapter'
import Image from '../../../components/Image'

import home from './wunderdog-office2.jpg'

export default () => (
  <Fragment>
    <Image src={ home } alt="Wunderdog" indent hero/>
    <Chapter>
      <h2>We make sustainable & user-friendly software for our clients.</h2>
      <p>
        We offer expert consultancy in creating digital services and products that
        last. Combining high-quality code, human-centered design and smart ways of
        working we create scalable services together with our clients.
      </p>
    </Chapter>
  </Fragment>
)
