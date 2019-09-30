import BlockQuote from 'App/components/BlockQuote'
import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import React, { Fragment } from 'react'
import heroThumb from './piispa-thumb.jpg'
import hero from './piispa.png'

export default () => (
  <Fragment>
    <Image thumbSrc={heroThumb} src={hero} alt='Piispa' />
    <Chapter>
      <p>
        <i>
          Wunderdog looks and feels like the Doggos that work at Wunderdog. We wanted them to tell you in their own
          words who they are and what they do!
        </i>
      </p>
      <BlockQuote>
        ”Fresh git, shiny stack, getting things done & mega cool pöhinä. Those are the things I like.”
      </BlockQuote>
      <p>
        Hi! I’m Piispa, 30 years old. I love Music, great beer and JavaScript (Jäsä as we call it in Finnish). I
        remember as a kid; my brothers borrowed a guidebook for coding for our Commodore 64 (the legendary kuusnepa).
        Since that memory has stuck, I guess that was the moment that got me excited about the coding. I’ve always liked
        everything creative, and I think that’s the best bit of coding too. Even though it’s logical it’s also very
        creative. That’s just always been my thing!
      </p>
      <p>
        At the moment I work with pretty normal web app & app project. The customer is small and really nice! I like the
        fact that I can literally just call out to the other side of the table if I need to ask or confirm something. I
        feel like things get done and they get done right.
      </p>
      <p>
        It sounds like a cliché, but the best part of being a consultant is that you get to see so many different people
        and ways of working. That makes the job interesting. In each customer project, you learn and see new things. It
        also keeps you updated technology-wise. And even though you work in small teams at customers’, there’s always
        someone of the almost 80 wunderdogs who you can ask for help if you need it! A good consultant needs to have
        excellent tech skills and to know how things in coding are in 2018 but even more important is that you’re able
        to vibe the customer as people and as a business.
      </p>
      <BlockQuote>
        At Wunderdog we don’t judge or boost our egos at the expense of others. People are genuine and nice. I’d be
        happy to have lunch with anybody here.
      </BlockQuote>
      <p>
        I like it when shit gets done and when it gets done well. Or right. Most of all I like when colleagues and
        customers are respected as persons and professionals! This is where Wunderdog hits it home. The colleagues are
        awesome, and projects have nice stacks. Office Fridays are great! The OpenSource thing where we get compensation
        for our projects is cool too since coding is what I like! But at the end of the day, it’s the people who make
        this the best! You can always ask someone for help. Or for a beer.
      </p>
    </Chapter>
  </Fragment>
)
