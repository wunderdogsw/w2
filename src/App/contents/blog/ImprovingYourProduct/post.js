import BlockQuote from 'App/components/BlockQuote'
import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import TransitionLink from 'App/components/TransitionLink'
import React, { Fragment } from 'react'
import photo1 from './productanalytic1.png'
import photo2 from './productanalytic2.png'
import photo3 from './productanalytic3.png'
import photo4 from './productanalytic4.png'
import hero from './product-development.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        Whether you are a product owner, product manager, business owner, CEO, director, entrepreneur, or practically
        any other name-your-title in an organisation, the chances are that you have a say in product development. With
        that in mind, let’s start with the assumption that you are making decisions regarding your product.
      </p>
      <p>
        Such decisions include what to build in the first place and consequently what not to build, which in fact, is
        even more critical decision. Once you have a backlog of product features, you decide which features to
        prioritise and which ones can wait for later sprints. Right now, let’s assume you already have a product out
        there in the open and that you are set to improve it by updating features and building new ones.
      </p>
      <BlockQuote>
        We as product people have high hopes of what will happen to a product once we get to launch those new features.
        Obviously, the use of your product will shoot through the roof.
      </BlockQuote>
      <p>
        You have a backlog full of feature ideas that will take the world by a storm. We as product people have high
        hopes of what will happen to a product once we get to launch those new features. Obviously, the use of your
        product will shoot through the roof.
      </p>
      <p>
        However, before making life-changing decisions on what to build, let’s first analyse what happens in your
        product. How your customers use your product? Is every one of them using all the features all the time?
      </p>
      <p>Let’s face it. That’s never the case.</p>
      <p>
        Before diving head-first into prioritising your feature backlog and roadmap, thus allocating your team’s
        valuable time, you should analyse which features are used by what types of customers. Depending on the tools you
        use, this analysis might take anything from few minutes to few days. For example, a simple database query to
        identify feature use might take only a few minutes by technical people. On the other hand, to include additional
        product folks, using off-the-shelf tools such as Amplitude or Mixpanel is a sound option. We like to use such
        tools, since product analytics should be the concern of everyone in the product team, not just the technical
        people.
      </p>
    </Chapter>
    <Chapter>
      <h2>Feature Review</h2>
      <p>
        Now that you have the means in place to understand how your customers are using the product let’s discuss what
        you actually want to review. We like to call this exercise a feature review.
      </p>
      <p>
        The first step in a feature review is to list all your core, value-adding features, leaving out admin features
        such as logging in, resetting password etc. since they don’t deliver value. Also, features that are available
        for only a certain group of customers (such as custom plans) should be analysed separately.
      </p>
      <p>
        For each feature, place it on two axis: how many of your customers use it and how often it’s used. The outcome
        might look like this:
      </p>
      <Image src={photo1} alt='Backlog' />
      <p>
        Features that are on the top right corner are the ones that create value for your customers. These features are
        the ones they signed up for.
      </p>
      <p>
        Another way is to create a chart of what percentage of users use a certain feature, like this for a ride-hailing
        app:
      </p>
      <Image src={photo2} alt='Chart' />
      <p>
        In the dream world, you only have features that are used by most of the people most of the time. That is just
        not the case and in reality and the feature adoption could look more like this:
      </p>
      <Image src={photo3} alt='Chart2' />
      <p>How did this happen?</p>
      <p>How did you end up building and maintaining those rarely used features in the first place?</p>
      <p>
        You might have multiple stakeholders in your organisation that believe they have a feature idea that will change
        the world. Sales might from time to time tell you that they’ve lost sales so many time because you don’t have
        this nifty little feature.
      </p>
      <p>
        Eventually, you built it, but the data shows lousy adoption. It’s rarely used by a small number of customers.
        Yet you’ve spent time designing and developing it. Not to mention fixing small bugs and preserving compatibility
        between other features.
      </p>
      <p>
        So your feature review reveals some features that are the essence of the product, and most likely some features
        that do not add much to it. Your responsibility as a product leader is to focus on the features that drive you
        towards{' '}
        <TransitionLink to='https://wunder.dog/blog/north-star-metric'>
          the common shared goal,
        </TransitionLink>
        your North Star Metric (NSM). That might mean developing new features, but also modifying and removing existing
        ones that for some reason steer you away from the NSM.
      </p>
    </Chapter>
    <Chapter>
      <h2>Making Product Decisions</h2>
      <p>
        So, you’ve done the feature review. What to do with the results? You have (hopefully) identified features that
        drive you towards the NSM. For those features that are not your champions, you must make a tough decision
        whether to improve or remove them from your product.
      </p>
      <Image src={photo4} alt='Chart3' />
      <p>
        Features on the top right corner are your champions. Protect them with all you got. When considering improving
        those features, ask yourself twice which direction on the graph the improvement will move the feature.
      </p>
      <p>
        Features close to the left side with limited adoption are on the borderline cases. Do you really need them?
        Prepare to kill or radically improve them to increase adoption.
      </p>
      <p>
        However, the features in between the two extremes are the most difficult to determine what to do with them. You
        must decide to make{' '}
        <TransitionLink to='https://medium.com/@WunderdogSW/the-first-mistake-in-your-software-project-6fdbc2f2bad0'>
          them incrementally better
        </TransitionLink>
        , try to get more people to use them more often, improve adoption, or make the tough decision to remove them
        from your product.
      </p>
      <p>
        Deciding what to do with your current features is tough enough, but do you remember that you still have the
        backlog of new feature ideas. Should leave the product as it is and build new features or should you focus on
        streamlining current features and postpone new ones? How on earth can you prioritise all of this?
      </p>
      <p>Whatever your next steps may be, your first step at this point should be the feature review.</p>
    </Chapter>
  </Fragment>
)
