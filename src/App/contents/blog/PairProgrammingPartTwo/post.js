import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import React, { Fragment } from 'react'
import photo2Thumb from './pairprog-thumb.jpg'
import photo3Thumb from './pairprog3-thumb.jpg'
import photo3 from './pairprog3.png'
import photo1Thumb from './piispavissy-thumb.jpg'
import photo1 from './piispavissy.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <p>This is part II of our “Pair Programming — Uncharted Territories” blog posts. See also Part I.</p>
    </Chapter>
    <Chapter>
      <p>
        Developers tend to use pair programming quite occasionally, which is understandable in a way. If the chemistry
        between peers is not at that good level, pair programming might not be necessarily an investment worth doing.
        According to our experience, however, pair programming can be tuned up to a level at which efficiency and
        happiness surpass clearly two lone individual programmers. In what follows, different levels of pair programming
        are listed and analyzed.
      </p>
    </Chapter>
    <Chapter>
      <h2>1. Basic Freemium Edition</h2>
      <p>
        A typical form of pair programming in which two random dudes try to get along with each other and solve a
        problem together is called _Basic Freemium Edition_. In other words, this is the no-frills model of pair
        programming.
      </p>
      <p>
        In Basic Freemium Edition, pair programming is often considered a pedagogic tool used when there is a problem
        that someone is not able to solve himself/herself. However, we believe that pair programming can be thought of
        as a tool that is used constantly for producing value for customer efficiently.
      </p>
    </Chapter>
    <Chapter>
      <h2>2. Battlecruiser X Robot Hand</h2>
      <p>
        In Battlecruiser X Robot Hand (BxR) pair programming, there are two clear roles for the peers. Battlecruiser
        functions as the primary operator/programmer and Robot Hand as her adjutant who is capable of doing rapid, small
        tasks initiated by Battlecruiser. Meanwhile, Battlecruiser can continue on her primary task and can then pull
        Robot Hand’s contributions at a suitable moment.
      </p>
      <p>
        BxR concept is not only about Battlecruiser giving small tasks to Robot Hand. It is also about becoming
        continuously aware of the current problem, big picture and hindrances and aiming for a very good flow by
        optimizing communication and mutual practices.
      </p>
      <p>
        To practice BxR successfully, it requires not only seamless chemistry between programmers but also similar
        understanding about programming philosophy and best practices at different levels of software development. You
        do not have time to argue all the time about semicolons, commit message formats or sufficient test coverage.
      </p>
    </Chapter>
    <Chapter>
      <Image thumbSrc={photo1Thumb} src={photo1} alt='PiispaVissy' />
    </Chapter>
    <Chapter>
      <h2>3. Battlecruiser X Robot Hand Remote Warp Speed Edition</h2>
      <p>
        BxR Remote Warp Speed Edition is like BxR on steroids. First of all, in BxRHRWSE the IDEs of both Battlecruiser
        and Robot Hand are connected with a live coding plugin which enables a file to be edited simultaneously by both
        programmers.
      </p>
    </Chapter>
    <Chapter>
      <Image thumbSrc={photo2Thumb} src={photo2Thumb} alt='OneBrain' />
    </Chapter>
    <Chapter>
      <p>
        Secondly, for BxRHRWSE, good chemistry is not enough. In addition, there must be at least a small amount of
        telepathic abilities between the peers.
      </p>
      <p>
        When Battlecruiser writes code, she should not normally have to say what she is going to do or what she might
        need; Robot Hand has to sense Battlecruiser’s intentions so well that she can augment Battlecruiser’s work
        real-time — they may even edit a same line of code simultaneously and seamlessly. Both work so intensively that
        there is no room for all kinds of hassle. This also helps both programmers to avoid causing unnecessary context
        switches to each other.
      </p>
      <p>
        However, using BxRHRWSE does not imply that both peers should write code all the time; only when it feels useful
        and natural. The main goal is to achieve a top-tier mutual flow and embody it into a programming two-node
        hivemind.
      </p>
      <p>
        Whereas Basic Freemium Edition can be considered as single-thread programming, BxRHRWSE often proceeds with two
        highly utilized threads. In Basic Freemium Edition, one of the peers has often various needs, like suggesting a
        change or obtaining some information from some file but cannot do those because the only thread is blocked. The
        options are to either wait or cause an interruption and a context switch. BxRHRWSE, in turn, makes it possible
        for you to do your task without choosing any of the aforementioned.
      </p>
    </Chapter>
    <Chapter>
      <Image thumbSrc={photo3Thumb} src={photo3} alt='OneBrain' />
    </Chapter>
    <Chapter>
      <p>
        Finally, pair programming is not a silver bullet, of course, but if you have a really good coding pal, you might
        want to try how much you are able to level up your pair programming. It is also possible that even if there is
        some guy that does not feel like your type, by pair programming you might find new aspects about each other and
        end up being good friends. Like us.
      </p>
      <p>Read Pair Programming — Uncharted Territories Part I</p>
    </Chapter>
  </Fragment>
)
