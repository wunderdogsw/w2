import './index.css'
import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import SubTitle from 'App/components/SubTitle'
import Chapter from 'App/components/Chapter'
import PingPongCustomHeader from './PingPongCustomHeader'
import PingPongCustomHero from './PingPongCustomHero'
import HubspotForm from 'react-hubspot-form'

export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-background': '#182C3B',
        '--color-accent': 'blue',
        '--text-on-background': '#86B2D3',
        '--color-text-on-background': '#0F1F2B',
        '--color-footer': '#182C3B',
      }}
    </CssVars>

    <PingPongCustomHeader/>
    <PingPongCustomHero />

    <SubTitle alt narrow>
      All the tech companies in Helsinki, this one’s for you!<br/><br/>
      Our passion for table tennis is real, and we’ve heard rumours that there are other ping pong lovers too. We are organizing a very first Table Tennis Tournament between the tech companies in Helsinki area to clear up who really owns the game. At least in 2019! So pick your team, sharpen your strategy and be ready for the battle!
    </SubTitle>

    <Chapter>
      <h4>Tournament rules</h4>
      <p>
        The Tournament will be played in teams. In each team, there shall be 4 players.
      </p>
      <p>
        The points of every individual game shall be added together and the teams are ranked by the team score.
      </p>
      <p>
        The tournament consists of qualification rounds, quarterfinals, semifinals and the final.
      </p>
      <p>
        The team members shall be employees of the same company.
      </p>
    </Chapter>

    <Chapter>
      <h4>General information</h4>
      <p>
        You should register here before [[ INSERT LAST DAY TO SIGN IN HERE ]].
      </p>
      <p>
        The tournament takes place at [[ INSERT DAY OF TOURNAMENT ]]. The location of the tournament is at Wuffice headquarters: Mikonkatu 13 A, 00100 Helsinki. After the Tournament we will have the Sauna ready for you! Snacks & refreshments are provided.
      </p>
    </Chapter>

    <Chapter>
      <h4>Register</h4>
      <HubspotForm
        portalId='1704241'
        formId='e592aa26-0982-4e20-a33e-f70a791e0ce4'
        css=''
      />
    </Chapter>
  </Fragment>
)
