import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Summary from 'App/components/Summary'
import DatLine from 'App/components/DatLine'

import heroThumb from './futistietaja-hero-thumb.jpg'
import hero from './futistietaja-hero.png'
import photo1Thumb from './wireframe-futistietaja-thumb.jpg'
import photo1 from './wireframe-futistietaja.png'
import photo2Thumb from './mockup-mobil-futistietaja-thumb.jpg'
import photo2 from './mockup-mobil-futistietaja.png'
import photo3Thumb from './mockup-ipad-futistietaja-thumb.jpg'
import photo3 from './mockup-ipad-futistietaja.png'
import summary from './futistietaja-summary.svg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#f8f8f8',
        '--color-text-on-accent': '#000',
      }}
    </CssVars>
    <MainTitle>Yle Futistietäjä</MainTitle>
    <SubTitle useAsMetaTitle>Playing the beautiful game</SubTitle>
    <DatLine />
    <Keywords>UI Design, UX Design</Keywords>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Smartly hero" />
    <Chapter>
      <h4>Setting the scene</h4>
      <p>
        Unless you were living under a rock in summer 2018, you probably noticed
        that the FIFA World Cup in Russia captured the attention of hundreds of
        millions of TV viewers around the world. Yle, Finland's national public
        broadcaster, would be showing all the games along with a host of online
        content during the tournament aimed at engaging viewers at home.

      </p>
    </Chapter>
    <Image thumbSrc={ photo1Thumb } src={ photo1 } alt="Smartly photo stock 1" />
    <Chapter>
      <h4>The bright idea</h4>
      <p>
        What if instead of scribbling down their predictions on paper or in a
        homemade spreadsheet shared in a company chat room, friends could more
        easily pitch their wits against each other and engage with the tournament
        by getting together online to predict who would win each game?
      </p>
      <p>
        Since we’d worked together on other similar projects in the past, Yle
        gave us a call to see how our team could help them bring the beautiful
        game to life online by creating a bridge between their TV broadcasts and
        their online content.
      </p>
    </Chapter>
    <Image thumbSrc={ photo2Thumb } src={ photo2 } alt="Smartly photo stock 2" />
    <Chapter>
      <h4>The inevitable challenge</h4>
      <p>
        Time was of the essence with this project as the tournament kick-off was
        approaching fast, so the idea was to create a minimum viable product with
        a great-looking interface as quickly as possible – and that’s exactly
        what we did. Once the game went live, we then faced the additional
        challenge of adding new features and fixes as we went along based on
        user feedback and data. No easy task – especially when the potential
        audience was huge – but nothing we couldn’t handle.
      </p>
    </Chapter>
    <Chapter>
      <h4>Our hands-on solution</h4>
      <p>
        We designed and developed a game – Futistietäjä – from scratch in which
        people could predict the outcomes of the matches. To make it even more
        interactive, we also developed a feature where friends could see each
        other’s rankings and predictions – just to keep up the competitive spirit.
      </p>
      <p>
        Instead of design and development being in different silos we created
        a unified team to speed up the process and ensure the best possible end
        result. Wireframes were done in intensive collaboration to minimize the
        iteration rounds. This meant that as soon as the wireframes were
        finalized the designer could get started on crafting the visuals and
        the developer could start building the code.
      </p>
    </Chapter>
      <Image thumbSrc={ photo3Thumb } src={ photo3 } alt="Smartly photo stock 3" />
    <Chapter>
      <h4>So how did it go?</h4>
      <p>
        Yle loved the game so much that they asked us to make an accompanying
        football-related quiz to further boost engagement around the FIFA World
        Cup content on their sports websites. Since we’d already created
        one – Kisapähkinä – for the 2018 Winter Olympics, we were pretty
        confident that we could pull it off again. So we put together a new quiz,
        with visuals, that would run for the entire tournament. Here’s where we
        scored the winning goal – Yle thought the visuals were so good that they
        used them to create a TV commercial to further raise the profile of the quiz.
      </p>
    </Chapter>
    <Chapter>
      <h4>Success that speaks for itself</h4>
      <p>
        Not only are Futistietäjä and Kisapähkinä among the most consumed content
        on Yle’s websites in 2018 so far, but Futistietäjä is the second most
        consumed online content in Yle’s  history.
      </p>
    </Chapter>
    <Summary>
      <Image src={ summary } alt="" />
      <h4>The challenge</h4>
      <p>
        Create an engaging online prediction game and quiz to leverage the hype
        around the FIFA World Cup 2018 and engage audiences at home with Yle’s
        related online content in the process.
      </p>
      <h4>The result</h4>
      <p>
        Two hugely successful games that brought people together in friendly
        competition through their shared love of football, plus content that
        broke new records in terms of audience engagement.
      </p>
    </Summary>
  </Fragment>
)
