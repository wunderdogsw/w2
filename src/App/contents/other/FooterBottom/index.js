import React, { Fragment } from 'react'
import FooterBottom from 'App/components/FooterBottom'
import Logo from 'App/components/Logo'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <FooterBottom>
      <p>© 2019 Wunderdog. WUNDERDOG and WE DO WUNDERS is a registered trademark of Wunderdog Oy in the European Union.</p>
      <nav>
        <TransitionLink to="/cookies">Cookies Policy</TransitionLink>
        <TransitionLink to="/privacy">Privacy Policy</TransitionLink>
      </nav>
    </FooterBottom>
  </Fragment>
)
