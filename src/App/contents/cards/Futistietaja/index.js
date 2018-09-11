import React, { Fragment } from 'react'
import Image from 'App/components/Image'

import thumb from './futistietaja-card-thumb.jpg'
import picture from './futistietaja-card.png'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="Futistietaja" />
    <h4>Playing the beautiful game</h4>
    <p>Yle</p>
  </Fragment>
)
