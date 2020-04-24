import React, { Fragment } from 'react'

import Image from '../../../components/Image'
import home from './wunderdog-office.jpg'

export default () => (
  <Fragment>
    <Image src={ home } alt="Wunderdog" indent="left" hero/>
  </Fragment>
)
