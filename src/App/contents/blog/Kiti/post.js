import BlockQuote from 'App/components/BlockQuote'
import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import React, { Fragment } from 'react'
import hero from './kiti.jpg'
import photo1 from './kiti2.jpg'

export default () => (
  <Fragment>
    <Image src={hero} alt='Kiti' />
    <Chapter>
      <p>
        <i>
          Wunderdog looks and feels like the Doggos that work at Wunderdog. We wanted them to tell you in their own
          words who they are and what they do!
        </i>
      </p>
    </Chapter>
    <Chapter>
      <p>
        Hi! I’m Kiti, a software developer at Wunderdog with a background in mathematics and education. In fact, I was
        supposed to be a math teacher.
      </p>
      <p>
        Programming got me hooked by half-accident. I was working at the University of Helsinki at the Department of
        Mathematics and Statistics. Our team developed teaching methods for university courses and we cooperated a lot
        with the Department of Computer Science. At the time they had one of their very first MOOCs (Massive Online Open
        Course), the basics of programming. I was curious to see how the course worked process-wise. Few weeks into the
        course, I began to think that programming is quite cool and that, maybe someday, I could do that for a living.
        Now here I am, a few years later!
      </p>
      <BlockQuote>“I was supposed to be a math teacher but programming got me hooked by half-accident.”</BlockQuote>
      <p>
        As a developer, most of my time is spent in front of the computer. If I’m not coding, I’m reading or reviewing
        code, reading the documentation or searching for information. Sometimes the feature I’m implementing can be
        complex or somehow tricky. In those cases, I like to take the analogic approach: draw things on paper and try to
        solve the problem that way.
      </p>
      <p>
        However, being a consultant, my days are much more than staring at a computer — I’m constantly in contact with
        people. With my teammates, agreeing on how we should implement things, juggling ideas or trying to understand
        the issue at hand. And with the customer, trying to understand what we are doing and why. Sometimes the first
        solution or idea is not the best one so we as consultants need to dig deeper in order to understand the core
        problem behind the feature request.
      </p>
      <p>
        So this definitely isn’t lonely work and that’s part of the charm for me! Collaborative company culture supports
        company-wide teamwork too, so even if my team at the time is a small one, we always have the support of everyone
        else at Wunderdog. And it works both ways, sometimes I help other teams at Wunderdog by facilitating
        retrospectives for them.
      </p>
      <Image src={photo1} alt='Albums' />
      <p>
        We are always working on the customer premises and I really like that. The direct benefit with this is that we
        can communicate face to face when needed and reach the right people more easily. But one indirect benefit is
        that I get to see the environment in which the customer works. Experiencing how they work is key to
        understanding them. And understanding the customer is essential for me to help them work better, which is
        basically what I do. What I really like about my job is that I get to deep-dive into different domains and learn
        how things work in different contexts and with different people. Similar problems are solved in so many ways in
        different places. It’s useful to get to know many perspectives.
      </p>
      <BlockQuote>“This definitely isn’t lonely work and that’s part of the charm for me!”</BlockQuote>
      <p>
        I feel that the most important quality of a consultant is the ability to listen. And being a good listener means
        that you hear more than they say. Asking a lot of questions gets you there. I think it’s a cliche but the good
        consultant has a sense of thinking outside the box. Obviously, being an outsider helps in this. I sometimes play
        with the idea that as consultants we are kind of detectives trying to solve problems.
      </p>
      <p>
        Working in teams is how the best solutions are usually found. Great team spirit is achieved when it feels nice
        to come to work, ideas fly and people are smiling and laughing. Even the tough and difficult issues can be
        discussed and tackled together. People are not afraid to try or experiment with new ideas and can show even
        their weaknesses and vulnerabilities. Good team spirit implies that you are accepted and belong to the group.
      </p>
      <BlockQuote>
        “I feel that the most important quality of a consultant is to be able to listen. And being a good listener means
        that you hear beyond the words.”
      </BlockQuote>
      <p>
        For me it’s important to do meaningful things, see the outcome of my work and feel that I’m helping someone or
        something. Defining what’s meaningful is not always easy to answer. Sometimes it’s using cool new technologies,
        sometimes it’s the actual endgame or product and sometimes it’s working with cool, motivated and talented people
        in a great team. At Wunderdog I’ve worked in several projects and in a few different roles. Having variability
        in work is important. Best kind of cases are the ones where I feel I’m learning something new. Wunderdog
        encourages us to try out new things and that’s why I like it here.
      </p>
      <p>
        Being someone who discovered programming as an adult, I want to encourage everyone who is interested in the
        subject to try it out. It’s worth it. It might not always be easy and there’s a lot to learn so patience is
        needed. Anyhow, with an open and curious mind, it’s totally possible! Programming is problem-solving so one gets
        to solve puzzles every day. It’s really cool to build something real (even if digital) and see it in use right
        away!
      </p>
    </Chapter>
  </Fragment>
)
