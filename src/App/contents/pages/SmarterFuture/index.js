import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Indent from 'App/components/Indent'
import Grid from 'App/components/Grid'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import { SeriousStats } from 'App/contents/stats'
import Logos from 'App/components/Logos'
import { Clients, Ecosystem } from 'App/contents/other'
import CssVars from 'App/components/CssVars'
import TransitionLink from 'App/components/TransitionLink'
import SubTitle from 'App/components/SubTitle'
import Video from 'App/components/Video'

import photo1 from './Wunderdog-remote-work.jpg'
import photo2 from './biitti.jpg'
import photo3 from './boogie.jpg'
import photo4 from './abe.jpg'

export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
    <MainTitle narrow>Now is the time to invest in a smarter future.</MainTitle>

    <Image src={ photo1 } alt="Somebuddy app" indent="right" hero/>

    <Chapter>
    <h2>We are currently serving 100% of our customers remotely. Would you also
    like to be served?
    </h2>
      <p>
      Do you have great ideas in your backlog you know are valuable for your
      business, but you haven't yet had the time or resources for?
      </p>
      <SubTitle>
      <p>
      Investing in the future happens now.
      </p>
      <p>
      Contact us for consultancy <a className="noHyphen" href="mailto:hello@wunderdog.fi">hello<span>@</span>wunderdog.fi</a>
      </p>
    </SubTitle>
    </Chapter>

    <Chapter>
      <h2>
        Our services
      </h2>
      <p><b>Software development</b><br />Delivering high-quality digital products & services</p>
      <p><b>Product Analytics</b><br />Understanding and developing how users engage with what we build</p>
      <p><b>Business Design</b><br />Developing, testing and concepting of new businesses</p>
      <p><b>Service and Product Design</b><br />Easy-to-use interfaces to generate great user experiences</p>
      <p><b>Coaching & Team leading</b><br />Agile methods to support smart ways of working</p>
      <p><b>Scoped projects & co-sourcing</b><br />Reliable delivery to accelerate the development process</p>
    </Chapter>

    <Indent twice>
      <Stats useAccent>
        <SeriousStats />
      </Stats>
    </Indent>

    <Chapter>
      <h2>
        We're your partner in turning good ideas into digital reality.
      </h2>
    </Chapter>
    <Indent twice>
      <Logos>
        <Clients />
      </Logos>
    </Indent>

        <Image src={ photo4 } alt="Abe" indent="left" hero/>

    <Chapter>
        <h2>
        Get in touch
        </h2>
        <p>
        <i>
        Antero Törhönen
          <SubTitle>
           <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358505281678
          </i>
        </p>
        <p>
        <i>
        Pirkka Suominen
          <SubTitle>
           <a className="noHyphen" href="mailto:pirkka.suominen@wunderdog.fi">pirkka.suominen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358407551327
          </i>
        </p>
        <p>
        <i>
        Ville Arponen
          <SubTitle>
           <a className="noHyphen" href="mailto:ville.arponen@wunderdog.fi">ville.arponen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358505637955
          </i>
        </p>
    </Chapter>

  </Fragment>
)
