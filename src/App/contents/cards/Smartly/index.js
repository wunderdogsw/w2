import React, { Fragment } from 'React'
import Image from 'App/components/Image'

import thumb from './smartly-card-thumb.jpg'
import picture from './smartly-card.png'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="Smartly" />
    <h3>Teamwork makes the dream work</h3>
    <p>Smartly</p>
  </Fragment>
)
