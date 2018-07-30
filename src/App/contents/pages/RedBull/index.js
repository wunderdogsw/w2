import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import Chapter from 'App/components/Chapter'
import Summary from 'App/components/Summary'
import DatLine from 'App/components/DatLine'

import heroThumb from './redbull-hero-thumb.jpg'
import hero from './redbull-hero.png'
import mockupThumb from './redbull-mockup-thumb.jpg'
import mockup from './redbull-mockup.png'
import photo1Thumb from './redbull-photo1-thumb.jpg'
import photo1 from './redbull-photo1.png'
import photo2Thumb from './redbull-photo2-thumb.jpg'
import photo2 from './redbull-photo2.png'
import summary from './redbull-summary.svg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#f8f8f8',
        '--color-text-on-accent': '#000',
      }}
    </CssVars>
    <MainTitle>Red Bull</MainTitle>
    <SubTitle useAsMetaTitle>A marketing campaign game in two weeks? Game on.</SubTitle>
    <DatLine />
    <Keywords>UI design, UX design, game design, full-stack development</Keywords>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Redbull hero" />
    <Chapter>
      <h4>Setting the scene</h4>
      <p>
        Picture this: it’s winter 2016 and Red Bull Crashed Ice, an extreme
        winter sport world tour, is about to kick off for its seventh year –
        and it’s bigger and better than ever. The event is ice cross downhill,
        the fastest sport on skates, sending athletes on a high-octane trip on
        a steep downhill track that takes in hairpin twists and turns, high
        drops, and hair-raising gaps, all at speeds of up to 80 km/h.
      </p>
    </Chapter>
    <Image thumbSrc={ photo1Thumb } src={ photo1 } alt="Red Bull race pic" />
    <Chapter>
      <h4>The bright idea</h4>
      <p>
        What if there was an engaging online game that shared the buzz of
        downhill skating and info on the event?
      </p>
      <p>
        Some great video material could be used to really showcase the sport,
        engaging the audience with interesting questions related to its
        (literal) twists and turns. To top it all off, the whole campaign
        could be promoted on Red Bull cans before the event – with one lucky
        player winning an exciting prize!
      </p>
    </Chapter>
    <Chapter>
      <h4>The inevitable challenge</h4>
      <p>
        The event was starting soon so the game needed to be up and running in
        'just a few weeks and available to consumers across a full range of
        devices. It goes without saying that visuals are everything in this
        kind of marketing, so as well as being fun to play the game needed to
        dovetail perfectly with Red Bull’s iconic brand – but with a topping of
        cool Crashed Ice.
      </p>
    </Chapter>
    <Image thumbSrc={ mockupThumb } src={ mockup } alt="Red Bull mockup photo" />
    <Chapter>
      <h4>Our quick-thinking solution</h4>
      <p>
        We built a task force of three team players: one focused on design, one
        on development, and one on simply getting it done. Everyone knew our
        tight constraints and the project priorities: namely creating an
        unforgettable consumer experience. With time most definitely not on our
        side, it was crucial that the team worked as closely with the customer
        as possible, so we packed up our computers and decamped to the Red Bull
        office for two weeks.
      </p>
      <p>
        For those two weeks, iterations were run on a daily basis. The plan was
        to get the first version up and running fast, and then continuously
        improve it until the deadline. It wasn’t always plain sailing, but in
        collaboration with the Red Bull team all the challenges faced were
        tackled and solved in high spirits. And when some special technical
        competence was needed, the team could count on invaluable help from
        other colleagues at Wunderdog.
      </p>
    </Chapter>
    <Chapter>
      <h4>So how did it go?</h4>
      <p>
        The game was launched for the 2017 Crashed Ice event in Finland, with
        customer activation on Red Bull cans. There were some amazing players
        who reached crazy high scores after repeated attempts, and in the end
        the lucky winner was picked from several hundred high scores submitted.
      </p>
      <p>
        From a technology perspective the game worked well, especially
        considering the difficult technical challenge of using videos and
        overlaid content on mobile devices.
      </p>
    </Chapter>
    <Chapter>
      <h4>Success that speaks for itself</h4>
      <p>
        In just two weeks, thanks to the knowledge and experience of our team,
        we achieved a marketing campaign that could easily be modified for
        repeated use. The same technology has since been reused several times
        to run similar campaigns in 2017 and 2018 for Red Bull Crashed Ice in
        Canada, and modified further to run during the Red Bull Soapbox Car
        Race in 2017. Our ice-cool team delivered and then some by getting
        their skates on, taking on an extreme challenge, and crushing it, with
        a success that just keeps on repeating.
      </p>
    </Chapter>
    <Image thumbSrc={ photo2Thumb } src={ photo2 } alt="Red Bull prize pic" />
    <Summary>
      <Image src={ summary } alt="" />
      <h4>The challenge</h4>
      <p>
        Develop an engaging companion game for the Red Bull Crashed Ice extreme
        sport event – in just two weeks.
      </p>
      <h4>The result</h4>
      <p>
        A successful game, launched on time, which has been easily modified for
        repeated use in similar Red Bull campaigns.
      </p>
    </Summary>
  </Fragment>
)
