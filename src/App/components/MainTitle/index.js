import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import cs from 'classnames'

export default ({ children, className, ...props }) => (
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
    <h1 { ...props }
      className={cs(
        'MainTitle',
        className
      )}
      children={ children }
    />
  </Fragment>
)
