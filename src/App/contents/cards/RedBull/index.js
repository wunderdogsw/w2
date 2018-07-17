import React, { Fragment } from 'React'
import Image from 'App/components/Image'

import thumb from './redbull-card-thumb.jpg'
import picture from './redbull-card.png'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="RedBull" />
    <h3>RedBull omgomgomg</h3>
    <p>Sum sum</p>
  </Fragment>
)
