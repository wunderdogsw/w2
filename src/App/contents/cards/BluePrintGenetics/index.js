import React, { Fragment } from 'react'
import Image from 'App/components/Image'

import thumb from './blueprint-card-thumb.jpg'
import picture from './blueprint-card.png'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="Oodi" />
    <h4>It's in our DNA</h4>
    <p>Blueprint Genetics</p>
  </Fragment>
)
