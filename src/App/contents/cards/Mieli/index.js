import React, { Fragment } from 'react'
import Image from 'App/components/Image'

import thumb from './mieli-card-thumb.jpg'
import picture from './mieli-card.jpg'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="Smartly" />
    <h4>Keeping data in mind</h4>
    <p>MIELI - Mental Health Finland</p>
  </Fragment>
)
