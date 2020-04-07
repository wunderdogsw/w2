import React, { Fragment } from 'react'

import BlockQuote from '../../../components/BlockQuote'
import Image from '../../../components/Image'
import ImageRow from '../../../components/ImageRow'
import Chapter from '../../../components/Chapter'
import Summary from '../../../components/Summary'
import Video from '../../../components/Video'
import Indent from '../../../components/Indent'
import Stats from '../../../components/Stats'
import photo1 from './Tridify-Hippos-arena.jpg'
import photo2 from './Tridify-view-your-bim1.jpg'
import photo3 from './Tridify-Wunderdog3.jpg'
import {VilleArponen} from '../../contactSalesFaces'
import CallToAction from "../../../components/CallToAction"
import {CaseContactInfo} from "../../callToActions"

export default () => (
  <Fragment>
  <Chapter>
    <h2>Our best-practise solution</h2>
    <p>
      In spring 2019, Wunderdog’s consultants joined Tridify’s development team.
      We helped to improve the product development process and facilitated
      meetings to create more agile ways of working. We also helped the
      development team to use more rigorous code review processes, as well as
      helping build more effective pair-programming practices.
    </p>
    <h2>The bright idea</h2>
    <p>
    Tridify is a software automation company in the AEC (architecture,
    engineering, and construction) space. The company provides a fully
    automated web service to quickly and easily convert, view and share
    your Building Information Models (BIM) through a web link. Tridify was
    established in Finland in 2012, with headquarters in Helsinki and sales
    teams based in Singapore, Dubai, London, and Sydney.
  </p>
  <p>
    What if you could quickly and easily convert, view, and share Building
    Information Models (BIM) through a web link, using a fully automated web
    service? Tridify’s easy-to-use tools enable customers to improve
    productivity and have more time to be creative, opening up design and
    construction processes to a broader base of decision makers, influencers,
    and end users.
  </p>
    <BlockQuote>
    External ideas, experiences, and points of view are sometimes needed to
    freshen up and improve both the development process and the ways of working.
    </BlockQuote>
  </Chapter>
  <ImageRow>
    <Image src={ photo1 } alt="Someturva app" />
    <Image src={ photo2 } alt="Someturva app" />
  </ImageRow>
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
        When a company’s core team is working with the same product for an
        extended period, external ideas, experiences, and points of view are
        sometimes needed to freshen up and improve both the development process
        and the ways of working. Tridify also needed an extra pair of hands to
        accelerate software development.
      </p>
    </Chapter>
    <ImageRow>
      <Image src={ photo3 } alt="Someturva app" />
    </ImageRow>
    <Chapter>
      <h2>So how did it go?</h2>
      <p>
        With the help of Wunderdog, Tridify’s development team is now working
        much more efficiently. And because the work is better structured and
        everyone has clear objectives and roles, working is also more fun for
        everyone involved, with increased employee satisfaction in the
        development team.
      </p>
    </Chapter>
    <Chapter>
      <h2>
        Success that speaks for itself
      </h2>
      <p>
        Thanks to our knowledge of software development best practices, the
        quality and efficiency of work has improved at Tridify:
      </p>
      <p><b>The development process is now more efficient.</b><br /></p>
      <p><b>The code is better, with fewer bugs.</b><br /></p>
      <p><b>The pace of product development has accelerated.</b><br /></p>
    </Chapter>
    <Summary>
      <h2>The challenge</h2>
      <p>
        Tridify needed external ideas, experiences, and points of view to freshen
        up and improve both the development process and the ways of working in
        order to accelerate software development.
      </p>
      <h2>The result</h2>
      <p>
        We helped to improve the product development process and facilitated
        meetings to create more agile ways of working. We also helped the
        development team to use more rigorous code review processes, as well as
        helping build more effective pair-programming practices.
      </p>
    </Summary>
    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let's get agile.">
        <VilleArponen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
)
