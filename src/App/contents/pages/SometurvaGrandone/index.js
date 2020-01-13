import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import BlockQuote from 'App/components/BlockQuote'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Summary from 'App/components/Summary'
import DatLine from 'App/components/DatLine'
import Video from 'App/components/Video'

import photo1 from './someturva-1.jpg'
import photo2 from './someturva-2.jpg'
import photo3 from './someturva-3.jpg'
import photo4 from './someturva-4.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <h2>New era of bullying - Cyberbullying </h2>
      <p>
        What would you do if you were bullied on social media? It’s upsetting
        for anyone, but can be particularly traumatizing for young people, who
        often don’t know how to report crimes faced online – or even if they’re
        crimes at all.
      </p>
      <p>
        Nearly half of social media users have encountered online bullying or
        harassment.  Anyone can face something inappropriate in social media.
        SomeBuddy is a service offering low-threshold legal assistance for
        problems such as bullying, harassment, or the dissemination of private
        data. SomeBuddy has a heart of AI but the kindness and empathy skills of
        a human.
      </p>
    <BlockQuote by="Hailee Lamberth">
        This in-school bullying continued through online platforms and forums.
        They’d often tell herself to kill herself because of her condition.

        At one point, a classmate left her a voicemail saying “I hope you died.”
        Hailee couldn’t take the bullying anymore and killed herself.
    </BlockQuote>
    </Chapter>
    <ImageRow>
      <Image src={ photo4 } alt="Someturva app" />
    </ImageRow>
    <Chapter>
      <h2>Everything you need in one kit</h2>
      <p>
        <b>Legal assessment</b> <br/>
        53% of people asking for help from SomeBuddy have been identified as
        victims of crime.
      </p>
      <p>
        <b>Psychological first-aid</b> <br/>
        85% of the victims of sexual crimes tell SomeBuddy that they’ve committed
        self-harm.
      </p>
      <p>
        <b>Tips for social media</b> <br/>
        91% of kids want to be social media celebrities! Sometimes a bit of
        protection from strangers is needed though.
      </p>
      <p>
        <b>Action plan</b> <br/>
        SomeBuddy helps by giving you concrete step-by-step instructions on how
        to solve your case.
      </p>
    </Chapter>
    <ImageRow>
      <Image src={ photo1 } alt="Someturva app" />
      <Image src={ photo2 } alt="Someturva app" />
    </ImageRow>
    <Chapter>
      <h2>How SomeBuddy works</h2>
      <p>
        <b>1. Sign in</b> <br/>
      </p>
      <p>
        <b>2. Fill in your case</b> <br/>
      </p>
      <p>
        <b>3. SomeBuddy makes the assessment</b> <br/>
      </p>
      <p>
        <b>4. You'll receive SomeBuddy's answer</b> <br/>
      </p>
    </Chapter>
    <ImageRow>
      <Image src={ photo3 } alt="Someturva app" />
    </ImageRow>
    <Chapter>
    <h2>Approach</h2>
    <p>
      Social psychologists Minttu Salminen, Suvi Uski, and Jenny Rontu shared
      a passionate desire to help young people and improve their rights. The
      idea of a service that could help people, especially younger people, to
      report crimes faced online was dreamed up two years ago.
    </p>
    <p>
      In 2017, it was time to roll up sleeves and start building the prototype
      and getting validation from users on both the need and the solution. This
      would then let us develop the product iteratively in fast cycles.
      The validation work was completed in spring 2018, when the founding team
      had everything they needed to continue building Someturva.

      The service was launched in fall 2019 and is now helping young people in
      Finland and Sweden.
    </p>
      <h2>Success that speaks for itself</h2>
      <p>
        So far, the access code for the service has been given to
        18,000 youngsters and the first reports have been received. SomeBuddy is
        expanding its scope and looking to launch outside of Finland and Sweden
        in the near future.
      </p>
    </Chapter>
    <Video src="https://player.vimeo.com/external/373123756.hd.mp4?s=df9edf8ebcd1410bca9d4743c2f1221c115fd73f&profile_id=174" />
    <Summary>
      <h2>UX Design</h2>
      <p>
        Wunderdog
      </p>
      <h2>Development</h2>
      <p>
        Wunderdog
      </p>
      <h2>Client</h2>
      <p>
        SomeBuddy
      </p>
      <h2>Categories</h2>
      <p>
        Paras palvelumuotoilu, Paras Design
      </p>
    </Summary>
  </Fragment>
)
