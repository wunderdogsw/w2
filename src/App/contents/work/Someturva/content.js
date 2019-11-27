import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import BlockQuote from 'App/components/BlockQuote'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Summary from 'App/components/Summary'
import DatLine from 'App/components/DatLine'
import Video from 'App/components/Video'

import photo1 from './someturva-1.jpg'
import photo2 from './someturva-2.jpg'
import photo3 from './someturva-3.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <h2>Setting the scene</h2>
      <p>
        What would you do if you were bullied on social media? It’s upsetting
        for anyone, but can be particularly traumatizing for young people, who
        often don’t know how to report crimes faced online – or even if they’re
        crimes at all.
      </p>
    </Chapter>
    <Chapter>
      <h2>The bright idea</h2>
      <p>
        The idea of a service that could help people, especially younger people,
        to report crimes faced online was dreamed up two years ago. Someturva
        needed a tech partner to help their idea come to life – and this is
        where the collaboration between Someturva and Wunderdog began.
      </p>
    </Chapter>
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
        We needed to get a prototype ready fast in order to start getting
        feedback on the service from users. This would then let us develop the
        product iteratively in fast cycles – and give Someturva something
        concrete to continue their negotiations with investors.
      </p>
    </Chapter>
    <ImageRow>
      <Image src={ photo1 } alt="Someturva app" />
      <Image src={ photo2 } alt="Someturva app" />
    </ImageRow>
    <Chapter>
      <h2>Our like-able solution</h2>
      <p>
        The first step we took together was a roadmap sprint where we created the
        future plans for development. After this, it was time to roll up our
        sleeves and start building the prototype and getting validation from
        users on both the need and the solution. The validation work was completed
        in spring 2018, when the founding team had everything they needed to
        continue building Someturva.
      </p>
      <BlockQuote by="Jarno Vuorenmaa, CTO Someturva">
        When it comes to partners it is not just the people but the organization
        as a whole that needs to understand the core dynamics of a startup.
        Wunderdog has been the right partner for us.
      </BlockQuote>
      <p>
        Our paths crossed again a year later, in spring 2019. Someturva operations
        had moved forward a lot and it was time to create the actual Someturva
        service.
      </p>
      <p>
        Our designers formulated a top-notch UX for the service. Our dear
        friends at Polar Squad, a DevOps company that is part of the Wunderdog
        ecosystem, equipped the service with the power of Kubernetes. The system
        is micro-serviced with Node.js backends and NextJS frontends.
      </p>
    </Chapter>
    <ImageRow>
      <Image src={ photo3 } alt="Someturva app" />
    </ImageRow>
    <Chapter>
      <h2>Success that speaks for itself</h2>
      <p>
        Someturva’s new web app was launched on time in September 2019 and is
        now helping young people to report harassment and possible crimes faced
        online. So far, the access code for the service has been given to
        18,000 youngsters and the first reports have been received.
      </p>
    </Chapter>
    <Video src="https://player.vimeo.com/external/373123756.hd.mp4?s=df9edf8ebcd1410bca9d4743c2f1221c115fd73f&profile_id=174" />
    <Summary>
      <h2>The challenge</h2>
      <p>
        Test the idea, and create an innovative product from scratch with
        engaging UX design.
      </p>
      <h2>The result</h2>
      <p>
        The product was launched in September 2019 - on time and on budget, and
        Someturva is now expanding abroad.
      </p>
    </Summary>
  </Fragment>
)
