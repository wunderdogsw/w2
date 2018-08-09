import React, { Fragment } from 'react'
import Image from 'App/components/Image'

import thumb from './redbull-card-thumb.jpg'
import picture from './redbull-card.png'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="RedBull" />
    <h4>A marketing campaign game in two weeks? Game on.</h4>
    <p>Red Bull</p>
  </Fragment>
)
