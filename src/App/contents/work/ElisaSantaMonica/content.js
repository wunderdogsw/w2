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

import photo1 from './ESM-photo1.jpg'
import photo2 from './ESM-photo2.jpg'
import photo3 from './ESM-photo3.jpg'


export default () => (
  <Fragment>
    <Chapter>
      <h2>Our self-serving solution</h2>
      <p>
      We created a self-service portal that gathers together relevant
      information for customers – order tracking, device data, support
      requests, status reports, and monitoring – all on one user-friendly
      platform.
      </p>
      <p>
      Our developers also coded a tool that uses algorithms to verify
      the quality of the data and automatically report any errors or if
      something is not up to date.
      </p>
      <BlockQuote by=" Teemu Tiainen, Director of Service Delivery at ESM">
        The user interface was done well, the Wunderdog staff really completed
        our expertise portfolio, and the ability level of the developers was
        outstanding – all in all it went really well.
      </BlockQuote>
    </Chapter>
    <Chapter>
      <h2>The bright idea</h2>
      <p>
      What if ESM (Elisa Santa Monica) could make their work more transparent
      to customers? Perhaps systems that weren’t previously communicating
      could be brought together, cutting down on time-consuming manual work for
      their customer service team.
      </p>
      <p>
      Could a self-service portal be the answer?
      </p>
    </Chapter>
    <Image src={ photo1 } alt="Working from Wunderdog office" />
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
      ESM works proactively to maintain data networks, ensuring their
      reliability. But customers were unable to see this, meaning no-one knew
      that this kind of valuable work was being done. Customers also had very
      little information about the wide variety of products and services that
      ESM can provide. The upshot of this was that most customers were just
      buying a certain service or product without knowing they could have a
      neatly packaged solution.
      </p>
      <p>
      On top of this lack of transparency, information about delivery times
      and methods was communicated manually, placing a burden on ESM’s sales
      and customer service teams. Data wasn’t easy to access and customer
      support information for different devices was stored in several
      different places. Things were working, but perhaps there was a little
      too much sweat and hassle – a situation we could definitely help improve.
      </p>
      </Chapter>
      <Image src={ photo2 } alt="Elisa Santa Monica team" />
      <Chapter>
      <h2>Success that speaks for itself</h2>
      <p>
      By digitalizing ESM’s services, we improved service quality. We also
      improved ESM’s transparency to their customers and enabled them to
      standardize their processes. This has helped to ensure that ESM’s
      unique servicescape and high-end knowledge base is being shared
      effectively with their customers.
      </p>
      <p>
      Our cooperation started back in 2017 and is still ongoing!
      </p>
      </Chapter>
    <Summary>
      <h2>The challenge</h2>
      <p>
      Information about delivery times and methods was communicated manually,
      placing a burden on ESM’s sales and customer service teams. Data
      wasn’t easy to access and customer support information for different
      devices was stored in several different places.
      </p>
      <h2>The result</h2>
      <p>
      We created a self-service portal that gathers together relevant
      information for customers.
      By digitalizing ESM’s services, we improved service quality.
        </p>
      <h2>Technologies used</h2>
        <p>
      Ansible, CI, Docker, Docker Compose, Express, Javascript, Jenkins,
      Jest, JS, Kanban, Node, NPM, React, Typescript
      </p>
    </Summary>

  </Fragment>
)
