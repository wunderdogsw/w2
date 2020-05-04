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

import photo1 from './Jopo.jpg'
import photo4 from './Abe.jpg'
import YoutubeVideo from 'App/components/YoutubeVideo'

export default () => (

  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
      <MainTitle narrow>Let's future-proof your business.</MainTitle>
      <Video src='https://player.vimeo.com/external/408322729.hd.mp4?s=2f0a25ba9df33b1e02c06206dc945eafe070e419&profile_id=175' useUnmute indent/>
      <Chapter>
      <h2>
      We're here to help.
      </h2>
      <p>
      Lately, most companies have had to re-design their operations and to come up
      with new products and services to secure their business. Digitalisation is
      playing a more and more important role. But re-inventing oneself is not always easy.
      Our job is to help you with that.
      </p>
      <p>
      It requires the ability to recognize business growth opportunities and challenges,
      creativity to invent novel approaches, humanity to understand the end user, and
      technological competence to build working solutions.
      </p>
      <p>
      <b>This is what we know best.</b> We have experience in building digital
      solutions from ideation to execution in various industries. We improve and update
      old systems and create future services that make our lives easier. We believe
      things can be done better.
      </p>
      </Chapter>


    <Chapter>
      <h2>
      Now is the time to find the bugs in your business and focus on the factors
      that bring value.
      </h2>
      <p><b>1.</b> Contact us at <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a> or fill in the form below. </p>
      <p><b>2.</b> Let's book a 30-minute call free of charge to map your situation together.</p>
      <p><b>3.</b> Depending on your situation, we either decide to collaborate on future-proofing your business or come to a conclusion that there are other ways for you to do so. </p>
    </Chapter>

    <HubspotForm
    portalId='1704241'
    formId='e4b0b759-034f-438e-bdaf-f8013c58c323'
    css=''
    />
    <Chapter>
    <BlockQuote by=" Teemu Tiainen, Director of Service Delivery at Elisa Santa Monica">
      The Wunderdog staff really completed our expertise portfolio, and the ability level of the developers was outstanding – all in all it went really well.
    </BlockQuote>
    </Chapter>

      <Chapter>
      <p>
    <BlockQuote by="Pia Ruusukivi, Director at Alma Talent">
      We’re pleased we found a partner that has been able to live up to our expectations.
    </BlockQuote>
      </p>
      </Chapter>


    <Chapter>
      <h2>
        Our offering:
      </h2>
      <p><b>Digital transformation</b><br />Re-designing value chains and processes, and implementing them with the help of digital technologies to create value to businesses and users.</p>
      <p><b>Development projects</b><br /> Projects that are easier to scope. We start with a separate sprint to define the delivered scope in more detail with the customer. </p>
      <p><b>Design and development help</b><br />Working billable hours in the customer team to accelerate the development process. Our designers and developers have an average of 10 years of experience.</p>
    </Chapter>

<Image src={ photo1 } alt="iPad-image" indent="right" hero/>
      <Chapter>
      <h2>
      We're your partner in turning good ideas into digital reality.
      </h2>
      <p>
      More about us and our customer projects <TransitionLink to='https://wunder.dog/work'>here.</TransitionLink>
        </p>
      </Chapter>
      <Indent twice>
      <Logos>
        <Clients />
      </Logos>
      </Indent>

      <Chapter>
    <BlockQuote by="Jussi Paananen, Chief Technology Officer at Blueprint Genetics">
    We appreciate Wunderdog's hard work, open communication and ability to take improvements forward.
    </BlockQuote>
    </Chapter>

    <Chapter>
    <p>
    <BlockQuote by="Markus Neimo, CEO of Rahamylly">
    We were impressed by how the Wunderdog team really took the lead on the technology and genuinely kept the success of Rahamylly as their first priority.
    </BlockQuote>
    </p>
    </Chapter>

        <Chapter>
        <h2>
        Let's make ideas fly!
        </h2>
        <p>
        <i>
        Antero Törhönen
        <SubTitle>
        <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a>
        </SubTitle>
        +358505281678</i>
        </p>
        <p>
        or leave your contact informatio:
        </p>


        <HubspotForm
        portalId='1704241'
        formId='e4b0b759-034f-438e-bdaf-f8013c58c323'
        css=''
        />


  </Chapter>
</Fragment>
)
