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
import TransitionLink from 'App/components/TransitionLink'

import photo1 from './mieli-photo1.jpg'
import photo2 from './mieli-photo2.jpg'
import photo3 from './mieli-photo3.jpg'
import photo4 from './mieli-photo4.jpg'
import summary from './smartly-summary.svg'


export default () => (
  <Fragment>
    <Chapter>
      <h4>Setting the scene</h4>
      <p>
        The mission of the non-governmental organization Mental Health Finland
        (MIELI) is to support and promote good mental health for every member of
        society. It does this in many ways: encouraging collaboration between
        individuals and their communities, organizing activities, and by
        providing expert services. These services include crisis help and
        assistance via phone, reception, and webchats, as well as suicide
        prevention, consulting, and training of both professionals and
        volunteers. MIELI also sells journals and guidebooks and produces
        brochures and promotional material.
      </p>
    </Chapter>
    <Chapter>
      <h4>The bright idea</h4>
      <p>
        Every action performed by MIELI – such as answering a phone call to
        crisis support or dealing with a reception visit – is documented in
        their internal system to help prepare reports, which are important in
        many ways. Firstly, the data is used for the funding of the association.
        Secondly, the reports are needed when newspapers ask for official data
        regarding mental health – for example if there’s an increase in phone
        calls to crisis support after an incident.
      </p>
    </Chapter>
    <Image thumbSrc={ photo1Thumb } src={ photo1 } alt="Working at Mieli" />
    <Chapter>
      <h4>The inevitable challenge</h4>
      <p>
        MIELI’s current system had come to the end of its life. It was a service
        by an outside provider that had been customized to meet their needs, but
        both the usability and customization opportunities were limited. Several
        features that were needed couldn’t be added due to limitations in the
        system – quite simply, it was time for something new.
      </p>
    </Chapter>
    <Chapter>
      <h4>Our peace-of-mind solution</h4>
      <p>
        We created a new system for MIELI from scratch by rebuilding their old
        one using more modern and flexible technology. To make sure the system
        met all of MIELI’s needs, our first step was to do some research,
        working together with them to answer some essential questions:
      </p>
      <p>
        <ul>
        <li>
          What were the necessary parts of the documentation process for each
          function?
        </li>
        <li>
          Was there anything in the old system that wasn’t actually needed?
        </li>
        <li>
          Which new features should be added?
        </li>
        </ul>
      </p>
      <p>
        Our role was to facilitate and help the decision-making process, then to
        make sure the technology matched what was required. Once we had the
        information we needed, we could find overlaps and synergies between how
        different functions operate in MIELI. These common ways of working
        allowed procedures to be unified in the software.
      </p>
    </Chapter>
    <ImageRow>
      <Image src={ photo2 } alt="Research" />
      <Image src={ photo3 } alt="Mieli crew" />
    </ImageRow>
    <Chapter>
      <h4>So how did it go?</h4>
      <p>
        We were able to simplify and unify MIELI’s processes and add all the
        requested new features to a system that caters directly for the
        organization’s specific needs. We also improved the usability
        significantly, using modern, flexible technology that can be easily
        modified, maintained, and further developed whenever needed.
      </p>
    </Chapter>
    <Chapter>
      <h4>Success that speaks for itself</h4>
      <p>
        MIELI offers many services, meaning the system needed to handle large
        amounts of data – and it does, with easy-to-find information and
        straightforward forms that can be easily accessed round-the-clock by all
        users, from volunteers to professionals. Support for better mental
        health is something we all believe in, so it was great to be able to
        help MIELI in such a practical way.
      </p>
    </Chapter>
    <Image src={ photo4 } alt="Anni" />
    <Chapter>
      <p>
        <i>*Drawing made by our talented <TransitionLink to="https://medium.com/wunderdog-culture/my-work-practice-program-at-wunderdog-anni-3de88d8e345d">
        work practice programmee Anni.</TransitionLink> </i>
      </p>
    </Chapter>
    <Summary>
      <h4>The challenge</h4>
      <p>
        MIELI’s current system had come to the end of its life. It was a service
        by an outside provider that had been customized to meet their needs, but
        both the usability and customization opportunities were limited.
      </p>
      <h4>The result</h4>
      <p>
        We were able to simplify and unify MIELI’s processes and add all the
        requested new features to a new system that caters directly for the
        organization’s specific needs.
      </p>
    </Summary>

  </Fragment>
)
