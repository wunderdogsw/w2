import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { State } from 'App/state'
import Splash from 'App/components/Splash'
import Header from 'App/components/Header'
import Home from 'App/routes/Home'
import Case from 'App/routes/Case'
import JoinThePack from 'App/routes/JoinThePack'

export default () => (
  <BrowserRouter>
    <State>
      <Header />
      <Switch>
        <Route path="/case/:content" component={ Case } />
        <Route path="/jointhepack" component={ JoinThePack } />
        <Route path="*" component={ Home } />
      </Switch>
      <Splash />
    </State>
  </BrowserRouter>
)
