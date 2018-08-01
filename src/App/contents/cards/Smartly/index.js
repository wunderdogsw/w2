import React, { Fragment } from 'react'
import Image from 'App/components/Image'

import thumb from './smartly-card-thumb.jpg'
import picture from './smartly-card.png'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="Smartly" />
    <h4>Teamwork makes the dream work</h4>
    <p>Smartly.io</p>
  </Fragment>
)
