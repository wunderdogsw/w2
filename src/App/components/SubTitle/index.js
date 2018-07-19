import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

export default ({ children, useAsMeta }) => (
  <Fragment>
    { useAsMeta && (
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
    )}
    <h3 className="SubTitle">{ children }</h3>
  </Fragment>
)
