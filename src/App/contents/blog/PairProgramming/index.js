import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import Chapter from 'App/components/Chapter'
import TransitionLink from 'App/components/TransitionLink'


import photo1Thumb from './pairprog1-thumb.jpg'
import photo1 from './pairprog1.png'

export default () => (
  <Fragment>
    <MainTitle narrow>Pair Programming — Uncharted Territories — Part I</MainTitle>
    <SubTitle useAsMetaTitle>By Piispa & Vissy&nbsp;&nbsp;•&nbsp;&nbsp;Feb 13, 2019&nbsp;&nbsp;•&nbsp;&nbsp;Read time 4 min</SubTitle>
    <Keywords>programming, teamwork </Keywords>
    <Chapter>
      <p>
        This is part I of our “Pair Programming — Uncharted Territories” blog
        posts. See also Part II.
      </p>
    </Chapter>
    <Chapter>
      <p>
        You all know that trustworthy buddy who may not be your best friend but
        who is always ready to listen to you when you feel that your life is not
        going as expected? Yes, it is pair programming. It feels often quite
        distant, albeit when you happen to practice it, you might wonder why you
        do not hang out with the peer more often.
      </p>
      <p>
        We know that when the size of a programming team increases, its relative
         efficiency often drops. So is pair programming doomed to be a method
         used only in special cases? A well-known software developer Martin
         Fowler has a rule of thumb which says that <TransitionLink to="https://www.martinfowler.com/bliki/CheaperTalentHypothesis.html">the efficiency of a
         programming team is the square root of the number of the programmers.</TransitionLink>
         For example, if a team consists of two programmers, the real efficiency
         would equal 1.4 times a single programmer. Question is, can you surpass
         this limit with pair programming?
      </p>
      <p>
        We believe you cannot only surpass it but surpass it clearly — if some
        conditions are met.
      </p>
      <p>
        In this first part, we will go through the advantages of pair programming.
        In Part II TÄHÄN LINKKI, we list different levels of pair programming and explain what
        is needed to fine-tune your pair programming from Opel Astra to Bugatti
        Chiron!
      </p>
    </Chapter>
    <Chapter>
      <h2>
        PROS
      </h2>
      <h2>
        Efficiency
      </h2>
      <p>
        Tasks given for the programmers usually consist of subtasks. For each of
        those subtasks, programmers have some probability of getting stuck.
        Let’s say a typical programmer has about 20% probability to get stuck in
        a single subtask during a task. Hence, if you have three spots where you
        could get stuck, you have a total of about 50% probability of getting
        stuck during the whole task. However, if there are two pair programmers
        who perceive the problems from different angles, the probability that
        neither of the peers solves a problem straightforwardly is 4% (20% x 20%),
        and during the whole task about 11%. Why is this important? Because most
        of the programmer’s time is spent when being stuck of some level.
        Successful pair programming removes many of those time- and energy-consuming
        periods.
      </p>
      <p>
        And there’s more to this. The following figure visualizes a simple comparison
        of possible timelines for developing a task in a solo-mode and by pair
        programming.
      </p>
    </Chapter>
    <Chapter>
    <Image thumbSrc={ photo1Thumb } src={ photo1 } alt="PairProgramming" />
    </Chapter>
    <Chapter>
      <h2>
        Decently distributed codebase knowledge
      </h2>
      <p>
        Nowadays development teams are quite well aware of the importance of not
        having parts of the codebase that are understood only by one developer.
        A common way to take care of this is to have peer reviews. However, when
        pair programming, knowledge is spread already in the programming phase
        — resulting in a much higher level of code knowledge for the pair
        programmer compared to peer reviewer. Practically both of the pair
        programmers end up having a deep understanding of the code — which will
        stay in memory for quite a long time. And the peer review — if it is
        needed at all — will be noticeably faster.
      </p>
    </Chapter>
    <Chapter>
      <h2>
        Cabin Fever Medicine
      </h2>
      <p>
        When you write code alone, you need to make numerous small decisions,
        starting from a single line of code. Many decisions will remain in your
        head causing scruples about whether you did it right or not and making
        it harder for you to focus on the next tasks. You might lose your
        perspective, get cabinet fever symptoms and make decisions that look
        weird to others. In pair programming, your mate may point out if you
        start to depart from the path. You will also stay sane because you are
        able to share your thoughts (programming-related but also other) continuously.
      </p>
    </Chapter>
    <Chapter>
      <h2>
        24/7 Rubber Ducking
      </h2>
      <p>
        When pair programming, you are using your peer as a rubber duck most of
        the time. This means that when you have programming-related thoughts,
        problems or solution proposals, you say them out loud. By doing this you
        may twig something you haven’t realized before.
      </p>
    </Chapter>
    <Chapter>
      <h2>
        Sparring
      </h2>
      <p>
        It is quite typical that when programming you end up spending your time
        by weighing up various alternatives for a variable name or something
        similar. “I feel this isn’t perfect… I can’t make up any better one
        though…”. However, you can quickly discuss this kind of things while pair
        programming.After receiving support from your peer that the variable name
        is excellent, you can leave the whole thing behind and push forward.
      </p>
    </Chapter>
    <Chapter>
      <h2>
        Effortless Micro Take-ups
      </h2>
      <p>
        Everybody knows the feeling when a task is yet to be started and is
        waiting like a monster, and you are tempted to open a social media
        channel or news site or you just drown in your thoughts. Pair programming,
        in turn, has partial built-in prevention for that because you are
        subconsciously aware that it will be twice as expensive to stop programming
        because you will also stop your peer’s work at the same time. When
        something, small or big, gets done, the presence of your peer urges you
        to move to the next task right away. Besides, slaying a dragon is much
        more fun to do with a friend than alone!
      </p>
      <p>
        Actually, just like every task consists of smaller tasks, every take-up
        consists of multiple smaller take-ups, micro take-ups. A micro take-up
        can mean starting to write a small function you need. Or sending an email.
        Or opening your backlog. As you might have noticed, micro take-ups get
        more expensive towards the afternoon, for example, but also because of a
        variety of other reasons. In fact, a high price of micro take-ups may
        significantly slow down your programming progress. Pair programming is
        a great aid for this matter since it strikes right at the potential
        source of inefficiency.
      </p>
    </Chapter>
    <Chapter>
      <p>
        Now let’s continue to Pair Programming — Uncharted Territories Part II
        in which we explore the different levels of pair programming. LINKKI!
      </p>
    </Chapter>
  </Fragment>
)
