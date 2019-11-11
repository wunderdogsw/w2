import React, { Fragment } from 'react'
import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import Indent from 'App/components/Indent'

import home from './home-2.jpg'

export default () => (
  <Fragment>
    <Image src={ home } alt="Wunderdog" indent="left" hero/>
  </Fragment>
)
