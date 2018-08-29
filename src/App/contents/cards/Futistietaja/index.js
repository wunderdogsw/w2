import React, { Fragment } from 'react'
import Image from 'App/components/Image'

import thumb from './futistietaja-card-thumb.png'
import picture from './futistietaja-card.png'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="Futistietäjä" />
    <h4>Playing the beautiful game</h4>
    <p>Yle</p>
  </Fragment>
)
