import React, { Fragment } from 'react'

import Logo from '../../../components/Logo'
import { MainNav } from '../../other'
import MainTitle from "../../../components/MainTitle";

export default () => (
  <Fragment>
    <Logo useHorizontal to="/" />
    <h1>Future-proof design & development</h1>
    <nav>
      <MainNav />
    </nav>
  </Fragment>
)
