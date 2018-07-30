import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <TransitionLink to="/contact" children="Contact" />
    <TransitionLink to="/career" children="Career" />
    <TransitionLink to="/aboutus" children="About Us" />
    <TransitionLink to="https://medium.com/@WunderdogSW" children="Blog" />
  </Fragment>
)
