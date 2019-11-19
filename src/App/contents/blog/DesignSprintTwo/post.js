import BlockQuote from 'App/components/BlockQuote'
import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'
import photo1 from './designsprint-sequel.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        <i>
          This is the second part of Wunderdog’s Design Sprint e-book. Get the
          entire e-book as a pdf <TransitionLink to='http://landing.wunder.dog/designsprint'>here.</TransitionLink>
        </i>
      </p>
    </Chapter>

    <Chapter>
      <h2>Part 2: What is a design sprint suitable for?</h2>
    <Image src={photo1} alt='DesignSprint' />
      <p>
        What kind of challenges can the Design Sprint be used to solve? What
        kind of problems are too extensive or too small for the Sprint? What is
        the best stage of a process for carrying out the Sprint? Can the Sprint
        be applied in the same context multiple times? Is that recommended?
      </p>
      <p>
        We’ll answer the questions in reverse order. The Design Sprint is not a
        single-use method. Below, we will describe several ways of combining the
        intensive sprint weeks together. In terms of timing, you can say that if
        we have a one-week challenge, earlier is always better. For a
        combination of multiple sprints, the timing always depends on the case.
        Regarding the extent of the problem, we’re just going to quote Google:
        “The bigger the challenge, the better the sprint.” In the field of
        design, big challenges or “wicked problems” are usually approached by
        dividing them into parts. In the Design Sprint approach, the challenge
        is divided into single-week slices. Design Sprints are suitable for many
        different types of development work: digital projects, physical products,
        services — or a combination of them.
      </p>
      <p>
        Although Wunderdog is firmly rooted in the digital world and most Design
        Sprints we’ve been involved in are for digital services, we have
        experience in Design Sprints in other contexts as well, — the digital,
        physical and social worlds are constantly becoming more and more
        intertwined, after all.
      </p>
      <p>
        We think the one-week Design Sprint especially good if…
      </p>
      <p>
        <b>1. The idea or concept has not yet taken form</b> <br/>
        This starting point is the most profitable for you, as clear plans,
        previous drafts and prototypes tend to limit the thinking. At best, a
        Design Sprint carried out with an open mindset will direct the Sprint
        activities towards a viable and productive path: to involving users from
        the get-go and focusing on content instead of the surface.
      </p>
      <p>
        <b>2. You need to validate a new idea quickly</b> <br/>
        You or your organisation have a preliminary idea of an application,
        product/service or operating model. You may already have created some
        drafts or prototypes, but based on user reactions, the idea could still
        be developed into several different directions. A Design Sprint is not a
        replacement for an extensive market study, but in many cases, it’s just
        enough to achieve sufficient certainty.
      </p>
      <p>
        <b>3. You want to discover the flaws in aproduct or an idea</b> <br/>
        You often only discover problems and possibilities after the product
        development has been going on for a good while. A Design Sprint can be
        used as a warm-up round even if you’re already in the middle of product
        development: you get to know the product goals better, and you can
        prepare for any potential problems. It is very common that flaws and
        problems are revealed through customer experiences, as traditional
        product development rarely pays enough attention to the emotional needs
        of the users.
      </p>
      <p>
        <b>4. A project needs momentum</b> <br/>
        Planning and implementing digital projects can be slow, especially in
        larger companies. An intensive sprint week provides the project with a
        proper re-focus, allowing the team to focus only on the essentials,
        forgetting about other tasks and, above all, produce something tangible.
      </p>
      <p>
        <b>5. You want to improve your teamwork skills</b> <br/>
        Design Sprint offers a fantastic tool for newly formed teams or team
        leaders who suddenly find themselves in the “deep end” of a development
        project. For more established teams, it can offer an alternative working
        method and a fresh departure from the day-to-day activities of their
        company. The Design Sprint approach teaches teams to move quickly,
        maintain an active mindset, share ideas and find their way out of dead
        ends. Above all, Design Sprints are cross-functional by design. Pro tip:
        Running a company-wide Design Sprint is a great alternative to a famous
        speaker on a company day to team building.
      </p>
      <p>
        <b>6. You want to make your organisation understand the importance of design thinking</b> <br/>
        Many still view design and design thinking as simply addressing
        aesthetics. A successful Design Sprint is arguably the most efficient
        way to introduce people to what design thinking actually means. Those
        involved most intensely in the process will be the fastest to open their
        eyes, but introducing dimensions such as marketing, sales, finance,
        logistics or management in the initial discussions, user interviews or
        presentation of results can also open up new perspectives.
      </p>

    </Chapter>

  </Fragment>
)
