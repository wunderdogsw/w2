import React, { Fragment } from 'React'
import Image from 'App/components/Image'

import thumb from './perusterveys-card-thumb.jpg'
import picture from './perusterveys-card.png'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="PerusTerveys" />
    <h3>PerusTerveys omgomgomg</h3>
    <p>Sum sum</p>
  </Fragment>
)
