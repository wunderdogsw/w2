import React, { Fragment } from 'React'
import Image from 'App/components/Image'

import thumb from './redbull-card-thumb.jpg'
import picture from './redbull-card.png'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="RedBull" />
    <h3>A marketing campaign game in two weeks? Game on</h3>
    <p>Red Bull</p>
  </Fragment>
)
