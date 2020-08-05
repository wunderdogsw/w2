import React, { Fragment } from 'react'

import BlockQuote from '../../../components/BlockQuote'
import Image from '../../../components/Image'
import ImageRow from '../../../components/ImageRow'
import Chapter from '../../../components/Chapter'
import photo2 from './Barona-wunderdog06.jpg'
import photo3 from './Barona-wunderdog02.jpg'
import photo4 from './Barona-wunderdog01.jpg'
import {VilleArponen} from '../../contactSalesFaces'
import CallToAction from "../../../components/CallToAction"
import {CaseContactInfo} from "../../callToActions"
import TransitionLink from '../../../components/TransitionLink'

export default () => (
  <Fragment>
  <Chapter>
      <h2>Our in-house solution</h2>
      <p>
        In order to ease the wage calculation burden at the end of the
        month, we developed a near real-time wage calculation service from scratch -
        because none of the available product options could meet the needs of
        the organization.

        </p>
      <BlockQuote by="Joonas Lyytinen, Business Development Director at Barona Logistiikka Oy">
        It was a pleasure to see how well the software consultants worked together
        with our payroll experts and managed grasp the sometimes byzantine rules
        and regulations of the Finnish collective agreements and employment legislation.
        The new Virtuaalitulkki-system has over the months revealed itself to be
        a real business asset that is enabling us to not only do payroll more efficiently
        but develop new business.
      </BlockQuote>
      </Chapter>
    <ImageRow>
      <Image src={ photo2 } alt="Barona-Wunderdog.jpg" />
      <Image src={ photo3 } alt="BaronaVirtuaalitulkki-wunderdog.jpg" />
    </ImageRow>
    <Chapter>
      <h2>The bright idea</h2>
      <p>
      Typically, wages are calculated at the end of a wage period, resulting in
      a peak in payroll work and delays in forecasting. What if wages were calculated
      in volume in near real-time?
      </p>
      <p>
      The Virtuaalitulkki project took a leap forward by moving to a model of near
      real-time calculation. As a result, costs can be tracked as they accumulate
      and potential errors are addressed as they occur, improving financial planning
      and the quality and speed of payroll services. What previously took days now
      takes hours.
      </p>
      <p>
      Solving the problem at hand with an in-house solution now means the back
      office systems are no longer the bottleneck of developing the business.
      Instead, they are the key drivers.
      </p>
    </Chapter>
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
      Developing a system for calculating wages in near real-time can seem intimidating -
      the rules for calculating wages can be complex and employees expect to receive
      their wages correctly and on time.
      </p>
      <p>
      From day one, the core Virtuaalitulkki team included payroll experts to ensure
      full domain knowledge. Together with the development team, an ever-growing suite
      of automated wage calculation tests were created to ensure that every single
      change is thoroughly tested and validated using the language of payroll.
      </p>
    </Chapter>

    <Image src={ photo4 } alt="BaronaVirtuaalitulkki-wunderdog.jpg" />
    <Chapter>
      <h2>So how did it go?</h2>
      <p>
      Like most projects, once the actual implementation started, Virtuaalitulkki
      needed to adapt to changes in the business ecosystem and emergent needs.
      By including business expertise and decision-making in the core team, the
      project could quickly re-focus and stay strongly aligned with the business
      goals.
      </p>
      <p>
      In the end, the original target of developing an in-house solution for
      real-time wage calculations was met. Additionally, the development model
      of Virtuaalitulkki has enabled continuously developing Virtuaalitulkki to
      meet new types of wages and business requirements beyond the original need.
      On a strategic level, the Virtuaalitulkki model of near real-time transparency
      has proved itself as an alternative to more traditional approaches in fields
      beyond payroll.
      </p>
    </Chapter>

    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let's talk.">
        <VilleArponen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
)
