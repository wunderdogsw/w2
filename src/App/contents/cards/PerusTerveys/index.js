import React, { Fragment } from 'React'
import Image from 'App/components/Image'

import thumb from './perusterveys-card-thumb.jpg'
import picture from './perusterveys-card.png'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ picture } alt="PerusTerveys" />
    <h3>Feeling better about booking online</h3>
    <p>PerusTerveys</p>
  </Fragment>
)
