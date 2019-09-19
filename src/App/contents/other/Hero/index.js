import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'

export default () => (
  <Fragment>
    <MainTitle narrow>We design and code</MainTitle>
    <Helmet>
      <meta
        name="description"
        content="We are your partner in turning good ideas into well working digital products and services"
      />
    </Helmet>
  </Fragment>
)
