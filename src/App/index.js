import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { State } from './state'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './routes/Home'
import Blog from './routes/Blog'
import Work from './routes/Work'
import General from './routes/General'
import { MainFooter } from './contents/callToActions'
import { FooterBottom } from './contents/other'

export default () => (
  <BrowserRouter>
    <State>

      {/* External redirects */}
      <Route path="*" render={({ match }) => {
        switch (match.url) {
          case '/instagram':
          case '/instagram-1':
            window.location = 'https://www.instagram.com/wunderdogofficial'
            break

          case '/kulttuurimme':
            window.location = 'https://medium.com/wunderdog-culture'
            break
        }
        return null
      }}/>

      <Switch>
        <Route path="/pahkina" />
        <Route path="/pingpong" />
        <Route path="*" component={ Header }/>
      </Switch>

      <Switch>

        {/* Internal redirects */}
        <Redirect from="/wunderdog-fi" to="/" />
        <Redirect from="/en" to="/" />
        <Redirect from="/main" to="/" />
        <Redirect from="/wundernuts" to="/" />
        <Redirect from="/wunderkuutio" to="/" />
        <Redirect from="/wundernuts-1" to="/" />
        <Redirect from="/we-do-wunders" to="/aboutus" />
        <Redirect from="/we-do-wunders-fi2" to="/aboutus" />
        <Redirect from="/wedowunders-fi" to="/aboutus" />
        <Redirect from="/main-2" to="/career" />
        <Redirect from="/fullstacker-to-our-lund-pack" to="/career" />
        <Redirect from="/fullstack-developer-berlin-germany" to="/career" />
        <Redirect from="/fullstack-developer-lund" to="/career" />
        <Redirect from="/join-the-pack" to="/career" />
        <Redirect from="/we-are-hiring-join-the-pack" to="/career" />
        <Redirect from="/liity-joukkoon" to="/career" />
        <Redirect from="/liity-joukkoon-2" to="/career" />
        <Redirect from="/fullstack-developer" to="/career" />
        <Redirect from="/interaction-designer" to="/career" />
        <Redirect from="/ota-yhteytta" to="/contact" />
        <Redirect from="/contact-us" to="/contact" />
        <Redirect from="/kulttuurimme-2" to="/career" />
        <Redirect from="/oodi" to="/work/oodi" />
        <Redirect from="/redbull" to="/work/red-bull" />
        <Redirect from="/pexraytech" to="/work/pexraytech" />
        <Redirect from="/perusterveys" to="/work/perus-terveys" />
        <Redirect from="/blueprintgenetics" to="/work/blueprint-genetics" />


        {/* Routes */}

        <Route exact path="/blog/:page" component={ Blog } exact />
        <Route exact path="/work/:page" component={ Work } exact />
        <Route exact path="/:page" component={ General } exact />
        <Route exact path="*" component={ Home } />

      </Switch>

      <Switch>
        <Route path="/work/*" />
        <Route path="/blog/*" />
        <Route path="*" component={() =>
          <Footer main>
            <MainFooter />
            <FooterBottom />
          </Footer>
        }/>
      </Switch>
    </State>
  </BrowserRouter>
)
