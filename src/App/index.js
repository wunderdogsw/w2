import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { State } from 'App/state'
import Splash from 'App/components/Splash'
import Header from 'App/components/Header'
import Home from 'App/routes/Home'
import Page from 'App/routes/Page'

export default () => (
  <BrowserRouter>
    <State>
      <Header />
      <Switch>
        <Route path="/:page" component={ Page } />
        <Route path="*" component={ Home } />
      </Switch>
      <Splash />
    </State>
  </BrowserRouter>
)
