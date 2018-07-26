import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { State } from 'App/state'
import Splash from 'App/components/Splash'
import Header from 'App/components/Header'
import Footer from 'App/components/Footer'
import Home from 'App/routes/Home'
import Page from 'App/routes/Page'
import { LetsTalk } from 'App/contents/callToActions'
import { FooterBottom } from 'App/contents/other'

export default () => (
  <BrowserRouter>
    <State>
      <Switch>
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
    </State>
  </BrowserRouter>
)
