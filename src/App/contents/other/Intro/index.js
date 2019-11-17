import React, { Fragment } from 'react'
import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import Indent from 'App/components/Indent'

import home from './home-image.jpg'

export default () => (
  <Fragment>
    <Image src={ home } alt="Wunderdog" indent hero/>
    <Chapter>
      <h2>High-end consultancy in creating digital
        products and services</h2>
      <p>
        We guide our customers through the maze of crafting digital products
        and services from ideation to execution. By combining smart ways of
        working, human-centered design and high-quality code, we build future
        products and services together with our customers.
      </p>
    </Chapter>
  </Fragment>
)
