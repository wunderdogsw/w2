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
import BlockQuote from 'App/components/BlockQuote'
import Stats from 'App/components/Stats'
import Indent from 'App/components/Indent'
import TransitionLink from 'App/components/TransitionLink'

import photo1 from './rahamylly-photo1.jpg'
import photo2 from './rahamylly-photo2.jpg'


export default () => (
  <Fragment>
    <Chapter>
      <h2>Our investible solution</h2>
      <p>
      Just before Christmas 2016, Rahamylly’s team combined forces with
      Wunderdog to begin work on shaping a novel crowdfunding platform.
      Together we started working on two tracks simultaneously:
      </p>
      <p>
      <b>1 Exploring how the platform should look and work for both investors
      and entrepreneurs.</b> The goal was nothing less than to make a complex
      platform to feel extremely simple and intuitive.
      </p>
      <p>
      <b>2 Investigating the different ways in which the platform engine
      could be built.</b> What off-the-shelf solutions are available and what
      is their quality like? Do they have good APIs? What could we build
      ourselves?
      </p>
      <p>
      By the time January arrived, we were ready to start the platform
      implementation work.
      </p>
      <BlockQuote by="Markus Neimo, CEO of Rahamylly">
      We were impressed by how the Wunderdog team really took the lead on
      the technology and genuinely kept the success of Rahamylly as their
      first priority.
      </BlockQuote>
    </Chapter>
    <Indent twice><Stats>
      <div>
        <span>100+</span>
        <span>Finnish companies as customers</span>
      </div>
      <div>
        <span>1000+</span>
        <span>Citizens that have invested</span>
      </div>
    </Stats></Indent>
    <Chapter>
      <h2>The bright idea</h2>
      <p>
      What if there was a way for anyone to invest in a Finnish company’s
      growth initiatives? A novel crowdfunding platform that would benefit all
      parties: companies would get the capital they needed to grow, while people
      like you or I could invest and, hopefully, make a profit.
      </p>
      <p>
      Rahamylly was founded in December 2016 with the aim of developing a
      crowdfunding platform to do just that.
      </p>
    </Chapter>
    <Image src={ photo1 } alt="Rahamylly website" />
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
      To make the idea work, it was essential for very small investments to
      be possible. It also had to be extremely easy to invest. On the other
      side of the equation, the application process needed to be as simple as
      possible for companies, with no additional worries about having a large
      number of investors.
      </p>
      <p>
      The only way to achieve these goals was using a digital platform
      where most of the work happened automatically. It was clear from the
      beginning that this would be a challenge to build both in terms of
      service design and technical architecture. Without a technical founder,
      the Rahamylly team looked to Wunderdog to help make the platform a
      reality.
      </p>
      </Chapter>
      <Image src={ photo2 } alt="Rahamylly website2" />
      <Chapter>
      <h2>Success that speaks for itself</h2>
      <p>
      Rahamylly was launched to the public in January 2019, almost exactly two
      years after our work had started. In spring 2019 OrangIT, the partner
      company of Wunderdog, took over the responsibility for running the
      platform together with the core team at Rahamylly, which they still do
      today.
      </p>
      <p>
      From our perspective, we knew we had the competence needed to design,
      build, and operate the platform, as well as the experience to take a
      lead on the technology and guide the whole thing through. Finally,
      and maybe most importantly, the founding team at Rahamylly really had
      what it takes to push through the rollercoaster journey of product
      development to get their business launched and set it on an excellent
      growth trajectory. For this we congratulate them!
      </p>
      <p>
      Rahamylly is already serving hundreds of Finnish companies and thousands
      of investing citizens, with investments ranging from the very small to
      much larger amounts. Although with several hundred investors involved the
      process from application to funds reaching a company account is quite
      complex, it can take as little as just a few days.
      </p>
      <p>
      <i>
      Interested? Let's turn your ideas into digital reality.
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
      Create a novel crowdfunding platform that allows everyday citizens
      to invest in Finnish companies.
      </p>
      <h2>The result</h2>
      <p>
      A successful platform that is already bringing hundreds of
      companies together with thousands of micro investors.
      </p>
    </Summary>

  </Fragment>
)
