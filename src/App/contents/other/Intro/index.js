import React, { Fragment } from 'react'
import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import Indent from 'App/components/Indent'

import homeThumb from './home-image.jpg'
import home from './home-image.jpg'

export default () => (
  <Fragment>
    <Image thumbSrc={ homeThumb } src={ home } alt="Wunderdog" indent hero/>
    <Indent>
      <Chapter>
        <h2>We believe things can be done better</h2>
        <p>By challenging ourselves and the current thinking, we aim to make the world work better and easier applying the latest technologies and smarter ways of working.</p>
      </Chapter>
    </Indent>
  </Fragment>
)
