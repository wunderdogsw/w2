import React, { Fragment } from 'react'

import Image from '../../../components/Image'
import home from './home-1.jpg'

export default () => (
  <Fragment>
    <Image src={ home } alt="Wunderdog" indent="left" hero/>
  </Fragment>
)
