import React, { Fragment } from 'react'

import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import Indent from 'App/components/Indent'
import BlockQuote from 'App/components/BlockQuote'
import photo1 from './wunderdog-finbb-suomenbiopankit.jpg'
import photo2 from './wunderdog-finbb-covid.jpg'
import {AnteroTorhonen} from '../../contactSalesFaces'
import CallToAction from "../../../components/CallToAction"
import {CaseContactInfo} from "../../callToActions"

export default () => (
  <Fragment>
    <Chapter>
      <h2>Our solution</h2>
      <p>
      The key to success is quite often offering tools and services users like
      to use, which in this case most often is done by offering solutions that
      help users to get their job done. We were able to serve all different user
      groups from researchers to local biobanks and FinBB. Working with legacy
      systems and complex data sets present another type of a challenge, but we
      were able to tackle those as well in time and budget.
      </p>
      <p>
      We have created a catalog of samples for researchers to find sample
      availability according to ICD-10 codes based on a range of criteria.
      We also implemented a new homepage for Fingenious and implemented a new –
      from both a design and a technical point of view – interface for
      researchers.
      </p>
    </Chapter>

    <Indent twice><Stats>
      <div>
        <span>10k</span>
        <span>biobank -consents in one week</span>
      </div>
      <div>
        <span>300k+</span>
        <span>consents in total and counting</span>
      </div>
    </Stats></Indent>

<Chapter>
  <BlockQuote by="Our fast work was appreciated. In the words of Mirkka Koivusalo, Scientific and Communications Manager at FinBB">
      Thanks to the professional ability of Wunderdog we have received over 10,000
      biobank consents in one week and have already reached the 300,000 consent
      target. This will help us move future medical studies forward. We highly
      appreciate Wunderdog’s help. A big THANK YOU!
  </BlockQuote>
</Chapter>

  <ImageRow>
    <Image src={ photo1 } alt="FinBB Wunderdog" />
    <Image src={ photo2 } alt="FinBB Wunderdog2" />
  </ImageRow>


    <Chapter>
      <h2>The bright idea</h2>
      <p>
        Finland and its population are a unique platform for academic and medical
        research. The role of FinBB is to harness this opportunity and offer
        researchers the best possible tools for them to be able to conduct
        research on data of the Finnish population. In the end this makes it
        possible to develop the best possible medical care to everyone on our
        planet.
      </p>
    </Chapter>
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
        Finland has a very ambitious national strategy for health improvement.
        The key element in the strategy is to understand that shared health
        information can lead to shared health benefits.
      </p>
      <p>
        As part of this strategy, FinBB is a co-operative that was established to
        commercialize the opportunity of offering Finnish data to medical
        researchers to allow the development of better care, as well as to return
        the proceeds more directly to Finnish healthcare to allow more investments
        for the benefit of Finnish people.
      </p>
      <p>
        In the early fall of 2019, FinBB was looking for a partner to help them
        create a new service to publish a catalog of research samples for
        researchers. The core system, Fingenious, already existed and it was a
        question of adding a new element alongside it.
      </p>
      <p>
        Wunderdog was selected as the development partner. With the solution we
        have built, researchers can now request samples for scientific studies.
        FinBB had no experience in software development or managing a development
        team, so we were given a lot of responsibility to provide them with
        services that were as holistic as possible.
      </p>
      <p>
        Success in the project led to other projects, such as a campaign to gather
        consents. By March 2020, the COVID-19 pandemic was starting to spread in
        Finland. FinBB needed some quick assistance so they could collect consent
        from Finnish citizens for their samples to be used by local biobanks to
        help research new treatments and precautionary procedures. In less than
        two weeks the campaign should be up and running.
      </p>
    </Chapter>
    <Chapter>
      <h2>So how did it go?</h2>
      <p>
        The campaign we created together has been a success! In just one week over
        10,000 people gave consent for their samples to be used, rising to over
        300,000 and counting. The campaign was even endorsed by ex-president
        Tarja Halonen and promoted by several Finnish celebrities.
      </p>
      <p>
        The services for researchers in Fingenious have been recognised as a clear
        leader in the space. This is a very good situation to continue the work
        for better healthcare.
      </p>
    </Chapter>
    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let's talk.">
        <AnteroTorhonen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
)
