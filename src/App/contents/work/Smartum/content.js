import React, { Fragment } from 'react'

import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import Indent from 'App/components/Indent'
import BlockQuote from 'App/components/BlockQuote'
import photo1 from './smartum-sports.jpg'
import photo2 from './smartum-restaurants.jpg'
import {AnteroTorhonen} from '../../contactSalesFaces'
import CallToAction from "../../../components/CallToAction"
import {CaseContactInfo} from "../../callToActions"

export default () => (
  <Fragment>
    <Chapter>
      <h2>Our solution</h2>
      <p>
      We created a minimum viable product (MVP) web application and supporting
      back-end for employers to manage employee benefits.
      </p>
      <p>
      The new system is post-paid, which has the advantage that employees can
      be enrolled at any time and employers benefit from a simple monthly
      invoice that shows exactly what has been spent. Employees have a single
      balance that can be used for any benefit, taking into account any
      applicable taxation rules. Employees will also be able to see where
      they’ve used their benefits, how much they’ve used, and the remaining
      balance.
      </p>
    </Chapter>

    <Indent twice><Stats>
      <div>
        <span>10/10</span>
        <span>this was the first project for Smartum that was on schedule,
        thanks to our developers</span>
      </div>
    </Stats></Indent>

<Chapter>
  <BlockQuote by="Project Manager at Smartum">
      I’m so glad to see how talented and professional you all are! We’re
      expecting great things going forward – and as you said in our retro, it
      shows the fantastic collaboration you guys have with the developers.
  </BlockQuote>
</Chapter>

    <Image src={ photo1 } alt="Smartum Wunderdog" />

    <Chapter>
      <h2>The bright idea</h2>
      <p>
      What if managing employee benefits could be made simpler – for both
      employers and employees?
      </p>
      <p>
      Smartum already had an employee benefit system, but it was not
      particularly flexible – all benefits had to be pre-paid and they were
      organized into separate benefit-specific balances. The goal was to create
      an MVP that would enable pilot customers to manage benefits more
      efficiently in a post-paid system.
      </p>
    </Chapter>

    <Chapter>
      <h2>So how did it go?</h2>
      <p>
      The project was finished on schedule even though MVP testing was slightly
      delayed due to a few integration problems with existing systems. We got
      very good feedback from Smartum about our performance, and they liked our
      presentation and general attitude in the pre-project activities.
      </p>
      <p>
      Even though we didn't have any Go experience, we succeeded in learning
      the language from Smartum’s own Go developer and using it effectively.
      We also developed how this kind of onboarding could happen in future,
      improving knowledge transfer for other projects.
      </p>
      <p>
      We really enjoyed working with Smartum – it was so much fun, the general
      atmosphere was nice, and the people were friendly. During the project we
      hung out together during lunch and in some after-work activities, as well
      as having a couple of days working in the Wuffice together. This created
      a good atmosphere among everyone involved.
      </p>
    </Chapter>

  <Image src={ photo2 } alt="Smartum Wunderdog" />


    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let's talk.">
        <AnteroTorhonen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
)
