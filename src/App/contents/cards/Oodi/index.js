import React, { Fragment } from 'react'
import Image from 'App/components/Image'

import thumb from './oodi-card-thumb.jpg'
import picture from './oodi-card.png'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="Oodi" />
    <h4>An ode to the city</h4>
    <p>Oodi, Central Library</p>
  </Fragment>
)
