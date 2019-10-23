import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <TransitionLink to="/work" children="Work" />
    <TransitionLink to="/about-us" children="About" />
    <TransitionLink to="/career" children="Careers" />
    <TransitionLink to="/blog" children="Blog" />
    <TransitionLink to="/contact" children="Contact" />
  </Fragment>
)
