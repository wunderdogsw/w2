import React, { Fragment } from 'react'

import BlockQuote from '../../../components/BlockQuote'
import Chapter from '../../../components/Chapter'
import TransitionLink from '../../../components/TransitionLink'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        Even though technical debt* isn’t usually thought of as a similar tool as a mortgage, they have something in
        common: both can be used to achieve desired goals faster than what would be possible without them. However,
        there’s also a significant difference between technical debt and a mortgage. With a mortgage, a bank makes sure
        that the debt is paid back entirely. With technical debt you don’t usually need to pay it off entirely.
        Actually, often it isn’t even worth it.
      </p>
      <p>
        In software development all code usually goes through quite a meticulous peer review, which is often even
        considered an indicator of professionalism. However, in every system there are some features that are more
        valuable to business than others.
      </p>
      <BlockQuote>
        The valuable functionalities should, of course, be reviewed with care but is it useful to use the same amount
        of money on the less important functionalities?
      </BlockQuote>
      <p>
        Resources are always limited so prioritising is the key: sometimes with the not-so-critical parts <i>decent</i>{' '}
        is in fact <i>great</i>.
      </p>
      <p>
        We love data-driven approach to business decisions and functional specifications but that doesn’t seem to be the
        basis for decisions related to code quality control. Of course we can try to assess beforehand which parts of
        the software are going to require lots of changes but the actual knowledge of which parts change frequently will
        begin to uncover only after the start of the project.
      </p>
      <BlockQuote>
        Since a software project usually begins to make profit properly only after the first release, well-thought-out
        technical debt may be a good decision.
      </BlockQuote>
      <p>
        Basically, the question is, is the software life cycle long enough to generate more profit than what the accrued
        interest of the debt is. Getting into reckless and continuous high-interest debt will cause problems, without a
        doubt. That’s why it is important to realize that technical debt is a tool of which weaknesses and strengths you
        have to know. After all, hammering screws is just as good of an idea as buying a house using quickie loans.
      </p>
      <p>
        The product’s expected life cycle should also be considered. With products that have a shorter life cycle,
        paying technical debt is naturally not as good of an investment as it is with products that have a longer life
        cycle. Sometimes the amount of technical debt is seen as the cause for a short life cycle. However, according to
        our experience, what usually affects the life cycle more are the changes in business models, trends and
        technologies.
      </p>
      <p>
        For example, a complete rewrite of the user interface because of a brand renewal might considerably lessen the
        benefits gained from paying off technical debt. Also, sometimes even whole functionalities might be lost or
        changed radically. Predicting the future is hard, so everyone has to form their best guess with the knowledge
        and expertise they have at the time as to how the money for the product should be invested.
      </p>
      <BlockQuote>
        The thing to remember is that in the long run, not taking out technical debt can be just as bad of a decision
        as taking it out could be.
      </BlockQuote>
      <p>
        So, is technical debt a threat or a possibility? The beauty of this question lies in that there is no right
        answer. You could spiral into debt and getting out of it is not easy. On the other hand, a mortgage makes is
        possible for you to have your dream home now, whereas without it you might have it after a few decades, if even
        then.
      </p>
      <p>
        <i>
          <TransitionLink to='https://en.wikipedia.org/wiki/Technical_debt'>*technical debt</TransitionLink>{' '}
        </i>
      </p>
    </Chapter>
  </Fragment>
)
