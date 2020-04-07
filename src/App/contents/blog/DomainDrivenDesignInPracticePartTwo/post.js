import React, { Fragment } from 'react'

import Chapter from '../../../components/Chapter'
import ImageRow from '../../../components/ImageRow'
import Image from '../../../components/Image'
import BlockQuote from '../../../components/BlockQuote'
import TransitionLink from '../../../components/TransitionLink'
import SubTitle from '../../../components/SubTitle'
import photo1 from './DomainEntityTypes.jpg'
import photo2 from './SubscriptionService.jpg'
import photo3 from './TypeMakerForSubscription.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <p>
      <h2>To get started</h2>
      </p>
      <p>
      Recently my colleague Guy and I worked on a Node.js/React.js/TypeScript
      project for the leading fashion e-commerce company in Berlin. This article
      <TransitionLink to='https://wunderdog.fi/blog/domain-driven-design-in-practice'> follows Guy’s views </TransitionLink>
      on the benefits provided by Domain-Driven Development,
      which I also share.
      </p>
      <p>
      To get, let’s dive a bit deeper to see how DDD can be applied by using
      TypeScript. To unify the business logic to be used in a number of
      microservices we decided to make a distributable NPM package out of it.
      After a short voting in Google Chat, we coined a name (a rather simple
      one): Toolkit. The Toolkit library consisted of three main parts: domain
      entity types, business logic (services) and helpers for testing.
      </p>
      </Chapter>

      <Chapter>
      <p>
      <h2>1. Domain entity types</h2>
      </p>
      <p>
      The domain entity types are declared by using the basic TypeScript
      language features, such as type and enum. So nothing too fancy here. One
      thing worth mentioning is that since API returned dates in ISO formatted
      date strings there was no need to type those besides strings.
      </p>
      <Image src={photo1} alt='DomainEntityTypes' />
      <p>
      Some other alternatives such as type ISODateString = string were
      considered, but the team decided to follow the most simple possible
      typing here. Usage of type alias would have added more clarity to the
      string format provided, but on the other hand it would have added in
      complexity as new developers would need to learn the meaning of it vs.
      standard TS string type.
      </p>
      <p>
      Now that the type for Subscription has been declared, let’s move on to the
      Subscription Service code.
      </p>
      </Chapter>

      <Chapter>
      <p>
      <h2>2. Subscription service (simplified example)</h2>
      </p>
      <p>
      We decided to use Services –a design pattern– to abstract the domain
      entity logic details and hide those from the consumer.
      </p>
      <Image src={photo2} alt='SubscriptionService' />
      <p>
      The services were the only place where the domain entity specific business
      logic is allowed to live. This design decision forced all the consumers of
      the type Subscription to not contain any business logic, but instead call
      the exported functions of this service.
      </p>
      <p>
      Service here acts as an abstraction layer which only takes subscription as
      parameter for all the exposed functions and hides everything else. This
      way we keep the code consumer side decoupled from the business logic and
      possible future changes.
      </p>
      <p>
      Now we’ve covered the domain types and the logic itself, let’s jump on to
      the test helpers which we used throughout the stack to simplify testing.
      </p>
      </Chapter>

      <Chapter>
      <p>
      <h2>3. Test helpers: Type maker for Subscription</h2>
      </p>
      <p>
      To simplify the testing of, let’s say, a React component and the Node.js
      route logic, we created test helpers with all the real life scenarios for
      each domain entity. That vastly simplified the testing as the tests were
      able to rely on the domain types and different kinds of test type makers.
      </p>
      <Image src={photo1} alt='TypeMakerForSubscription' />
      <p>
      Type makers are the convenience modules that should be used in
      unit/integration tests in both cases, when testing node.js or React code.
      In principle, the module uses a simple type skeleton, which is constructed
      based on the most default occurrence of such type in the business domain.
      </p>
      <p>
      <i>makeSubscription</i> function is a module internal function which takes
      the <i>index signature</i> type of Subscription as a parameter that can be
      used for overriding.
      </p>
      <p>
      Module exports only the valid types that occur in the business domain.
      This guides the test code towards the direction of the actual business
      domain and that way emphasises the business domain even more from its part.
      </p>
      </Chapter>

      <Chapter>
      <p>
      <h2>Conclusion</h2>
      </p>
      <p>
      This project was a great example of how to use fairly basic TypeScript and
      make it the foundation of your whole app and its core business logic.
      We utilized DDD and Typescript by building up this library called Toolkit,
      which could be easily distributed to be used in many decoupled services.
      </p>
      <p>
      To me, this is DDD at it’s best, because of the clarity it brings to the
      codebase and its relatively simple implementation per se in TypeScript. A
      much bigger task here is actually figuring out the domain behaviour and
      the correct types. However, this is already a topic on its own: you can
      read about it in Eric J. Evans’ book Domain-Driven Design.
      </p>
      <p>
      Software engineering is a field in which the engineer translates a
      business to digital means. That’s why domain understanding and its
      implementation in Domain-Driven Design can help everyone to align into
      the same business and the same goal. No matter if you are a business
      owner, product designer or a software engineer, DDD clarifies the common
      targets of your project at the same time it helps scaling your company.
      </p>
      <p>
      <i>
      Interested? Let's make ideas fly.
      </i>
      </p>
      <p>
      <i>
      Jasper van Ghemen, Business Development Lead
      <SubTitle>
        <a className="noHyphen" href="mailto:jasper.vanghemen@wunderdog.fi">jasper.vanghemen<span>@</span>wunderdog.fi</a>
      </SubTitle>
      +491752948023
      </i>
      </p>
    </Chapter>
  </Fragment>
)
