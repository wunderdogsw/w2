import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

import MainTitle from '../../../components/MainTitle'

export default () => (
  <Fragment>
    <MainTitle narrow>We are more than code and design</MainTitle>
    <Helmet>
      <meta
        name="description"
        content="We are your partner in turning good ideas into well working digital products and services"
      />
    </Helmet>
  </Fragment>
)
