import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Indent from 'App/components/Indent'
import Grid from 'App/components/Grid'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import { SeriousStats } from 'App/contents/stats'
import Logos from 'App/components/Logos'
import { Clients, Ecosystem } from 'App/contents/other'
import CssVars from 'App/components/CssVars'
import TransitionLink from 'App/components/TransitionLink'
import SubTitle from 'App/components/SubTitle'
import BlockQuote from 'App/components/BlockQuote'
import HubspotForm from 'react-hubspot-form'
import Video from 'App/components/Video'
import './index.css'

import photo1 from './wunderdog-helsinki.jpg'
import photo2 from './retail-wunderdog.jpg'
import photo3 from './joanna-wunderdog.jpg'


export default () => (
  <Fragment>
  <CssVars>
    {{
      '--color-accent': '#fcfcfc',
      '--color-text-on-accent': '#000000',
    }}
  </CssVars>
  <MainTitle narrow>Custom-built solutions for your digital challenges</MainTitle>

  <Image src={ photo1 } alt="Wunderdog office" indent="right" hero/>

      <Chapter>
      <p>
      <i>
      Our societies are facing uncertain times. The question of the future is
      popping up in every business conversation, but one thing is clear: digital
      reliance is the answer. No matter the size or what industry your company
      belongs to, Wunderdog brings you the best crafted value solution for your
      digital investment. How? By using design sprints or developing proof of
      concepts and minimum viable product depending on the need.
      </i>
      </p>
      </Chapter>

      <Chapter>
      <h2>We drive you to the brightest future</h2>
      </Chapter>

      <Chapter>
      <p>
      <b>Want some examples of our work? Check a selection of our cases below. </b>
       Contact us for consultancy <a className="noHyphen" href="mailto:jasper.vanghemen@wunderdog.fi">jasper.vanghemen<span>@</span>wunderdog.fi </a>
      or fill in your e-mail below and let's book a 30 minute phone call for
      ideation (free of charge)!
      </p>
      </Chapter>

      <HubspotForm
      portalId='1704241'
      formId='adfafc87-e8ad-42c7-a7d3-dfa1dfd591b5'
      css=''
      />

      <Image src={ photo2 } alt="Ecommerce" indent="left" hero/>

      <Chapter>
      <h2>RETAIL - Scale your business with us.</h2>
      </Chapter>

      <Chapter>
      <p>
      Reaching out to new customers needs tech-savvy hands. We helped one of the
      world’s
      leading e-commerce retailers scale their subscription service from a
      city-based service (Berlin) to a European-wide level.
      <TransitionLink to='https://wunderdog.fi/work/fashion-ecommerce'>Read the full case study
      here.</TransitionLink>
      </p>
      </Chapter>

  <Indent twice><Stats>
    <div>
      <span>200k</span>
      <span>from 40K subscribed customers to 200.000K subscribed platforms in 6
      months.
      </span>
    </div>
    </Stats></Indent>

    <Chapter>
    <h2>
      MOBILITY - We accompany you in your structural changes.
    </h2>
    <p>
      Merging two of Germany’s biggest mobility providers is a lot of effort on
      all parts of the companies. We updated, extended and optimized the
      internal tools used for handling fares and other price-related data.
      Case result: From 2 large companies to Germany’s mobility top provider.
      </p>
    </Chapter>

    <Video src="https://player.vimeo.com/external/373123756.hd.mp4?s=df9edf8ebcd1410bca9d4743c2f1221c115fd73f&profile_id=174" indent />

    <Chapter>
      <h2>
        HR - We help you optimize your teams by hiring better.
      </h2>
      <p>
      Proper hiring in the tech department can be a difficult task depending
      on your company size, needs and technical expertise. We offer consulting
      to startups wanting to build better software architecture and we build
      the best technical teams to ensure the continuity of the projects.
      </p>
      </Chapter>

    <Indent twice><Stats>
      <div>
        <span>90%</span>
        <span>Our interim CTO service reduced more than 90% of software running
        costs
        </span>
      </div>
      <div>
        <span>40%</span>
        <span>and increased the tech team of a Berlin-based HR company by 40%
        </span>
      </div>
      </Stats></Indent>

      <Chapter>
        <h2>
          SOCIAL PROJECTS - We improve your performance to help your communities
          grow.
        </h2>
        <p>
        It’s often the case that companies or organizations have issues with
        performance and software development or maintenance. We take charge of
        it.
        </p>
        <p>
        Case result: Testing and creating a new API for the Berlin branch of an
        international organization to optimize their performance. As of now,
        Wunderdog contributed its part that lead to:
        </p>
        </Chapter>

      <Indent twice><Stats>
        <div>
          <span>700+</span>
          <span>nonprofits
          </span>
        </div>
        <div>
          <span>110k+</span>
          <span>lives impacted
          </span>
        </div>
        <div>
          <span>40k+</span>
          <span>hours volunteered
          </span>
        </div>
        </Stats></Indent>

        <Chapter>
        <h2>What is Wunderdog and how do we work?</h2>
        </Chapter>

        <Chapter>
        <p>
          Wunderdog is a software development consultancy prioritizing agility ahead
          of process. We are community players: we first listen to your needs and
          we offer optimal expert value stream and project value stream accordingly.
        </p>
        </Chapter>

        <Chapter>
        <h2>Why are we your perfect match?</h2>
        </Chapter>

          <Chapter>
          <p>
          We work only with highly skilled senior developers with +5 years of
          demonstrated technical experience. Since 2014 we have been working with
          multiple languages, technologies and tools in a variety of industries,
          company sizes and projects.
          </p>
          </Chapter>

          <Chapter>
          <h2>Do you offer remote consultation?</h2>
          </Chapter>

          <Chapter>
          <p>
          Yes, we do. When we don’t work at the clients’ facilities, we go the extra
          mile using the latest remote techniques and functional communication
          strategies.
          </p>
          </Chapter>

          <Chapter>
          <h2>In which language do you operate?</h2>
          </Chapter>

          <Chapter>
          <p>
          We speak German and English. Other languages might be available depending
          on the request.
          </p>
          </Chapter>

          <Chapter>
          <h2>
          We're your partner in turning good ideas into digital reality
          </h2>
          </Chapter>

  <Indent twice>
    <Logos>
      <Clients />
    </Logos>
  </Indent>
  <Chapter>
    <h2>
      Our services
    </h2>
    <p><b>Software development</b><br />Delivering high-quality digital products & services</p>
    <p><b>Product Analytics</b><br />Understanding and developing how users engage with what we build</p>
    <p><b>Business Design</b><br />Developing, testing and concepting of new businesses</p>
    <p><b>Service and Product Design</b><br />Easy-to-use interfaces to generate great user experiences</p>
    <p><b>Coaching & Team leading</b><br />Agile methods to support smart ways of working</p>
    <p><b>Scoped projects & co-sourcing</b><br />Reliable delivery to accelerate the development process</p>
  </Chapter>

          <Image src={ photo3 } alt="Wunderdog sales" indent="left" hero/>


          <Chapter>
          <h2>
          Is your sector or idea not listed? Get in touch and we’ll find a
          solution for you.
          </h2>
          <p>
          <i>
          Jasper Van Ghemen, Sales
          <SubTitle>
         <a className="noHyphen" href="mailto:jasper.vanghemen@wunderdog.fi">jasper.vanghemen<span>@</span>wunderdog.fi</a>
         </SubTitle>
         +491752948023
         </i>
         </p>
         <p>
         <i>
         Joanna Rindell, Country Lead
         <SubTitle>
         <a className="noHyphen" href="mailto:joanna.rindell@wunderdog.fi">joanna.rindell<span>@</span>wunderdog.fi</a>
         </SubTitle>
         +491751080044
         </i>
         </p>

  </Chapter>
</Fragment>
)
