import React, { Fragment } from 'React'
import Image from 'App/components/Image'

import thumb from './pexraytech-card-thumb.jpg'
import picture from './pexraytech-card.png'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="Pexraytech" />
    <h3>Pexraytech omgomgomg</h3>
    <p>Sum sum</p>
  </Fragment>
)
