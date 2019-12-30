import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import Indent from 'App/components/Indent'
import Chapter from 'App/components/Chapter'
import Summary from 'App/components/Summary'
import DatLine from 'App/components/DatLine'

import mockup from './pexraytech-mockup.png'


export default () => (
  <Fragment>
    <Chapter>
      <h2>Setting the scene</h2>
      <p>
        Finnish high-tech start-up Pexraytech develops portable X-ray systems
        for security, drug search, and counter-terrorism applications.
      </p>
    </Chapter>
    <Chapter>
      <h2>The bright idea</h2>
      <p>
        What if Pexraytech’s state-of-the-art portable X-ray system could be
        used no matter what operating system the customer decides on?
      </p>
      <p>
        To do this, Pexraytech needed a user interface for multiple platforms.
      </p>
    </Chapter>
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
        Pexraytech had a strict budget and time frame for the project –
        everything needed to be done and dusted in just seven working weeks.
        The technical requirements were that the software must be reusable
        across different operating systems using mainstream technology that
        could be further developed easily.
      </p>
    </Chapter>
    <Image src={ mockup } alt="x-ray mockup photo" />
    <Chapter>
      <h2>Our smooth, step-by-step solution</h2>
      <p>
        We started off by introducing continuous integration and delivery
        practices to make bug fixes and new features quick, easy, and safe to
        release. Then we focused on how the user interface would communicate
        with the portable X-ray system, as well as developing the image
        manipulation systems and perfecting other user-interface features.
      </p>
      <p>
        Because of the short timescale we used a simple Kanban approach,
        breaking tasks down into manageable pieces with clear and effective
        prioritization.
      </p>
    </Chapter>
    <Chapter>
      <h2>So how did it go?</h2>
      <p>
        Our working methods made project progression efficient and easily
        trackable, while physically working at the customer’s office meant
        communication ran like clockwork. The team managed to finish the
        project successfully within the agreed time frame, meeting all quality
        requirements.
      </p>
    </Chapter>
    <Chapter>
      <h2>Success that speaks for itself</h2>
      <p>
        Our in-depth understanding of what needed to be done and when helped us
        to plan and schedule our work efficiently to meet all the customer’s
        goals, while clear lines of communication made sure nothing slipped
        through the cracks. It doesn’t take X-ray vision to see it was a
        success for everyone involved.
      </p>
    </Chapter>
    <Summary>
      <h2>The challenge</h2>
      <p>
        Develop a user interface for an innovative portable X-ray system
        suitable for multiple platforms.
      </p>
      <h2>The result</h2>
      <p>
        We successfully delivered on time and on budget, helping Pexraytech
        ensure their product was launch-ready when they needed it to be.
      </p>
    </Summary>
  </Fragment>
)