import React, { Fragment } from 'react'

import Image from '../../../components/Image'
import ImageRow from '../../../components/ImageRow'
import Chapter from '../../../components/Chapter'
import Summary from '../../../components/Summary'
import BlockQuote from '../../../components/BlockQuote'
import SubTitle from '../../../components/SubTitle'
import photo1 from './grib-photo1.jpg'
import photo2 from './grib-photo2.jpg'
import photo3 from './grib-photo3.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <h2>Our multi-dimensional solution</h2>
      <p>
        When we first talked with Grib, we soon agreed that it would only make
        sense to cooperate if we were adding value to both Grib and its users.
        Being on the same page made it easy to continue our discussions. Our
        goal was not to just fix one thing and then leave Grib with the rest —
        we wanted to ensure that their story would be kickstarted properly.
      </p>
      <p>
        Since Grib didn't have any dedicated technical person in-house, we took
        on the challenge of providing a CTO for them. We analyzed the state of
        Grib's business, their existing technological capabilities and the needs
        of their users and customers. This made it much easier to get a good
        understanding of our next steps.
      </p>
      <p>
        Our first steps included prioritizing key tasks within the organization
        in order to make quick and meaningful improvements. We helped Grib with
        their recruitment process, finding talented and competent individuals to
        join their team and allowing Grib to focus on finding those with the
        right passion for the job.
      </p>
      <BlockQuote by="Pouria Kay, Chief Executive Officer of Grib">
        We found the cooperation professional and everyone we worked with at
        Wunderdog to be dependable and accountable.
      </BlockQuote>
    </Chapter>
    <Chapter>
      <h2>The bright idea</h2>
      <p>
        Grib was founded after winning the Summer of Startups in 2015 with their
        concept of combining 3D technology with computer vision and augmented
        reality. Their aim was to develop a user-friendly app that uses
        AR technology to enable 3D design in the real world, making it as
        easy and enjoyable as possible to get creative with 3D modeling.
      </p>
    </Chapter>
    <Image src={ photo1 } alt="Working at Grib" />
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
        While bringing this concept to life, challenges with the architecture
        made it hard to prioritize software development, so the backlog
        of development tasks was increasing every day.
        Grib started to look for a reliable partner to help.
      </p>
    </Chapter>
    <Chapter>
      <h2>How did it go?</h2>
      <p>
        The cooperation went very well, helping Grib to pick up the pace and
        concentrate on their business while we took responsibility for
        ensuring delivery to customers, clarifying and increasing the pace of
        software development, and making recruitment easier.
      </p>
    </Chapter>
    <ImageRow>
      <Image src={ photo2 } alt="Testing Grib3D app" />
      <Image src={ photo3 } alt="Testing Grib3D app 2" />
    </ImageRow>
    <Chapter>
      <h2>Success that speaks for itself</h2>
      <p>
      Many schools in Finland have found Grib to be a valuable tool for
      sketching since it gives users a sense of the scale, size, and form of
      their 3D models, by putting them in context in an AR environment.
      Even first-time users can create designs in a matter of minutes,
      rather than the days it would take without the app.
      </p>
      <p>
      <i>
      Interested? Let's get creative.
      </i>
      </p>
      <p>
      <i>
      Antero Törhönen, Business Development Lead
      <SubTitle>
        <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a>
      </SubTitle>
      +358505281678
      </i>
      </p>
      </Chapter>
    <Summary>
      <h2>The challenge</h2>
      <p>
        While bringing the Grib concept to life, challenges with the
        architecture made it hard to prioritize software development,
        so the backlog of development tasks was increasing every day.
      </p>
      <h2>The result</h2>
      <p>
        We helped Grib to pick up the pace and
        concentrate on their business while we took responsibility for
        ensuring delivery to customers, clarifying and increasing the pace of
        software development, and making recruitment easier.
        </p>
        <p>
        Grib won the Best Creative Industry of the Year category
        at the Nordic Startup Awards in December 2019!
      </p>
    </Summary>

  </Fragment>
)
