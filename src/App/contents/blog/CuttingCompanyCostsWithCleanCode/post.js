import React, { Fragment } from 'react'

import BlockQuote from '../../../components/BlockQuote'
import Chapter from '../../../components/Chapter'
import Image from '../../../components/Image'
import TransitionLink from '../../../components/TransitionLink'
import photo2 from './clean-code-wunderdog2.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        <i>
          Learning to write clean code is hard work. It requires more than just
          the knowledge of principles and patterns. Taking decisions is
          difficult, but at the end of the day, when you are a developer,
          ‘clean code’ is a proof of expertise and proficient delivery. If you
          are a business, relying on clean code will make your business more
          agile and will save you unnecessary costs in the long run. Here’s why.
        </i>
      </p>
    </Chapter>
    <Chapter>
    <h2>What is dirty code, and why is it so expensive?</h2>
      <p>
      Before learning what ‘clean code’ means, we need an idea of what
      ‘dirty code’ is. Dirty code usually happens when a developer or a team is
      trying to code fast and add new features quickly without considering the
      code quality. The binomial “clean” vs. “dirty” comes from the idea that
      the code can be “cleaned up later” which often doesn’t happen.
      </p>
      <p>
      One of the negative consequences of fast coding or ‘dirty code’ is that it
      often comes at a high cost. The code can function, but in the long run,
      it can entail countless hours of fixing, refactoring, or spending on
      resources, especially when it has been poorly written or has become messy.
      Let’s put forth an example: imagine a team trying to add a new feature.
      If this new feature breaks two or three other features in the application,
      you –and if you have one, your team– have a problem. The outcome is that
      eventually, you’ll have to rewrite it, forcing your business to invest
      extra capital on it and your developers to sweat it out.
      </p>
        <BlockQuote>
        One of the negative consequences of fast coding or ‘dirty code’ is that
        it often comes at a high cost.
        </BlockQuote>
        <h2>What is clean code, and why is it so effective?</h2>
        <p>
      Clean code makes your code logic straightforward. It’s easy to maintain
      by other developers regardless of its original author. It should be
      modular, having every part implemented to do one function, and containing
      no duplication. When using entities like classes or functions, the code
      should be limited and short.
      </p>
      <p>
      If all these points are considered, it will be very easy for any new
      developer to be on board and to maintain an application smoothly, which
      in the long run is going to spare any business or owner extra costs. In
      this sense, the “KISS” concept stands: “Keep It Simple Stupid”. How can
      we implement it? Here are some tips.
    </p>
    </Chapter>
    <Chapter>
    <h2>6 tips to write clean code</h2>
      <p><b>1. Make your code readable. </b> Techniques such as whitespace,
      line breaks, indentation and empty lines are easy to implement and
      they make a difference. You can also use tools like “Prettier” for help.</p>
      <p><b>2. Functions, Classes, Objects. </b> The Single Responsibility
      Principle (SRP) says that functions, classes and objects have to do one
      thing and one thing only. If it’s an object you may need to break it into
      one or more objects; if it’s a function you can use extract method
      refactoring on it. Don’t forget to implement the “separation of concerns”
      concept in your code.
      </p>
      <p>
      Also they should be short and small to make them easy to understand and
      easy to maintain.
      </p>
      <p><b>3. The DRY concept: “Don’t repeat yourself” to avoid duplication. </b>
      Duplication can lead your code to be a mess and make it hard to understand.</p>
      <p><b>4. Be consistent. </b>A good project start is always to begin writing
      high quality clean code. However, as time passes, you’ll add more features.
      Usually at this point the code level starts to degrade, so it’s very
      important to be consistent and never give up your initial standards.
      On top of this, if for any reason you developed a quick and dirty patch
      (perhaps a hotfix, or a last-minute requirement), always keep track of
      this technical debt and reserve some time each sprint to tackle it.</p>
      <BlockQuote>
      A tip: classes and objects
      should have noun names, and functions should have verb names.
      </BlockQuote>
      <p><b>5. Meaningful naming vs. comments. </b> Meaningful names and comments
      in programming have an inverse relationship, which means the more you have
      meaningful names in your program, the more you don’t need to add comments
      explaining what’s going on. In other words, don’t spare time thinking
      about good naming. Don’t hesitate to use a long name: a long descriptive
      name is much better than a long comment (remember: good code doesn’t need
      comments to explain it).
      </p>
      <p>
      In programming, developers use names for everything (files, folders,
      variables, functions, classes, etc). You will have to spend some time
      naming and thinking about naming. Discuss it with your teams and agree
      to follow similar naming patterns. Remember you can always rename in the
      future if you find a better meaningful term. A tip: classes and objects
      should have noun names, and functions should have verb names. Don’t forget
      to use good conventions to make your names readable.</p>
      <p><b>6. Unit tests. </b> When you write a unit test in your application,
      you’ve hired a symbolic bodyguard for your business. Without test suites
      it’s not guaranteed that the addition of a new feature in your application
      cannot break another feature or part in your application. Having a test
      suite in our production code is very important and you shouldn’t skip it.
      By wiring test units with high coverage, you will be more confident to add
      new features and vice versa. The end result? A more dynamic code with a
      high level of maintainability.</p>
      </Chapter>
      <Chapter>
      <h2>Saving business costs with clean code</h2>
      <p>
      In a nutshell, code craft is not only about writing fancy code. It’s about
      delivering value in the present that can be sustained in the future. In
      the past few weeks, the CoVid-19 crisis has forced most companies to enter
      a saving-costs-mode. Clean code is one of the most obvious ways to do it,
      because it will deliver a continuous stream of value at the same time it
      avoids technical debt, which can tower over a business. Do you want to
      check a practical example? Check our <TransitionLink to='https://wunderdog.fi/blog/domain-driven-design-in-practice'> Domain-Driven Design series</TransitionLink> or our
      <TransitionLink to='https://wunderdog.fi/work/fashion-ecommerce'> Berlin ecommerce project.</TransitionLink>
      </p>
    </Chapter>
  </Fragment>
)
