import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import cs from 'classnames'

export default ({ children, useAsMeta, className, ...props }) => (
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
    <h3 { ...props }
      className={cs(
        'SubTitle',
        className
      )}
      children={ children }
    />
  </Fragment>
)
