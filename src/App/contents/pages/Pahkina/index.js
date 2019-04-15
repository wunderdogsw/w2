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
import YoutubeVideo from 'App/components/YoutubeVideo'

import heroThumb from './pahkina-hero-thumb1.jpg'
import hero from './pahkina-hero.png'
import summary from './smartly-summary.svg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#f7f7f7',
        '--color-text-on-accent': '#000',
      }}
    </CssVars>
    <MainTitle>Wundernut</MainTitle>
    <DatLine />
    <SubTitle useAsMetaTitle>01/2019 Doggolang</SubTitle>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Pahkina" />
    <Chapter>

      <p>
      <h4>The problem</h4>
      The dogs have developed a new programming language to advance their
      control over the world! We have obtained some samples of their source
      code and have deciphered most of it but can't put it all together.
      This is where your special skills are needed: write an interpreter
      and run the very important code to reveal its secrets!
      </p>
    </Chapter>
    <Chapter>
      <h4>This is what we know</h4>
      </Chapter>
      <Chapter>
      <p>
      lassie AWOO 5
      luna AWOO 6
      bailey AWOO lassie WOOF luna
      bailey
      </p>
      <p>
      Result is 11
      </p>
      <Chapter>
      </Chapter>
      <p>
      roi AWOO 5
      RUF? roi YAP 2 VUH
      roi AWOO roi ARF 3
      ROWH
      roi AWOO roi WOOF 100
      ARRUF
      roi
      </p>
      <p>
      Result is 15
      </p>
    </Chapter>
    <Chapter>
      <h4>The task</h4>
      <p>
        Please run this very important code and return the result and your
        interpreter source code to us as soon as possible:Kuva

        Your's truly,
        Leader Of Litter, Cat At Top
      </p>
    </Chapter>

    <Chapter>
      <h4>General rules</h4>

      <ul>
      <li>
        You can use any programming language to solve the problem.
      </li>
      <li>
        The solution must contain the right answer.
      </li>
      <li>
        The winner will be the most elegant solution, decided by the Wundernut
        jury.
      </li>
      <li>
        Performance is a part of elegance.
      </li>
      <li>
      The participant gives Wunderdog the right to publish their source code
      used in the submitted solutions.
      </li>
      <li>
        Submit your via the form below at latest YYYY-MM-DD.
      </li>
      <li>
        The winner is chosen by our Wunderdog jury and he/she will be awarded
        with Nokia activity watch (Tsekkaa oikee nimi ja malli).
      </li>
      </ul>
      <p>

      </p>

    </Chapter>
    <Chapter>
      <h4>Submit your asnwer here!</h4>
      <p>

      </p>
    </Chapter>

    <Summary>
      <Image src={ summary } alt="" />
      <h4>In a nutshell</h4>
      <p>
        Crack the nut. Submit to xx.
      </p>
      <h4>Dates</h4>
      <p>
        Deadline for submitting is xx.xx.xx. Results xx.xx.xx
      </p>
      <h4>Reward</h4>
      <p>
        Nokia watch
      </p>
    </Summary>

  </Fragment>
)
