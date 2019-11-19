import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

export default ({ children }) => (
  <Fragment>
    <Helmet>
      <meta name="keywords" content={ children } />
    </Helmet>
  </Fragment>
)
