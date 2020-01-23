import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import BlockQuote from 'App/components/BlockQuote'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import Indent from 'App/components/Indent'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Summary from 'App/components/Summary'
import DatLine from 'App/components/DatLine'
import Video from 'App/components/Video'
import TransitionLink from 'App/components/TransitionLink'
import Stats from 'App/components/Stats'
import { SometurvaStats } from 'App/contents/stats'

import hero from './someturva-hero.jpg'
import photo1 from './someturva-1.jpg'
import photo2 from './someturva-2.jpg'
import photo3 from './someturva-3.jpg'
import photo4 from './someturva-4.jpg'
import photo5 from './someturva-5.jpg'

export default () => (
  <Fragment>
    <MainTitle narrow>Delivering justice for young people online</MainTitle>
    <Image src={ hero } alt="Someturva" indent hero/>
    <Chapter>
      <p>
        SomeBuddy is a mobile application that offers legal services to stop
        bullying on social media. With this application especially youngsters
        seek for help for inappropriate behaciour they face online.
        SomeBuddy is a service offering low-threshold legal assistance for
        problems such as bullying, harassment, or the dissemination of private
        data. SomeBuddy has a heart of AI but the kindness and empathy skills of
        a human.
      </p>
    <BlockQuote by="High school student Riikka, Some Deep Story, Yle">
      Sometimes when I opened Facebook the first 7 posts on my front page
      were posts where people were slagging me off.
    </BlockQuote>
    </Chapter>
    <ImageRow>
      <Image src={ photo4 } alt="Someturva app" />
    </ImageRow>
    <Indent twice>
      <Stats useAccent>
        <SometurvaStats />
      </Stats>
    </Indent>
    <ImageRow>
      <Image src={ photo1 } alt="Someturva app" />
      <Image src={ photo2 } alt="Someturva app" />
    </ImageRow>
    <Chapter>
      <h2>How SomeBuddy works</h2>
      <p>
        <b>Most of the social media crimes are complainant offences, that
        can be dealt with settling.</b> <br/> From a request SomeBuddy can send
        a settling request for the person who commited the crime to allow the
        settling.
      </p>
      <p>
        <b>Occasionally, crimes committed on social media can’t be settled,
        like sex offends.</b> <br/> In these cases SomeBuddy contacts
        the victim and advises them in detail on how to proceed with the
        matter.
      </p>
      <p>
        <b>SomeBuddy helps with reporting the crime to parents.</b> <br/>
        Victims might often feel ashamed or guilty, which stops them from
        asking help from their parents. SomeBuddy helps by creating a
        personalized letter to parents. The letter tells what
        the victim has suffered from and how to proceed.
      </p>
      <p>
        <b>If the case does not fill the characteristics of a crime,
        they are still provided emotional support, suggestions how to
        proceed with the case and tips for social media security settings.</b> <br/>
        In every case, SomeBuddy is there to support the youngster.
        Psychological help is available through the service.
      </p>
    </Chapter>
    <ImageRow>
      <Image src={ photo3 } alt="Someturva app" />
    </ImageRow>
    <Chapter>
    <h2>So far 18000 youngsters have access to the service</h2>
    <p>
        Somebuddy has helped over 1000 people in solving the crimes they
        have reported.
    </p>
    </Chapter>
    <Video src="https://player.vimeo.com/external/373123756.hd.mp4?s=df9edf8ebcd1410bca9d4743c2f1221c115fd73f&profile_id=174" />
    <Chapter>
      <h2>
        In November 2019, the King of Sweden invited Suvi Uski, one of the
        bright minds behind SomeBuddy, to discuss how to improve the safety
        of children on social media
      </h2>
      <p>
        <b>UX Design:</b> Wunderdog<br/>
        <b>Development:</b> Wunderdog<br/>
        <b>Client:</b> SomeBuddy<br/>
        <b>Categories:</b> Best service design, Best design
      </p>
    </Chapter>
  </Fragment>
)
