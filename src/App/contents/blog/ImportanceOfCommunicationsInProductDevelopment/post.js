import BlockQuote from 'App/components/BlockQuote'
import Chapter from 'App/components/Chapter'
import TransitionLink from 'App/components/TransitionLink'
import React, { Fragment } from 'react'
import hero from './communication.png'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        Product development is hard. Simplifying a complex problem into a lovable product or service requires team
        effort, knowledge and empathy for the users. But it is still relatively simple compared to communication. To set
        the stage, let’s take Osmo A. Wiio’s law which claims that “communication usually fails, except by accident”. We
        are bound to fail unless we accidentally get things right.
      </p>
      <BlockQuote>Osmo A. Wiio’s law claims that “communication usually fails, except by accident.</BlockQuote>
      <p>
        At the same time, I can safely say that communication is the secret ingredient in any team effort. Whether it is
        sports, family or building digital services. It was until I was around 14 years old when I had my a-ha moment
        regarding the importance of communication. We had a basketball team of talented individuals, but failed to reach
        our full potential and lost tight matches. It felt miserable back then.
      </p>
      <h2>Lessons learned on the basketball court</h2>
      <p>
        Having watched our team crawl, our coach told us that we need to start seeing and hearing each other on the
        court. He stressed that to be seen and heard, we needed to make ourselves heard and seen as well. And that’s
        what we started to do. Communicate explicitly by speaking and complemented that with non-verbal body language
        and various mutually agreed signs.
      </p>
      <p>
        Most importantly, we were always on the look for receiving signals from others, not primarily focused in
        self-centric talking. We transformed into a team that truly played together as a single unit, had fun on the
        court, and as a by-product of all this, we started to win and were the team to beat.
      </p>
      <h2>Communication and product development</h2>
      <p>
        That’s all fine and dandy, but how does this really map to software product development? In the good old{' '}
        <TransitionLink to='http://agilemanifesto.org/'>agile manifesto</TransitionLink> we agilists prefer “Individuals
        and interactions over processes and tools” and “customer collaboration over contract negotiation“. Two of the
        four pillars guiding us in modern development processes emphasize the importance of crisp communication.
      </p>
      <p>
        Also, the classic{' '}
        <TransitionLink to='https://dl.acm.org/citation.cfm?id=352194'>Five Orders of Ignorance</TransitionLink>{' '}
        publication states that software development can be viewed as knowledge acquisition and ignorance reduction. It
        is easy to agree with this, especially when working on a greenfield project. In these projects, the information
        is often gathered by applying human-centric design methods into product development. The success is highly
        correlated with the ability to communicate and capture the problem domain into designs and software models.
      </p>
      <p>
        When discussing product development, we can’t bypass{' '}
        <TransitionLink to='https://en.wikipedia.org/wiki/Conway%27s_law'>Conway’s law,</TransitionLink> which states
        that “organizations which design systems (in the broad sense used here) are constrained to produce designs which
        are copies of the communication structures of these organization”. If we combine poor communication into this
        mix, then what kind of systems are we expected to create? We end up modelling mistaken and inaccurate
        communication structures into systematic machines that are very effective in executing wrong orders.
      </p>
      <h2>Failure to communicate</h2>
      <p>
        Many years ago, I had joined a new team and I was highly motivated to ship some code and show my skills. The
        team’s product owner played his part and we had a well-organized backlog at our disposal. But there was
        something awfully wrong. Silencio, our team was silent most of the time. We gathered for the mechanic daily
        stand up, had quiet lunch and then went home. The business problems we tried to solve were pretty
        straightforward with very little business logic, but we still had no clue of the correct business rules. The
        customer was not co-located and we were a disconnected team.
      </p>
      <p>
        Technically we played the Scrum game well, but we did not deliver and I felt lost. Regardless of my feeble
        efforts to get communication to a par level, I failed. We had no connection and no communication medium. Luckily
        the team was dismantled due to other business reasons. That team had no capability to produce purposeful
        software regardless of our technical skills.
      </p>
      <h2>A success story and a hope for the better</h2>
      <p>
        The dysfunctional team was very difficult for me mentally, because prior to this failed team I had just worked
        in a team that communicated with a totally different mindset. The business domain was extremely complex and the
        team had no prior history of working together.
      </p>
      <p>
        Regardless of all this, we were able to nail down the complex requirements. We discussed every corner of the
        domain from different angles and did that constantly. We listened actively. We modeled the domain visually and
        had it on our team wall. The customer was co-located and we were able to go through every single detail whenever
        there was a need for it. Also, we had a psychologically safe environment, so we weren’t afraid of mistakes and
        could question the requirements if we had a more suitable solution in mind. Without this high level of
        communication, the project would have been a disaster.
      </p>
      <h2>Methods for a higher signal to noise ratio</h2>
      <p>
        How to get communication right then? Well, according to Wiio’s theory we can only succeed accidentally, right?
        But there are a few things which we can do to increase our odds in hitting the accident. Number one thing is to
        learn to listen, which is a lot harder than many think. Listening is not waiting for your turn to talk.
        Listening is asking follow-up questions and being interested in the message and the one who delivers it.
      </p>
      <p>
        The second most important thing is to make sure we are explicit in transmitting information and make sure that
        the message has been received. Also, when we receive information we need to be explicit in our acknowledgment
        response or ask complementary questions. We developers can look for an example from HTTP protocol or any
        programming API. The more explicit schema or type system we have, the more likely we are to succeed in utilizing
        third-party components. Communication is always a two-way street: request and response, not forgetting data
        validation and processing — listening.
      </p>
      <p>
        Misconceptions are common and often the root cause of many failures. The more complex and difficult the topic
        the more likely one should favor face-to-face communication. Body language and facial expressions provide
        indispensable context-specific information when meeting people in real life.
      </p>
      <p>
        Regardless of my efforts to focus on communication, I still often fail. There is always room for improvement.
        When we fail in communication, relationships can end, countries are driven into conflicts and the products we
        build to help our customers don’t serve the purpose. We make poor decisions based on misinterpreted and
        incomplete information. But I believe there is still hope. If we choose to put that little extra effort into
        communication, listen with empathy and be explicit in transmitting and receiving the data, we might well end up
        crafting purposeful products and make the world a better place. I challenge you to try it.
      </p>
    </Chapter>
  </Fragment>
)
