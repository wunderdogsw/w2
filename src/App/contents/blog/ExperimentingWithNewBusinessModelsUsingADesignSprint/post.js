import React, { Fragment } from 'react'
import Chapter from '../../../components/Chapter'
import BlockQuote from '../../../components/BlockQuote'
import Image from '../../../components/Image'
import TransitionLink from '../../../components/TransitionLink'
import SubTitle from '../../../components/SubTitle'
import {VilleArponen} from '../../contactSalesFaces'
import CallToAction from "../../../components/CallToAction"
import {CaseContactInfo} from "../../callToActions"

import photo1 from './Design-Sprint-calendar.jpg'
import photo4 from './design-sprint-sketch.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        <i>
        In this blog post, we’ll present a great real-life example of how
        Design Sprint was used in a customer project.
        </i>
        </p>
        <p>
        <i>
        You can download our Design Sprint e-book as a pdf <TransitionLink to='https://wunderdog.fi/design-sprint'>
        here.</TransitionLink>
        </i>
      </p>
      </Chapter>
      <Chapter>
    <h2>Introduction</h2>
      <p>
        Our goal was to validate the innovation using <TransitionLink to='https://wunder.dog/blog/design-sprint'>
        Design Sprint</TransitionLink> and as much experimentation as possible.
        Insight for innovation in the “construction marketplace” came from
        L&T's strategy days, where a number of initiatives were created
        through ideation.
        </p>
        <p>
        The initial problem definition from L&T's brief
        described  construction companies, their customers, as having the
        following problem: to limit excessive labor costs and avoid material
        delays, construction companies ordinarily order surplus amounts of
        resources when a construction project is ongoing. This results in;
        unused resources ending up as waste. And this creates unnecessary
        waste management costs to the construction company, lowers their
        environmental performance and is a detriment to the circular economy.
        </p>
        <p>
        L&T wanted to explore how to solve this problem using a design
        sprint, with the following challenge statement:
        “How might we create an after-market for the unused construction
        material for consumers so that it could be used in its original purpose?"
      </p>
    <BlockQuote>
        Smaller construction
        companies and construction managers provided their estimations on the
        share of unused material to the total waste. To our surprise, the
        estimate was thought to be in the range of 10-20%.
    </BlockQuote>
      <p>
      <b>Day 1: Problem definition</b>
      </p>
      <p>
        Four interviews were conducted with L&T’s construction company
        customers.
        These interviews were in line with the initial problem discovery but
        provided additional data that further validated the problem. Smaller
        construction
        companies and construction managers provided their estimations on the
        share of unused material to the total waste. To our surprise, the
        estimate
        was thought to be in the range of 10-20%. The customers were recruited
        to be available for interviews during the sprint so we could access
        four consumers who were in the process of their homes being under
        construction.
      </p>
      <p>
        The design sprint kicked off with the quick mapping of a team canvas
        that outlined the purpose of the sprint. Key insights were shared and,
        as all participants agreed on the potential benefits of the concept, it
        was mutually agreed that we could quickly advance to prototyping to make
        sure we could have at least one iteration of the concept during the
        sprint. We decided to use a business model canvas and value proposition
        as the tools to make sure we were creating hypotheses and ideas for the
        most business-critical aspects of this concept.
      </p>
      <Image src={photo1} alt='Design-Sprint-calendar' />
      <p>
        We decided to experiment with our approach within the business model
        canvas, finding the most important zero point for the cost of
        construction waste to L&T’s business customers. However, this
        approach led us to discover another zero point for the material and
        this raised an interesting proposal for further investigation: “What
        if the products on the after-market were free and we charged only for
        the logistics?”
      </p>
      <p>
        We began ideation and came up with two alternative solutions for the
        after-market, based on key activities.
      </p>
      <p>
        We identified the need to conduct a flash survey of our consumers: we
        wanted to both learn how they would react to unused but recycled
        construction materials, and to understand our consumers’ needs and
        material interests more. The survey was quickly drafted with
        Surveymonkey and posted as ‘market research’ to a chosen Facebook group,
        which we identified as having over 10.000 members of the target group we
        wanted to reach and could be considered as potential customers for the
        new concept.
      </p>
      <BlockQuote>
        The business would barely be profitable after
        transporting the unused material to a warehouse and if it would need to
        be transported again from there, the transportation costs would make it
        unprofitable.
      </BlockQuote>
      <p>
      <b>Day 2: Designing the experiments</b>
      </p>
      <p>
      The interviews revealed no interest from the business customers to develop
      an aftermarket for unused materials as it was seen as having no relevance
      to their core business. One of the interviewed construction managers
      actually shared relevant insights from their construction company, where
      they had built a business scenario for an aftermarket. According to them,
      the business “would barely be profitable after transporting the unused
      material to a warehouse, and if it would need to be transported again from
      there, the transportation costs would make it unprofitable.”
      </p>
      <p>
      The data from the flash-survey gave us more concrete data about the
      interest
      of consumers which we could use when creating the consumer value
      proposition.
      </p>
      <p>
      We proceeded to create the second experiment to validate consumers'
      interest and research their behavior (jobs, pains, and gains).
      </p>
      <p>
      Two MVP scenarios were the basis of designing the experiments.
      Two realistic-looking webshops were quickly drafted in sketch and coded
      into responsive landing pages to split test the two ‘competing’ models,
      or, as we named the test during the project, a speculative
      ‘Business Battle Royale’.
      </p>
      <Image src={photo4} alt='Design-Sprint-sketch' />
      <p>
      Both landing pages were embedded with Google Analytics and Hotjar screen
      recording analytics. Google Analytics would provide data about website
      visitors and the business experiment, and Hotjar could be used to research
      user behavior by screen recordings which captured the user’s actions;
      scrolling and pauses, where they clicked, and how they use the drop-downs
      and shopping basket. Hotjar also provides click maps and heatmaps to
      analyze the entire data as behavioral patterns. This combination of
      datasets would provide us with data to use as experimental evidence for
      decision making.
        </p>
        <p>
      To validate the value propositions of business model A and B, a
      small budget was allocated for Facebook and AdWords campaigns.
      These campaigns would create the traffic for the split test and this
      enabled us to compare the engagement with each value proposition during
      the same experiment.
      </p>
      <BlockQuote>
        Much to our
        surprise, the disruptive concept was the clear winner.
      </BlockQuote>
      <p>
      <b>Day 5: Evidence from the experiments</b>
      </p>
      <p>
      As the team met up again on Monday, the results were in: much to our
      surprise, the disruptive concept was the clear winner. This led us to
      speculate whether the experiment taking place over the weekend perhaps
      excluded potential small business customers and, more generally, whether
      the results could really be that positive. It was decided to re-run the
      test again for another two days.
      </p>
      <p>
      With the experiments continuing to provide data we also interviewed L&T’s
      key stakeholders to better understand what could be some simple and easy
      ways to get this concept to market.
      </p>
      <p>
      <b>Day 6: Findings</b>
      </p>
      <p>
      We spent some time going through the screen recordings from the Hotjar
      data and it provided us with interesting insights. For example, users
      would stop to read the value proposition as well as put items into their
      carts, indicating that they perceived this to be an actual product.
      </p>
      <p>
      The second research case discovered a potential business opportunity for
      an after-market of unused construction material, which, surprisingly, was
      not seen as interesting by the construction companies in the same context.
      The reasoning for this decision was made from the aftermarket’s relevance
      to their core business.
      </p>
      <p>
      <b>Day 7: Conclusions</b>
      </p>
      <p>
      The last run of the business experiment provided more positive results for
      both models but there was still a clear preference for the disruptive
      concept. A summary of the sprint was created and key stakeholders
      interviewed to understand what worked well and how the process might be
      improved upon. Some traditional service design tasks were drawn up along
      with a run-through of the concepts with L&T’s legal department to move the
      project into an MVP phase and, potentially, even launch it as a pilot
      project. This innovation, despite still being in its infancy, has the
      potential to shift business models of the circular economy. The key to
      successful innovation is continuous experimentation since it can provide
      ways to get products to market quickly.
      </p>
      <BlockQuote>
        We made remarkable progress in one week.
      </BlockQuote>
      <p>
      Previous experiences of using ready-made design sprint methods to validate
      problems produced results that were not compatible with real-world
      execution. Our research discovered this same disconnect within design
      thinking projects. Instead, by taking the idea of time-boxed rapid
      validation from the design sprint and employing two essential business
      design tools, business model and value proposition canvases, we made
      remarkable progress in one week.
      </p>
      <p>
      L&T was especially pleased with the design of the experiment and how it
      provided them with useful data to support decision making and reduce risks
      in the sometimes messy front-end of an innovation project.
      </p>
      </Chapter>
      <CallToAction color="blue" large grid>
        <CaseContactInfo slogan="Let's validate your innovation.">
          <VilleArponen />
        </CaseContactInfo>
      </CallToAction>
    </Fragment>
)
