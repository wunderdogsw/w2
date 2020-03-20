import React, { Fragment } from 'react'

import Chapter from '../../../components/Chapter'
import ImageRow from '../../../components/ImageRow'
import Image from '../../../components/Image'
import BlockQuote from '../../../components/BlockQuote'
import TransitionLink from '../../../components/TransitionLink'
import SubTitle from '../../../components/SubTitle'
import photo1 from './ecommerce.jpg'
import photo2 from './clothing.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <p>
      <b>Introduction</b><br/>
      </p>
      <p>
      Recently me and fellow doggo Sudo have wrapped up a project at a large
      e-retailer in Germany. We were part of a development team that was
      struggling with a messy codebase, and had communication issues with the
      product team.
      </p>
      <p>
      After talking to the team members and looking at the code, we noticed a
      common cause for a lot of the problems - developers did not have a clear
      picture of the full domain. Different parts of the code were written by
      different people, and they were sometimes rewriting parts of the domain
      logic that already existed elsewhere, either without realizing it or in
      order to ‘save time’ from extracting the business logic to be reusable.
      Of course, this short-term time saving ended up costing a lot of time in
      future code maintenance.
      </p>
      <p>
      In addition, the product people didn’t have a shared language with the
      developers - for every new task or feature coming in from the product
      team, a lot of time had to be spent on “translating” what it is the
      product people wanted to terms the development team could understand and
      know how to implement in the existing codebase.
      </p>
      <p>
      By applying the principles of Domain Driven Design (or DDD for short) we
      were able to help out with those issues. In the scope of this post I'll
      discuss how we applied it on our team, and the benefits it provided. In a
      follow up post we’ll go more in depth into what the actual implementation
      looked like.
      </p>
      </Chapter>
      <Chapter>
      <p>
      <h2>What is Domain Driven Design?</h2>
      </p>
      <p>
      For those unfamiliar, DDD is an approach to software projects where every
      decision you make has to align with the product domain model, which is
      constantly evolving when features are added, removed or modified.
      </p>
      <p>
      This applies to product specification decisions, but perhaps not as
      obviously it also applies to every architectural or coding decision the
      R&D team makes. Since the model is shared between the R&D and product
      teams, maintaining its integrity fosters communication between them and
      keeps everyone on the same page by providing a common "language". There's
      a lot more to this topic, and you can read all about it in Eric J. Evans'
      book, where it was first introduced.
      </p>
      <BlockQuote>
        Sometimes
        it’s very tempting when I start a new project to dive in and immediately
        start writing code, but in order for a codebase to scale a lot of thought
        and effort need to be put into defining and maintaining the business’
        underlying domain.
      </BlockQuote>
      <p>
      <b>Step by step</b><br/>
      </p>
      <p>
      The first step was, naturally, figuring out what our domain was. This was
      made easier by the fact that when we joined the project, the backend team
      was already working on a simplified, unified API to replace the existing
      one, which had the frontend calling many different backend micro-services.
      So our domain model could be based on that API structure, at least as a
      starting point. Now the main challenge was aligning the frontend with this
      model.
      </p>
      <p>
      This existing frontend was split into fragments, with each fragment having
      its own output static file. However, all of these fragments shared one
      monolithic codebase, and were coupled together in messy ways - this made
      navigating the codebase difficult, and making code changes was a very slow
      and error prone process, especially as business requirements got more and
      more complex. It was decided a rewrite was in order, with each fragment
      having its own project.
      </p>
      </Chapter>
      <Chapter>
      <p>
      <b>Conclusion</b><br/>
      </p>
      <p>
      For me, this project was a great example of the benefits you get from
      spending a lot of time thinking about a project’s foundations. Sometimes
      it’s very tempting when I start a new project to dive in and immediately
      start writing code, but in order for a codebase to scale a lot of thought
      and effort need to be put into defining and maintaining the business’
      underlying domain.
      </p>
      <p>
      Software engineering is all about writing code other people can build on,
      and that requires everyone to understand how the part they’re building is
      connected to the rest of the system. Approaching projects from a DDD
      perspective helps me with that. I previously mentioned the Toolkit
      library we wrote as part of this project. In the next article we’ll go
      more in depth into how that library was built, including code examples.
      </p>
      <p>
      <i>
      Interested? Let's talk.
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
