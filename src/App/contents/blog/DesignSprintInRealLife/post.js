import React, { Fragment } from 'react'
import Chapter from '../../../components/Chapter'
import BlockQuote from '../../../components/BlockQuote'
import Image from '../../../components/Image'
import TransitionLink from '../../../components/TransitionLink'

import photo1 from './calendar.jpg'
import photo2 from './L&T3.jpg'
import photo3 from './fb-results.jpg'
import photo4 from './prototypes.jpg'
import photo5 from './hotjar.jpg'
import photo6 from './ad-campaign.jpg'


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
        You can download our Design Sprint e-book as a pdf <TransitionLink to='http://landing.wunder.dog/designsprint'>
        here.</TransitionLink>
        </i>
      </p>
      </Chapter>
      <Chapter>
    <h2>Introduction</h2>
      <p>
        Our goal was to use the <TransitionLink to='https://wunder.dog/blog/design-sprint'>
        Design Sprint</TransitionLink> methodology and include as much
        experimentation, to create evidence that would reveal the viability of
        the innovation. The insight for the “construction marketplace” came from
        L&T's strategy days, where a number of initiatives were created
        through ideation.
        </p>
        <p>
        Initial problem definition from L&T's brief
        described the construction companies, which are their customers,
        to have the following problem:
        Construction companies always order
        excessive amounts of resources in order to avoid material delays when
        the construction project is on-going, due to labor costs. This causes
        the unused resources ending up as waste. And this creates unnecessary
        waste management costs to the construction company, lowers their
        environmental performance and is a detriment to the circular economy.
        </p>
        <p>
        L&T wanted to explore how to solve this problem with a design
        sprint, which had the following challenge statement:
        “How might we create an after-market for the unused construction
        material for consumers so that it could be used in its original intent?"
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
        provided additional data to validate the problem. Smaller construction
        companies and construction managers provided their estimations on the
        share of unused material to the total waste. To our surprise, the
        estimate
        was thought to be in the range of 10-20%. Also, the consumers were
        recruited to be available for interviews during the sprint so we could
        access four consumers who had the construction of their own homes
        currently on-going.
      </p>
      <p>
        The kick-off to Design Sprint started with a team canvas that was
        quickly
        mapped to agree on the purpose of this sprint. The key insights were
        shared and it was mutually agreed that we could quickly advance to
        prototyping to make sure we could iterate the concept at least once
        during the sprint as all participants agreed on the potential benefits
        of
        the concept. We decided to use the business model canvas and value
        proposition as the tools to make sure we are creating hypotheses and
        ideas for the most business-critical aspects of this concept.
      </p>
      <Image src={photo1} alt='L&T2' />
      <p>
        We decided to experiment with this approach in the business model
        canvas.
        We found the most important zero point for the cost of construction
        waste
        to L&T’s business customers. However, this approach led us to discover
        another zero point for the material and this raised an interesting
        proposal for further investigation: “What if the products on the
        after-market were free and we would charge only for the logistics?”
      </p>
      <p>
        As we began the ideation based on key activities we had come up with two
        alternative solutions for the after-market:
        </p>
        <p>
        ° Low-cost after-market (online order & physical pick up)
        </p>
        <p>
        ° Zero-cost after-market (waste delivery)
      </p>
      <p>
        We identified the need to conduct a flash survey for consumers.
        We wanted to learn how they would react to unused but recycled
        construction materials and to understand the consumer’s needs and
        material interests more. The survey was quickly drafted with
        Surveymonkey and posted as a ‘market research’ to the discovered
        Facebook group, which had over 10.000 members of the target group
        we wanted to reach and could be considered as potential customers for
        the new concept.
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
        The interview’s revealed no interest from the business customers to
        develop an aftermarket for the unused materials as it was not seen as
        being anywhere near their core business. One of the interviewed
        construction managers actually shared insight from their construction
        company, where they had built a business scenario for an aftermarket.
        According to him, the business “would barely be profitable after
        transporting the unused material to a warehouse and if it would need to
        be transported again from there, the transportation costs would make it
        unprofitable.”
      </p>
      <p>
        The data from the flash-survey gave us more concrete data on the
        interest
        of consumers which we could use when creating the consumer value
        proposition.
      </p>
      <p>
        We proceeded to create the second experiment to validate consumer’s
        interest and research their behavior (jobs, pains, and gains).
        </p>
      <p>
        Two MVP scenarios were the basis of designing the experiments.
        Two realistic-looking webshops were quickly drafted in sketch and coded
        into responsive landing pages to split test the two ‘competing’ models,
        or as we named the test during the project: speculative
        ‘Business Battle Royale’.
      </p>
      <Image src={photo4} alt='prototypes' />
      <p>
        Both landing pages had Google Analytics and Hotjar screen recording
        analytics. Google Analytics would provide the data of visitors and the
        business experiment, and Hotjar could be used to research the user
        behavior by screen recordings which capture the user’s actions:
        How they scroll & pause, where they click, how they use the drop-downs
        and how they use the shopping basket. Hotjar also provides click maps and
        heatmaps to analyze the entire data as behavioral patterns. This
        combination would provide the data as experimental evidence for
        decision making.
        </p>
        <p>
        To validate the value propositions of business model A and B, a
        small budget was allocated for Facebook and AdWords campaigns.
        These campaigns would create the traffic for the split test and this
        enabled us to compare the engagement of value propositions during
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
        As the team met up again on Monday, the results were in. Much to our
        surprise, the disruptive concept was the clear winner. This led us to
        speculate did the weekend perhaps exclude the potential small business
        customers and were the results really that good. So it was decided to
        re-run the test again for two days.
      </p>
      <p>
        As the experiments were providing evidence we continued to interview
        L&T’s key stakeholders to better understand what could be the
        simple and easy ways to get this concept to the market.
      </p>
      <p>
      <b>Day 6: Findings</b>
      </p>
      <p>
        We spent some time going through the screen recording from the Hotjar
        data and it showed us interesting insights such as users stopping to
        read
        the value proposition and putting items into their carts by opening and
        closing the dropdowns which would indicate that they really perceived
        this to be an actual product.
      </p>
      <Image src={photo5} alt='hotjar' />
      <p>
        The second research case discovered the potential business opportunity
        for an after-market of unused construction material which to our
        surprise
        was not seen interesting from construction companies in the same
        context.
        The decision was made by reasoning it from the perspective of core
        business.
      </p>
      <Image src={photo3} alt='worksite' />
      <Image src={photo6} alt='ad-campaign' />
      <p>
      <b>Day 7: Conclusions</b>
      </p>
      <p>
        The last business experiment run provided better results for both models
        but there was still a clear advantage for the disruptive concept.
        A summary of the sprint was created and key stakeholders interviewed to
        understand what worked well and how the process might be improved.
        Some traditional service design tasks were listed as well as running
        the concepts through with L&T’s legal department to proceed with the
        project into an MVP phase and potentially launch it as a pilot project.
        This innovation has the potential of shifting business models of the
        circular economy but as it is still in its infancy. The key to
        successful
        innovation is continuous experimentation as it can provide ways to get
        this product to the market quickly.
      </p>
      <BlockQuote>
        We made remarkable progress in one week.
      </BlockQuote>
      <p>
        Previous experiences of using design sprints to validate problems by
        using
        the method ‘by-the-book’ has created results that do not connect with
        execution. The research discovered this same disconnect with design
        thinking projects. By taking the idea of time-boxed rapid validation
        from the design sprint and employing two essential business design
        tools,
        business model canvas and value proposition canvas, we made remarkable
        progress in one week.
        </p>
        <p>
        L&T was especially pleased with the design of the experiment and
        how it provided them useful data to support decision making and reduced
        risks in the fuzzy front-end of an innovation project.
      </p>
    </Chapter>
    </Fragment>
)
