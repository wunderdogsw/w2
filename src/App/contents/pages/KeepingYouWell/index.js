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

import hero from './health-tech-wunderdog.jpg'
import photo1 from './somebuddy-wunderdog.jpg'
import photo2 from './blueprint-genetics-wunderdog.jpg'

export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
    <MainTitle narrow>Creating game changing health tech</MainTitle>
    <SubTitle>
      We believe things can be done better. You do too? Let's connect <a className="noHyphen" href="mailto:hello@wunderdog.fi">hello<span>@</span>wunderdog.fi</a>
    </SubTitle>
    <Image src={ hero } alt="Wunderdog people" indent hero/>
    <Chapter>
      <h2>CASE: Someturva</h2>
    </Chapter>
    <Chapter>
      <p>
      We created a mobile application that offers legal services to stop
      bullying on social media. Using this application, youngsters in
      particular will be able to seek help for inappropriate behaviour they
      may face online. The application is a service offering low-threshold
      legal assistance for problems such as bullying, harassment, or the
      dissemination of private data. The app has the heart of an AI but
      the kindness and empathy of a human. 
      </p>
    </Chapter>

    <Indent twice><Stats>
      <div>
        <span>18k</span>
        <span>youngsters have accessed to the service so far
        </span>
      </div>
      <div>
        <span>1000</span>
        <span>people have received help from Someturva in resolving the crimes
        they have reported
        </span>
      </div>
      </Stats></Indent>

    <Chapter>
        <p>
        <i>
        Interested? Let's make ideas fly.
        </i>
        </p>
        <p>
        <i>
        Antero Törhönen
          <SubTitle>
           <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358505281678
          </i>
        </p>
    </Chapter>

    <Image src={ photo1 } alt="Wunderdog people" indent="left" hero/>

    <Chapter>
      <h2>
        CASE: Blueprint Genetics
      </h2>
      <p>
        What if something that began as a research project could be
        transformed into a successful, growing business with a large set of
        commercial products and services all supported by modern digital
        solutions that are equipped to handle massive amounts of human genetic
        data? Well, it did.
        </p>
      </Chapter>

      <Indent twice><Stats>
        <div>
          <span>200%</span>
          <span>The turnover of Blueprint Genetics has more than doubled
          annually during our co-operation.
          </span>
        </div>
        <div>
          <span>1000TB</span>
          <span>The amount of data Blueprint Genetics gathers is today counted
          in petabytes. 1 petabyte = 1000 terabytes.
          </span>
        </div>
        </Stats></Indent>

        <Chapter>
            <p>
            <i>
              Interested? Let's talk.
            </i>
            </p>
            <p>
            <i>
            Pirkka Suominen
              <SubTitle>
               <a className="noHyphen" href="mailto:pirkka.suominen@wunderdog.fi">pirkka.suominen<span>@</span>wunderdog.fi</a>
              </SubTitle>
              +358407551327
              </i>
            </p>
        </Chapter>

      <Image src={ photo2 } alt="Wunderdog people" indent="right" hero/>


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

    <Chapter>
        <h2>
        Get in touch
        </h2>
        <p>
        <i>
        Antero Törhönen
          <SubTitle>
           <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358505281678
          </i>
        </p>
        <p>
        <i>
        Pirkka Suominen
          <SubTitle>
           <a className="noHyphen" href="mailto:pirkka.suominen@wunderdog.fi">pirkka.suominen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358407551327
          </i>
        </p>
        <p>
        <i>
        Ville Arponen
          <SubTitle>
           <a className="noHyphen" href="mailto:ville.arponen@wunderdog.fi">ville.arponen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358505637955
          </i>
        </p>
    </Chapter>

  </Fragment>
)
