import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import DatLine from 'App/components/DatLine'
import YoutubeVideo from 'App/components/YoutubeVideo'
import { PumpumStats } from 'App/contents/stats'
import CallToAction from 'App/components/CallToAction'
import Button from 'App/components/Button'

import heroThumb from './pumpum-hero-thumb.jpg'
import hero from './pumpum-hero.png'
import summary from './smartly-summary.svg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#000',
        '--color-text-on-accent': '#fff',
      }}
    </CssVars>
    <MainTitle>Pumpum&shy;hiihto</MainTitle>
    <SubTitle useAsMetaTitle>Bridgning the gap between TV and the audience</SubTitle>
    <DatLine />
    <Keywords>Categories: Best Design & Best Execution</Keywords>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Smartly.io" />

    <Chapter>
      <h4>The inevitable challenge</h4>
      <p>
        Yle, the Finland’s national public broadcaster, needed to rethink their
        content to engage with the viewers and to bridge the gap between TV and
        the audience. The challenge was to create content for younger audience
        and making TV broadcast more immersive.
      </p>
    </Chapter>
    <YoutubeVideo videoId="3E0IeuA2xmY" />
    <Chapter>
      <h4>Our addictive solution</h4>
      <p>
        The solution is an easy and fast game that would captivate the
        players. The idea itself is simple, but the challenge was in creating
        it in an attractive way to engage players. At the same time, we needed
        to keep in mind that the potential audience was huge, and the game would
        also be played in live studios, so there was no room for bugs
        development-wise
      </p>
      <p>
        We started the design and development from scratch and created
        Pumpumhiihto, a game where the player needs to ski as fast as possible
        to the shooting ranges.
      </p>
      <p>
        The essence of the game lays in its addictive idea and beautiful design.
      </p>
    </Chapter>
    <Stats useAccent>
        <PumpumStats />
    </Stats>
    <Chapter>
      <h4>Project info</h4>
      <p>
        Customer: Yle<br/>
        Design & Development: Wunderdog Oy<br/>
        Cover Art: Brink Helsinki<br/>
        Campaign is still ongoing and will finish on the 24th of March.
      </p>
    </Chapter>
    <CallToAction>
      <h4>Pum Pum Hiihto</h4>
      <p>
        Game is hosted on Yle's site go check it out
      </p>
      <Button to="https://yle.fi/urheilu/3-10531024" outlined >
        Play now
      </Button>
    </CallToAction>
  </Fragment>
)
