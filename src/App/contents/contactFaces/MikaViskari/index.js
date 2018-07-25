import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'
import Image from 'App/components/Image'

import photo from './mika-viskari.png'
import thumb from './mika-viskari-thumb.jpg'

export default () => (
  <Fragment>
    <Image thumbSrc={ thumb } src={ photo} alt="Mika Viskari" />
    <h5>Mika Viskari</h5>
    <p style={{ wordBreak: 'break-all', hyphens: 'none' }}>
      +358 50 3139423<br />
      mika.viskari@wunder.dog
    </p>
  </Fragment>
)
