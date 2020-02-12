import React, { Fragment } from 'react'

import BlockQuote from '../../../components/BlockQuote'
import Chapter from '../../../components/Chapter'
import TransitionLink from '../../../components/TransitionLink'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        <i>
          Wunderdog looks and feels like the Doggos that work at Wunderdog. We wanted them to tell you in their own
          words who they are and what they do!
        </i>
      </p>
      <BlockQuote>
        Building up one of my very first web pages at the age of 12 I found the browser DevTools that revolutionized my
        life!
      </BlockQuote>
    </Chapter>
    <Chapter>
      <p>
        Hi! I’m Turger, 27-year-old cheerful developer, living in Helsinki. I like all sorts of tinkering and
        adventures. Learning stuff, whether it’s related to geeky stuff or acrobatics, is always fun and I constantly
        keep finding new areas of interest! I also have a weak spot for hamburgers, that’s how I ended up getting my
        wundername, Turger (we all have a nickname given in the first week of work at Wunderdog, as if it weren’t hard
        enough to remember the real ones! Luckily, one of my colleagues created{' '}
        <TransitionLink to='https://medium.com/wunderdog-technology/i-had-a-problem-whats-your-name-again-d120b2ac8608'>
          a solution to this).
        </TransitionLink>
      </p>
      <p>
        What I’ve always loved about coding is that in addition it being my job to solve customer projects, the skill
        can be utilized everywhere! So I tend to code stuff to ease my everyday life and other things just for fun.
        Recently I crafted a mobile journey planner for the routes of public transportation that I most use, for
        instance. I also love that when coding, I feel like I get things done. I actually see the concrete result of my
        work when the rows of code I wrote get into action!
      </p>
      <p>
        I joined the Wunderdog pack in early 2015, just after the company was founded. A friend of mine who worked there
        spoke highly about the place, so I decided to apply. Nowadays my weeks are spent at the customer. Even though we
        as consultants work at the customer’s facilities the Wunderdog culture is taken there with the team. Something I
        brought with me when joining the current team is a daily break (or at least we intend to keep it as often as we
        have the time!) when we plank or do pull-ups together. This turned out to be a success and nowadays also the
        people at the customer are joining in.
      </p>
      <p>
        Fridays are cool since all doggos get together at Wunderdog’s office at Mikonkatu. The mornings are kicked-off
        with a breakfast and a weekly session where we go through what’s going on at Wunderdog.
      </p>
      <BlockQuote>
        Even though we as consultans work at the customer’s facilities the Wunderdog culture is taken there with the
        team. Something I brought with me when joining the current team is a daily break when we plank or do pull-ups
        together.
      </BlockQuote>
      <p>
        In the current project, our team is developing an internal tool for managing employment relations. The
        atmosphere at the customer is warm and cozy and the work flows smoothly. Our team consists of Wunderdog’s
        developers and few persons from the customer. They know all about their end-user which makes solving problems
        related to the user experience, for instance, convenient when we are actually physically sitting next to each
        other.
      </p>
      <p>
        I enjoy working the most in a team where members are empathic, work together towards a common objective and know
        how to give constructive feedback — both positive and negative. That creates a safe environment that allows
        everyone to focus but also ask and get help when needed. The team’s success, no matter how big or small, is
        celebrated as a team, together.
      </p>
      <p>
        For me, it’s important that I get to do meaningful projects and grow professionally working with colleagues who
        I have fun with. At Wunderdog I’ve done varying projects each time for a different customer, with a different
        team and a different tech stack. In my opinion, Wunderdog has succeeded in getting great people under the same
        roof so my colleagues are awesome to hang out with — even outside of the office. Sometimes I almost forget how
        lucky I am to work every day with such great, talented, and like-minded people who have an interest in exactly
        the same things that I do.
      </p>
    </Chapter>
  </Fragment>
)
