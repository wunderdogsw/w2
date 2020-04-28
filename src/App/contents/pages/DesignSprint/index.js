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
import Video from 'App/components/Video'
import BlockQuote from 'App/components/BlockQuote'
import HubspotForm from 'react-hubspot-form'
import './index.css'

import photo1 from './juha-larm2.jpg'
import photo2 from './Design-Sprint-L&T.jpg'
import photo3 from './design-sprint-kampus.jpg'
import photo4 from './Abe.jpg'
import photo5 from './design-sprint-ebook.jpg'

export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
    <MainTitle narrow>How About a Remote Design Sprint?</MainTitle>

    <Image src={ photo1 } alt="Juha Larm" indent="right" hero/>
    <Chapter>
      <p>
        <i>*Juha Larm, Head of Design at Wunderdog </i>
      </p>
    </Chapter>
    <Chapter>
    <h2>Wunderdog’s Design Sprint is like a helicopter ride of product development.
    </h2>
      <p>
      Did you know that we can facilitate the Design Sprint remotely for you and
      your colleagues? Running a one week Design Sprint before months of development
      work helps you to:
      </p>
      <p><b>1)</b> Focus only on relevant challenges</p>
      <p><b>2)</b> Get tangible results in only one week</p>
      <p><b>3)</b> Efficiently plan the next steps in your project</p>
      <p>
      Design Sprint is for getting to know the actual users before getting too far
      ahead with the design and development process. Even a superficial user research
      will help you decide whether you should actually commit to the costly development
      process.
      </p>
      <p>
      <b>Download the Design Sprint e-book in english by leaving your email below. </b>
      Looking for the finnish version?
      <TransitionLink to='http://landing.wunder.dog/design-sprint'> Get it here.</TransitionLink>
      </p>
    </Chapter>

    <HubspotForm
    portalId='1704241'
    formId='28009ea5-cd0d-4d8d-b15f-b3b0787b95f5'
    css=''  />

    <Image src={ photo5 } alt="Design Sprint Wunderdog" indent="left" hero/>


    <Chapter>
    <h2>What is a Design Sprint suitable for?</h2>
      <p><b>1)</b> The idea or concept has not yet taken form</p>
      <p><b>2)</b> You need to validate a new idea quickly</p>
      <p><b>3)</b> You want to discover the flaws in a product or an idea</p>
      <p><b>4)</b> A project needs momentum</p>
      <p><b>5)</b> You want to improve your teamwork skills</p>
      <p><b>6)</b> You want to make your organisation understand the importance
      of design thinking</p>
      </Chapter>

          <Image src={ photo2 } alt="L&T" indent="right" hero/>

      <Chapter>
        <h2>DESIGN SPRINT 1: Lassila & Tikanoja</h2>
        <p>
        The initial problem definition
        from L&T's brief described construction companies ordinarily order
        surplus amounts of resources when a construction project is ongoing.
        This results in;
        unused resources ending up as waste.
        </p>
        <p>
        L&T wanted to explore how to solve this problem using a design sprint,
        with the following challenge statement: “How might we create an
        after-market for the unused construction material for consumers so that
        it could be used in its original purpose?"
        <TransitionLink to='https://wunderdog.fi/blog/experimenting-with-new-business-models-using-design-sprint'> Read the full blog post here.</TransitionLink>
        </p>
      </Chapter>

            <Image src={ photo3 } alt="SanomaPro" indent="left" hero/>

        <Chapter>
          <h2>DESIGN SPRINT 2: SanomaPro</h2>
          <p>
          What if we could deconstruct the existing learning material to create
          a truly personalized learning path for pupils? This would enable
          teachers to better respond to the varying needs of individual classes
          and pupils.
          </p>
          <p>
          With a series of Design Sprints, we designed a new digital learning
          environment together with Sanoma Pro that paves the way for future
          learning.
          <TransitionLink to='https://wunderdog.fi/work/sanoma-pro'> Read the full case study here.</TransitionLink>
            </p>
          </Chapter>


            <Chapter>
            <h2>
            We're your partner in turning good ideas into digital reality.
            </h2>
            <p>
            See our selected <b>reference cases</b> <TransitionLink to='https://wunderdog/work'> here.</TransitionLink>
            </p>
            </Chapter>

    <Indent twice>
      <Logos>
        <Clients />
      </Logos>
    </Indent>

        <Image src={ photo4 } alt="Abe" indent="right" hero/>

        <Chapter>
        <h2>
        Get in touch
        </h2>
        <p>
        <i>
        Antero Törhönen, Helsinki
          <SubTitle>
           <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358505281678
          </i>
        </p>
        <p>
        <i>
        Pirkka Suominen, Helsinki
          <SubTitle>
           <a className="noHyphen" href="mailto:pirkka.suominen@wunderdog.fi">pirkka.suominen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358407551327
          </i>
        </p>
        <p>
        <i>
        Ville Arponen, Helsinki
          <SubTitle>
           <a className="noHyphen" href="mailto:ville.arponen@wunderdog.fi">ville.arponen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358505637955
          </i>
        </p>
        <p>
        <i>
        Jasper van Ghemen, Berlin
          <SubTitle>
           <a className="noHyphen" href="mailto:jasper.vanghemen@wunderdog.fi">jasper.vanghemen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +491752948023
          </i>
        </p>

    </Chapter>
  </Fragment>
)
