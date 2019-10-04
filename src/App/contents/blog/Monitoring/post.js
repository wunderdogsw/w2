import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import React, { Fragment } from 'react'
import hero from './monitoring.jpeg'

export default () => (
  <Fragment>
    <Image src={hero} alt='Monitoring' />
    <Chapter>
      <h2>“You can’t control what you can’t measure” — Tom Demarco</h2>
      <p>
        Building a new digital service from scratch has never been easier. There are plenty of libraries, frameworks,
        platforms and service providers that make it possible to get our ideas into production in a matter of days if we
        push the envelope. We also have pretty good practices on how to develop software in general, accompanied with
        tooling and processes to deploy changes to production safely.
      </p>
      <p>
        However, there is still a significant disconnect between development and operations regardless of all the DevOps
        buzz. Developers code, configure infrastructure and take care of the deployments. But then, there is the
        infamous someone who takes care of the operations and monitoring. I call this approach DevOpsBut, which might
        ring a bell for those familiar with ScrumBut.
      </p>
      <h2>Production should be every developer’s primary concern</h2>
      <p>
        The harsh reality is that our code creates value only when it runs in production. Regardless of how well we
        implement and test our code, none of our development elegance can guarantee that our service runs smoothly in
        production. There are just too many moving pieces in the puzzle.
      </p>
      <p>
        From a bookkeeping perspective, we can think of our codebase as a liability, and it can only be considered an
        asset when it is delivering business impact in production. Therefore having operable software should be every
        developer’s top concern.
      </p>
      <p>
        Any non-trivial software system contains essential complexity which is inherent to the domain. There is no way
        around that. We also tend to be guilty of building some amounts of accidental complexity by our designs
        regardless of how hard we try to avoid it. With that said, the only way to be in control of such a complex
        system in production is to measure the key business metrics and have a close eye on them continuously.
      </p>
      <h2>What could possibly go wrong?</h2>
      <p>
        First, our customers can interact with our service in the most peculiar ways, which can lead to unexpected
        results and errors. Different end user devices, desktop and mobile browsers included, provide many browser
        quirks. There is no limit to the amount of manual exploratory testing to avoid this.
      </p>
      <p>
        Second, it is possible that our user interface is too complicated, and our end users cannot get the desired
        actions done. In this case, everything is fine from a technical perspective — not a single trace of error
        anywhere, but neither are there any expected business transactions happening. Without business metric based
        monitoring we are happy while our customers are frustrated. How uncomfortable is that?
      </p>
      <p>
        Third, software is turtles all the way down. For example, the downstream dependencies can become unavailable, or
        even worse, start responding slowly. Some parts of our core infrastructure might melt away for whatever reason.
        In a complex system, a small, innocent-looking anomaly can cause cascading failures, which might not seem
        interrelated. Due to concurrency, the sequence of events can be non-linear. These are scenarios that are close
        to impossible to foresee during development.
      </p>
      <h2>Optimize for mean time to recovery</h2>
      <p>
        In general, there are two methods of quality assurance. One approach is to make sure there are no bugs
        introduced in the first place. We focus our efforts on carefully testing our systems before deploying to
        production. With this laborious approach, the frequency of bugs found is small. This is all about optimizing the
        mean time between failures, or MTBF. The goal is to minimize the number of bugs and maximize the time between
        outages, regardless of the cost.
      </p>
      <p>
        Another approach is to make sure that whenever an anomaly happens in production, we know it in the very first
        second and have detailed diagnostic data. With a proper deployment pipeline in place, we can fix the problem
        quickly, and the impact of this failure is small in both scale and time. Such thinking optimizes the process for
        mean time to recovery, or MTTR. Bug count is not the primary concern. Instead, we make sure that we are aware of
        any exceptions within the first second and can fix them promptly.
      </p>
      <p>
        My question now is that would you rather live with the illusion of having perfect codebase surrounded by an
        ideal environment, or having state of the art tools in place to inform you when the unexpected happens in
        production? To be the first one to know of any issues. Or in contrast to have customers report them. Which one
        of these approaches make you sleep better during nights? Since resources are limited and software is complex, I
        would try to minimize the mean time to recovery over maximizing mean time between failures.
      </p>
      <h2>It is time to start measuring outcomes</h2>
      <p>
        Monitoring merely technical data is better than nothing, but it will only get us halfway there. The next step is
        to start monitoring KPI’s in real time. For an online web store, this can be the amount of logged in users,
        signups, shopping cart checkouts or payments. When we have collected the baseline figures for these
        transactions, we can setup alerts which are triggered on unexpected drops or peaks in our service metrics. Now
        we know when our service is healthy from the business perspective as well.
      </p>
      <p>
        By monitoring business transactions, we can start to measure the impact of our releases. It can be an incredible
        game changer in the way we develop software. Instead of focusing on output and features such as “customer can
        sign up using social login”, we can start to measure outcomes like “we get more customers signing up for our
        service.” Now we can optimize development efforts on business goals using data. It is a fundamentally different
        approach compared to prioritizing work based on the highest paid person’s opinion.
      </p>
      <h2>Towards operations-driven development</h2>
      <p>
        Getting proper monitoring in place is a bit similar to a well-crafted test suite or application security. It is
        not easy to wire these on top of the application later. Things like elementary server monitoring and health
        checks are easier to achieve compared to going all the way with an MTTR-optimized development process.
      </p>
      <p>
        Should developers focus on monitoring and stop writing automated tests? Of course not, that would be insane.
        There are numerous reasons for having a test suite in place. Tests are our safety net. They allow us to develop
        features faster, enforce modular design, and help in documenting system behavior.
      </p>
      <p>
        Monitoring is our safety net in the most critical environment: production. Therefore, all developers should
        ensure that their applications are robust from an operations perspective as well. All we need is to add a bit of
        “operations-driven development” mentality to our daily development routines. But then how do we take care of all
        this in practice? Well, that is another story and another blog post.
      </p>
    </Chapter>
  </Fragment>
)
