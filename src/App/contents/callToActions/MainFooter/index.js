import React, { Fragment } from 'react'

import Logo from '../../../components/Logo'
import { MainNav } from '../../other'

export default () => (
  <Fragment>
    <Logo useHorizontal to="/" />
    <h1>We are more than code and design</h1>
    <nav>
      <MainNav />
    </nav>
  </Fragment>
)
