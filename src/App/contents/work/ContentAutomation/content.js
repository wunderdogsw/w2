import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Summary from 'App/components/Summary'
import DatLine from 'App/components/DatLine'
import BlockQuote from 'App/components/BlockQuote'
import Stats from 'App/components/Stats'
import Indent from 'App/components/Indent'

import photo1 from './news-app-wunderdog.jpg'
import {JasperVanGhemen} from '../../contactSalesFaces'
import CallToAction from "../../../components/CallToAction"
import {CaseContactInfo} from "../../callToActions"

export default () => (
  <Fragment>
    <Chapter>
      <h2>Creating value through better tracking </h2>
      <p>
      Our customer, one of the leading companies in the
      content automation field in Germany, has a long background working with major
      global publishers and corporate enterprises needing implementations of new
      technologies into their organisations. They reached us because their tech
      department was having issues with a tool that manages publication content.
      The tool was using deprecated tech and the company was no longer able to
      maintain it. Since our customer’s business is mainly directed towards
      digital publishing and media, they saw the relevance of keeping the tool
      application. We redesigned this existing product with newer, updated tech
      so our customer could keep tracking news stories in the most cost-effective
      way.
      </p>
      </Chapter>
      <Chapter>
      <BlockQuote by=" ">
      We created
      a strong foundation our customer’s department can build on. Thus we
      ensured the continuity of the project and set a good base for its success
      </BlockQuote>
    </Chapter>
    <Chapter>
      <h2>The bright idea</h2>
      <p>
      The tech department of our customer reached out for our help. The tool had
      been written 10 years ago in PHP and no one in their internal team knew
      exactly what the functionality was. On top of that, it was very difficult
      to maintain. After studying the tool carefully, we suggested writing the
      project from scratch. They needed developers with strong frontend skills
      who could do this and this is exactly what we offered. Our first step was
      entering the planning stage for the new tool’s replica and our task
      consisted mainly in setting the frontend using Angular.
      </p>
    </Chapter>
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
      Before executing a client project it is important to clarify the
      requirements, making sure the customers know exactly what they need.
      In the first phase of the project we asked lots of questions about the
      product. This made both our customer, and the publishers they work with,
      realize they first had to replan the project. We shortly delayed its start
      and focused instead on drawing a deeper understanding of how to make it
      useful for all interested parties, be it our customer, the media,
      publishers or editors.
      </p>
      <p>
      After closing questions and researching optimal solutions, we organized a
      planning and estimation meeting where we broke down the tasks for the
      first phase of the project. This first phase consisted of building the UI,
      including all different views and components. After this was done, our
      customer would show it to the publishers and ask for approval or needed
      changes before proceeding with the functionality. After setting the base,
      the continuity of the project was left to our customer’s developers.
      </p>
      </Chapter>
      <Image src={ photo1 } alt="news-app-wunderdog" />
      <Chapter>
      <h2>So how did it go?</h2>
      <p>
      There was great satisfaction in the tickets we managed to create after the
      initial replanning and also how much it progressed once the actual
      development started. Our ticket estimations were accurate and we created
      a strong foundation our customer’s department can build on. Thus we
      ensured the continuity of the project and set a good base for its success.
      </p>
      </Chapter>
    <Summary>
      <h2>The challenge</h2>
      <p>
      Re-writing a customer’s legacy tool for managing publication content.
      </p>
      <h2>The result</h2>
      <p>
      Accurate ticket estimations and the creation of the tool replica to make
      tracking news stories more cost-effective.
      </p>
    </Summary>
    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let's make the future happen.">
        <JasperVanGhemen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
)
