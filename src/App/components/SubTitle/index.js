import './index.css'
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import cs from 'classnames'

export default ({ children, useAsMetaTitle, className, alt, narrow, ...props }) => (
  <Fragment>
    { useAsMetaTitle && (
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
        <meta
          name="twitter:title"
          content={`${ children } | Wunderdog`}
        />
        <meta
          name="og:title"
          content={`${ children } | Wunderdog`}
        />
      </Helmet>
    )}
    <Helmet>
      <meta name="description" content={ children } />
      <meta name="twitter:description" content={ children } />
      <meta name="og:description" content={ children } />
    </Helmet>
    <h3 { ...props }
      className={cs(
        'SubTitle',
        alt && 'SubTitle--alt',
        narrow && 'SubTitle--narrow',
        className
      )}
      children={ children }
    />
  </Fragment>
)
