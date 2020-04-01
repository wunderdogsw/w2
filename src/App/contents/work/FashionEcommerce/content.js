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

import photo1 from './ecommerce-wunderdog.jpg'


export default () => (
  <Fragment>
    <Chapter>
      <h2>Our solution</h2>
      <p>
      In early 2019, one of Europe’s leading fashion e-commerce companies
      reached out to Wunderdog. They were willing to scale their customer
      loyalty program from Berlin to Europe-wide and they were looking for a
      software consultant to help them move away from their MVP phase.
      </p>
      <p>
      Three months later we were leading the project, mentoring the team and
      refactoring their codebase so it could be supported. We made the feature
      development time cycle shorter; we made the
      team switch from Javascript + Flow to TypeScript and simplified
      the implementation and maintainability of new features, as well as the
      running of campaigns and A/B tests.
      </p>
      </Chapter>

      <Indent twice><Stats>
        <div>
          <span>100000+</span>
          <span>we grew the number of subscribers from a few hundred to
          hundred of thousands</span>
        </div>
      </Stats></Indent>

      <Chapter>
      <BlockQuote by=" ">
      The numbers
      end up speaking for themselves.
      </BlockQuote>
    </Chapter>
    <Chapter>
      <h2>The bright idea</h2>
      <p>
      How can you reach out from a few hundred to a few thousand subscribers in
      a matter of months? Our customer leads the fashion retail ecommerce
      business in Europe and consequently has many departments in constant
      growth. In this specific case we worked for a customer loyalty program,
      which consisted of a subscription model to make faster and cheaper
      deliveries and other aggregated services.
      </p>
    </Chapter>
    <Chapter>
      <h2>How did we do it? Domain Driven Design (DDD) and TypeScript as resources</h2>
      <p>
      Initially, our customer wanted to work with developers with experience
      with Javascript and React. They used Flow, a Static type checker for
      JavaScript, by which you can enable users or developers to use types.
      It’s not as enforced as in TypeScript (much stricter when it comes to types),
      so we as a team proposed to use TypeScript. Other teams in the company were
      already using it and it is a good language to work with. Thus we also made a
      case for switching to TypeScript rather than keep using Javascript + Flow.
      For the new project after ours ended, everyone in the team started using
      TypeScript. 
    </p>
    </Chapter>
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
      It took some months to evidence the main issue was not the
      size of the team but the foundation of the codebase, which was not clean
      enough. The main driver for this change was the domain driven development
      and making sure to deliver a scalable, maintainable and readable code.
      Once this was addressed, we could start seeing interesting results in
      numbers: for instance, how the subscribers grew from a few thousand in
      Berlin to hundreds of thousands Europe-wide. Eventually, we suggested
      other changes that they implemented successfully.
      After some months, other developers
      at Wunderdog joined the project: our customer was fully trusting we knew
      what kind of developers to hire, and for which occasions.
      </p>
      </Chapter>
      <Image src={ photo1 } alt="Wunderdog at work" />
      <Chapter>
      <h2>Success that speaks for itself</h2>
      <p>
      Although it’s commonplace, being proactive and repetitive in the messages,
      speaking out and pointing out the flaws or giving feedback optimizes all
      sides of a project. There is always room for impacting areas that nobody
      thought of initially just by being perseverant and resilient. The numbers
      end up speaking for themselves.
      </p>
      </Chapter>
      <Chapter>
        <p>
        <i>
        Interested? Let’s take the next step together.
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
    <Summary>
      <h2>The challenge</h2>
      <p>
      Scaling the customer loyalty program of a leading ecommerce company from
      Berlin to Europe-wide and helping them move away from their MVP phase.
      </p>
      <h2>The result</h2>
      <p>
      Exceeding their expectations by taking leadership of the project, and
      eventually growing their subscribers from a few hundred to hundred of
      thousands across multiple countries in Europe.
      </p>
      <h2>Methods used</h2>
      <p>
        Domain Driven Design (DDD) and TypeScript as resources.
      </p>
    </Summary>

  </Fragment>
)
