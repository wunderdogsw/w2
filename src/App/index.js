import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { State } from 'App/state'
import Splash from 'App/components/Splash'
import Header from 'App/components/Header'
import Footer from 'App/components/Footer'
// import CookieMonster from 'App/components/CookieMonster'
import Home from 'App/routes/Home'
import Page from 'App/routes/Page'
import { LetsTalk } from 'App/contents/callToActions'
import {
  FooterBottom,
  // CookieDisclamer,
} from 'App/contents/other'

export default () => (
  <BrowserRouter>
    <State>

      {/* External redirects */}
      <Route path="*" render={({ match }) => {
        switch (match.url) {
          case '/instagram':
          case '/instagram-1':
            window.location = 'https://www.instagram.com/wunderdogsw'
            break

          case '/kulttuurimme':
            window.location = 'https://medium.com/wunderdog-culture'
            break
        }
        return null
      }}/>

      <Switch>

        {/* Internal redirects */}
        <Redirect from="/wunderdog-fi" to="/" />
        <Redirect from="/en" to="/" />
        <Redirect from="/main" to="/" />
        <Redirect from="/wundernuts" to="/" />
        <Redirect from="/wunderkuutio" to="/" />
        <Redirect from="/wundernuts-1" to="/" />
        <Redirect from="/we-do-wunders" to="/aboutus" />
        <Redirect from="/wedowunders-fi" to="/aboutus" />
        <Redirect from="/main-2" to="/career" />
        <Redirect from="/fullstacker-to-our-lund-pack" to="/career" />
        <Redirect from="/fullstack-developer-berlin-germany" to="/career" />
        <Redirect from="/fullstack-developer-lund" to="/career" />
        <Redirect from="/join-the-pack" to="/career" />
        <Redirect from="/we-are-hiring-join-the-pack" to="/career" />
        <Redirect from="/liity-joukkoon" to="/career" />
        <Redirect from="/fullstack-developer" to="/career" />
        <Redirect from="/interaction-designer" to="/career" />
        <Redirect from="/ota-yhteytta" to="/contact" />
        <Redirect from="/contact-us" to="/contact" />

        {/* Routes */}
        <Route path="/:page" component={ Page } />
        <Route path="*" component={ Home } />

      </Switch>
      <Footer>
        <Switch>
          <Route path="/contact" />
          <Route path="*" component={ LetsTalk }/>
        </Switch>
        <FooterBottom />
      </Footer>
      <Header />
      <Splash />

      {/* Enable Cookiemonster to show cookie disclamer */}
      {/* <CookieMonster>
        <CookieDisclamer />
      </CookieMonster> */}
    </State>
  </BrowserRouter>
)
