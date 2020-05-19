import React, { Fragment } from 'react'

import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import Indent from 'App/components/Indent'
import BlockQuote from 'App/components/BlockQuote'
import photo1 from './annatkoluvan-finbb-wunderdog-covid.jpg'
import photo2 from './annatkoluvan-wunderdog-covid.jpg'
import {AnteroTorhonen} from '../../contactSalesFaces'
import CallToAction from "../../../components/CallToAction"
import {CaseContactInfo} from "../../callToActions"

export default () => (
  <Fragment>
    <Chapter>
      <h2>Our solution</h2>
      <p>
      We quickly rolled out a campaign site to allow Finnish citizens to give
      consent for their samples to be used by their local biobank in the midst
      of a pandemic. In order to handle large amounts of traffic, a build
      process was set up using webhooks so that whenever content is updated in
      Prismic or the bitbucket repository, we build a new static build on
      Netlify, which acts as a content distribution network.
      </p>
      </Chapter>

      <Indent twice><Stats>
        <div>
          <span>10k</span>
          <span>biobank -consents in one week</span>
        </div>
        <div>
          <span>300k</span>
          <span>consents in total and counting</span>
        </div>
      </Stats></Indent>

      <Chapter>
      <BlockQuote by="Mirkka Koivusalo, Scientific and Communications Manager at FinBB">
        Thanks to the professional ability of Wunderdog we have received over
        10,000 biobank consents in one week and have already reached the 300,000
        consent target. This will help us move future medical studies forward.
        We highly appreciate Wunderdog’s help. A big THANK YOU!
      </BlockQuote>
    </Chapter>

    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
      In the early fall of 2019, FinBB selected us to be their partner to
      develop the web-facing parts of their Fingenious platform, a service that
      researchers can use to request samples for scientific studies. The
      technical debt of the existing platform had been piling up for the last
      few years and developing new features seemed almost impossible.
      </p>
      <p>
      FinBB had no experience in software development or managing a development
      team, so we were given a lot of responsibility to provide them with
      services that were as holistic as possible.
      </p>
      <p>
      By March 2020, the COVID-19 pandemic was starting to spread in Finland.
      FinBB needed some quick assistance so they could collect consent from
      Finnish citizens for their samples to be used by local biobanks to help
      research new treatments and precautionary procedures. In less than two
      weeks the campaign should be up and running – and other projects were
      ongoing too.
      </p>
    </Chapter>

    <ImageRow>
      <Image src={ photo1 } alt="Annatko Luvan Wunderdog" />
      <Image src={ photo2 } alt="Annatko Luvan Covid-19 Wunderdog" />
    </ImageRow>

    <Chapter>
      <h2>So how did it go?</h2>
      <p>
      The campaign we created together has been a success! In just one week over
      10,000 people gave consent for their samples to be used, rising to over
      300,000 and counting. The campaign was even endorsed by ex-president
      Tarja Halonen and promoted by several Finnish celebrities.
      </p>
      <p>
      In our other work for FinBB we have created a catalog of blood samples for
      researchers to find sample availability according to ICD-10 codes based on
      a range of criteria. We also implemented a new homepage for Fingenious and
      implemented a new – from both a design and a technical point of view –
      interface for researchers.
      </p>
      <p>
      FinBB’s strong industry knowledge and Wunderdog’s extensive technology and
      software development know-how have helped to forge a solid partnership that
      will continue far into the future.
      </p>
    </Chapter>
    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let's talk.">
        <AnteroTorhonen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
)
