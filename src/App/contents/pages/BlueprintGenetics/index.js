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

import heroThumb from './blueprint-hero-thumb.jpg'
import hero from './blueprint-hero.jpg'
import photo1Thumb from './blueprint-photo1-thumb.jpg'
import photo1 from './blueprint-photo1.jpg'
import photo2Thumb from './blueprint-photo2-thumb.jpg'
import photo2 from './blueprint-photo2.jpg'
import photo3Thumb from './blueprint-photo3-thumb.jpg'
import photo3 from './blueprint-photo3.jpg'
import summary from './redbull-summary.svg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#f8f8f8',
        '--color-text-on-accent': '#000',
      }}
    </CssVars>
    <MainTitle>Blueprint Genetics</MainTitle>
    <SubTitle useAsMetaTitle>Collaboration is in our DNA.</SubTitle>
    <DatLine />
    <Keywords>Scrum, full-stack development</Keywords>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Redbull hero" />
    <Chapter>
      <h4>Setting the scene</h4>
      <p>
        Genetic testing company Blueprint Genetics uses the latest technologies
        and techniques to help healthcare professionals around the world to
        diagnose and treat rare genetic conditions. Service is fast, affordable,
        and comes with informed, actionable insights.
      </p>
    </Chapter>
    <ImageRow>
      <Image thumbSrc={ photo1Thumb } src={ photo1 } alt="Blueprint lab" />
      <Image thumbSrc={ photo2Thumb } src={ photo2 } alt="Blueprint lab" />
    </ImageRow>
    <Chapter>
      <h4>The bright idea</h4>
      <p>
        In 2011, three Finnish post-docs in Stanford had an idea about a new
        sequencing technology that could bring genetic testing to mainstream
        healthcare. What if something that began as a research project could be
        transformed into a successful, growing business with a large set of
        commercial products and services all supported by modern digital
        solutions that are equipped to handle massive amounts of human genetic
        data?
      </p>
    </Chapter>
    <Chapter>
      <h4>The inevitable challenge</h4>
      <p>
        A growing business means a growing need for software development talent,
        so Blueprint Genetics got in touch to find out if our experienced
        developers and scrum coaches could help their entire team – from business
        stakeholders and domain experts to product owners and individual
        developers – learn about Scrum best practice and help to improve their
        products.
      </p>
    </Chapter>
    <Image thumbSrc={ photo3Thumb } src={ photo3 } alt="Blueprint lab crew" />
    <Chapter>
      <h4>Our solution</h4>
      <p>
        We kicked off the partnership in 2017 by rolling up our sleeves for the
        daily development work while at the same time coaching the Blueprint
        Genetics team to help them sharpen up their software development
        practices in terms of technologies, communication, and leadership.
      </p>
      <p>
        We helped to set up a development process where everything starts from
        business and operational needs and decisions are made based on
        prioritisation and workloads. We also pitched in on building an
        architecture that’s capable of handling ever-increasing amounts of data
        in real time. We also helped to develop a new production process for
        analysing sequenced DNA samples and reduce process lead times
      </p>
      <p>
        As workload increases alongside business growth, it is crucially
        important to maintain open and transparent ways of working, employing
        best practices and maintaining good cooperation between development teams,
        day-to-day operations, different stakeholders, and users. As well as
        helping with practical matters on the software development side we
        helped Blueprint Genetics scale up by empowering their teams to take even
        greater leaps forward both in their development processes and the volume
        of analyses their pipelines could handle.
      </p>
    </Chapter>
    <Chapter>
      <h4>So how did it go?</h4>
      <p>
        Blueprint Genetics is a great example of finding business success in a
        lean start-up way: quick experimentation with new ideas, short
        development cycles, and fast commercialisation have led to fast business
        growth
      </p>
      <p>
        The turnover of Blueprint Genetics has more than doubled annually during
        our co-operation. The amount of data Blueprint Genetics gathers is today
        counted in petabytes and they utilise considerable amounts of computing
        power. We also helped take development culture forward and recruit new
        team members.
      </p>
      <p>
        Blueprint Genetics appreciated our hard work, open communication and
        ability to take improvements forward.
      </p>
    </Chapter>
    <Chapter>
      <h4>Success that speaks for itself</h4>
      <p>
        Not always all the processes can up with the pace of fast crowing company.
        The updated process for software development have gained more agile ways of working for Blueprint Genetics.
      </p>
    </Chapter>
    <Image thumbSrc={ photo2Thumb } src={ photo2 } alt="Red Bull prize pic" />
    <Summary>
      <Image src={ summary } alt="" />
      <h4>The challenge</h4>
      <p>
        Develop an engaging companion game for the Red Bull Crashed Ice extreme
        sport event – in just two weeks.
      </p>
      <h4>The result</h4>
      <p>
        A successful game, launched on time, which has been easily modified for
        repeated use in similar Red Bull campaigns.
      </p>
    </Summary>
  </Fragment>
)
