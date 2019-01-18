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
import PumPumCustomHero from './PumPumCustomHero'

// import heroThumb from './pumpum-hero-thumb.jpg'
// import hero from './pumpum-hero.png'
import photo1Thumb from './pumpum-photo1-thumb.jpg'
import photo1 from './pumpum-photo1.png'
import photo2Thumb from './pumpum-photo2-thumb.jpg'
import photo2 from './pumpum-photo2.png'



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
    <Keywords>UI Design, UX Design & Development</Keywords>

    <PumPumCustomHero />

    <Chapter>
      <h4>The inevitable challenge</h4>
      <p>
        Yle, the Finland’s national public broadcaster, needed to rethink their
        content to engage with the viewers and to bridge the gap between TV and
        the audience. The challenge was to create content for younger audience
        and making TV broadcast more immersive.
      </p>
    </Chapter>
    <Chapter>
      <h4>Our addictive solution</h4>
      <p>
        The solution is an easy and fast game that would captivate the
        players. The idea itself is simple, but the challenge was in creating
        it in an attractive way to engage players. At the same time, we needed
        to keep in mind that the potential audience was huge, and the game would
        also be played in live studios, so there was no room for bugs
        development-wise.
      </p>
      <p>
        We started the design and development from scratch and created
        Pumpumhiihto, a game where the player needs to ski as fast as possible
        to the shooting ranges and answer to sports-related questions on each range.
      </p>
      <p>
        And the brilliance of the campaign is in its simplicity. Having design
        and development working closely together made sure that the design and
        technology were a perfect fit and nothing needless was done. We were
        able to create something completely customised to fit the ultimate
        campaign purpose of attracting younger audience and bridging the gap
        between TV broadcasts and online content. Pumpumhiihto forms a big part
        of Yle’s new direction of more interactive and multichannel content.
      </p>
    </Chapter>
    <YoutubeVideo videoId="3E0IeuA2xmY" />
    <ImageRow>
      <Image thumbSrc={ photo1Thumb } src={ photo1 } alt="Smartly crew 2" />
      <Image thumbSrc={ photo2Thumb } src={ photo2 } alt="Smartly crew 3" />
    </ImageRow>
    <Stats useAccent>
        <PumpumStats />
    </Stats>
    <Chapter>
      <h4>Project info</h4>
      <p>
        Customer: Yle<br/>
        Design & Development: Wunderdog Oy<br/>
        Cover Art: Brink Helsinki<br/>
        The game was launched at the begging of December 2018. The campaign is
        still ongoing and will finish on the 24th of March.
      </p>
    </Chapter>
    <Chapter>
      <h4>Categories</h4>
      <p>
        Best Design (Paras Design)<br/>
        Best Execution (Paras Toteutus)<br/>
      </p>
    </Chapter>

  </Fragment>
)
