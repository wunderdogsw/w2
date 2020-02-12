import React, { Fragment } from 'react'

import FooterBottom from '../../../components/FooterBottom'
import TransitionLink from '../../../components/TransitionLink'

var d = new Date()

export default () => (
  <Fragment>
    <FooterBottom>
      <p>© {d.getFullYear()} Wunderdog. WUNDERDOG is a registered trademark of Wunderdog Oy
      in the European Union.</p>
      <nav>
        <TransitionLink to="/cookies">Cookies Policy</TransitionLink>
        <TransitionLink to="/privacy">Privacy Policy</TransitionLink>
      </nav>
    </FooterBottom>
  </Fragment>
)
