import './index.css'
import React, { Fragment } from 'react'
import Highlight from 'react-highlight'
import HubspotForm from 'react-hubspot-form'
import CssVars from 'App/components/CssVars'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import DatLine from 'App/components/DatLine'
import YoutubeVideo from 'App/components/YoutubeVideo'
import PahkinaCustomHeader from './PahkinaCustomHeader'
import PahkinaCustomHero from './PahkinaCustomHero'

import Countdown from 'react-countdown-now'

export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#444444',
        '--color-text-on-accent': '#ffffff',
        '--color-background': '#000',
        '--text-on-background': '#fff',
        '--chapter-large-device-display': 'block',
        '--body-font-size': '16px',
        '--text-content-max-width': '900px'
      }}
    </CssVars>
    <PahkinaCustomHeader/>
    <PahkinaCustomHero/>

    <Chapter>
      <div style={{fontSize: '4em', textAlign: 'center'}}>
        <Countdown date={1559519999000} />
      </div>
    </Chapter>

    <Chapter>
      <p>
      Time to give our brain a puzzle before the summer holidays! Our doggos
      have once again put their minds and hearts into developing a
      coding challenge for you. Have fun with it!
      </p>
    </Chapter>
    <Chapter>
      <h4>The problem</h4>
      <p>
      The dogs have developed a new programming language to advance their
      control over the world! We have obtained some samples of their source
      code and have deciphered most of it but can't put it all together.
      This is where your special skills are needed: write an interpreter
      and run the very important code to reveal its secrets!
      </p>
    </Chapter>
    <Chapter>
      <h4>This is what we know</h4>
      <Highlight className='plaintext'>
{`lassie AWOO 5
luna AWOO 6
bailey AWOO lassie WOOF luna
bailey`}
      </Highlight>
      <p>
      Result is 11
      </p>
    </Chapter>
    <Chapter>
      <Highlight className='plaintext'>
{`roi AWOO 5
RUF? roi YAP 2 VUH
    roi AWOO roi ARF 3
ROWH
    roi AWOO roi WOOF 100
ARRUF
roi`}
      </Highlight>
      <p>
      Result is 15
      </p>
    </Chapter>
    <Chapter>
    <Highlight className='plaintext'>
{`roi AWOO 5
RUF? roi YIP 2 VUH
  roi AWOO roi ARF 3
ROWH
  roi AWOO roi WOOF 100
ARRUF
roi`}
    </Highlight>
    <p>
    result is 105
    </p>
    </Chapter>
    <Chapter>
    <Highlight className='plaintext'>
{`quark AWOO 6 BARK 2
gromit AWOO 5
milo AWOO 0
GRRR milo YIP gromit BOW
    quark AWOO quark WOOF 3
    milo AWOO milo WOOF 1
BORF
quark`}
    </Highlight>
    <p>
    result is 19
    </p>
    </Chapter>
    <Chapter>
      <h4>The task</h4>
      <p>
        Please run this very important code and return the result and your
        interpreter source code to us as soon as possible:
      </p>
      <Highlight className='plaintext'>
{`samantha AWOO 1
hooch AWOO 500
einstein AWOO 10
fuji AWOO 0
GRRR fuji YIP hooch BOW
    samantha AWOO samantha WOOF 3
    RUF? samantha YAP 100 VUH
      samantha AWOO samantha BARK 1
    ROWH
      einstein AWOO einstein WOOF 1
      samantha AWOO samantha ARF einstein
    ARRUF
    fuji AWOO fuji WOOF 1
BORF
GRRR fuji YAP 0 BOW
    samantha AWOO samantha WOOF 375
    fuji AWOO fuji BARK 3
BORF
samantha`}
      </Highlight>
      <p>
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
        Submit your via the form below at latest June 7th 2019.
      </li>
      <li>
        The winner is chosen by our Wunderdog jury and he/she will be awarded
        with Withings Steel activity watch.
      </li>
      </ul>
      <p>

      </p>

    </Chapter>

    <Chapter>
      <h4>Submit your answer here!</h4>
      <HubspotForm
        portalId='1704241'
        formId='7f85dd29-488a-473c-9c65-bf74b4daf245'
        css=''
      />
    </Chapter>

    <Chapter>
    <h4>
    Share your thoughts and spread the challenge #Wundernut
    </h4>
    </Chapter>


  </Fragment>
)
