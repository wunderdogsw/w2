import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

export default ({ children }) => (
  <Fragment>
    <Helmet>
      <title>{ children } | Wunderdog</title>
      <meta
        name="apple-mobile-web-app-title"
        content={`${ children } | Wunderdog`}
      />
      <meta
        name="application-name"
        content={`${ children } | Wunderdog`}
      />
    </Helmet>
    <h1 className="MainTitle">{ children }</h1>
  </Fragment>
)
