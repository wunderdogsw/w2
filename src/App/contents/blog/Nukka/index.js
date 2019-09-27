import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import Chapter from 'App/components/Chapter'
import BlockQuote from 'App/components/BlockQuote'

import heroThumb from './WDW-nukka.jpg'
import hero from './WDW-nukka.jpg'

export default () => (
  <Fragment>
    <MainTitle narrow>We Do Wunders — Nukka, Designer</MainTitle>
    <SubTitle useAsMetaTitle>By Nukka&nbsp;&nbsp;•&nbsp;&nbsp;Jan 30, 2019&nbsp;&nbsp;•&nbsp;&nbsp;Read time 4 min</SubTitle>
    <Keywords>culture, Berlin </Keywords>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Oodi" />
    <Chapter>
      <p>
        <i>Wunderdog looks and feels like the Doggos that work at Wunderdog. We
        wanted them to tell you in their own words who they are and what they do!</i>
      </p>
    </Chapter>
    <Chapter>
      <p>
        Hi!
        I’m Heini, a game nerd and a UI/UX designer at Wunderdog. Besides designing
        UX, I do graphics and illustrations. My recent passion is boxing. That’s
        a good way to balance my work, which is basically sitting in front of a
        computer. I enjoy writing and attending to small gigs, and I once
        organized a mini-festival. One day I would like to finish a personal game
        project that has been going on for a while now. I’m originally from Middle
        Finland, from the tiny town of Saarijärvi.
      </p>
    <BlockQuote>
        "As a teenager, I decided that as soon as I can I’ll leave the town behind,
        go see the World and start studying media!”
    </BlockQuote>
      <p>
        It might sound like a cliché, but I’ve always known that I want to do
        something creative for a living. As a teenager, I decided that as soon
        as I can I’ll leave the town behind, go see the World and start studying
        media!
      </p>
      <p>
        After the adventures of studying Media and Design all around Finland, I
        decided to settle down in Helsinki. I first pursued a career in the
        gaming industry but noticed soon, that I’m more drawn to the software
        world. Perhaps, because I had begun to do more and more UI related projects
        around that time. Wunderdog caught my eye for having a very warm, cozy,
        and welcoming vibe. What especially convinced me, was the
        “Culture manifest” of Wunderdog, something I had not yet seen in other
        companies. They seemed to share the same values I personally did, and I
        got a feeling, that I would fit well into this community.
      </p>
      <p>
        So I applied. The recruitment process was very quick and no-nonsense.
        Before I knew it, I was hired.
      </p>
    <BlockQuote>
        "Even though I’m a consultant, the core of my work is still “basic crafts”
        which means that aside from meetings, I sit on my desk and draw and
        prototype.""
    </BlockQuote>
      <p>
        Nowadays I start my Mondays off with the most important tasks of the work
        week. This way, the urgent things are taken care of right away. I often
        have more than one client project going on at the same time. Wunderdog
        being a very flat organization, I interact directly and effortlessly with
        the clients. This makes working easy and also the communication with the
        customer more personal. I like it that way.
      </p>
      <p>
        I’m the boss of my own work, which gives me a lot of freedom and
        responsibility. When working in a team, I make sure that our coders and
        I speak the same language. I always try to make the design transition to
        development as easy as possible. Using tools like Zeplin and prototypes
        is very helpful. Usually, cooperation in a team is efficient, since we
        know each other well and everyone is committed to the open culture of
        communicating.
      </p>
      <p>
        Even though I’m a consultant, the core of my work is still “basic crafts”
        which means that aside from meetings, I sit on my desk and draw and
        prototype.
      </p>
      <p>
        Working in projects suits me perfectly. I enjoy changing environments and
        new challenges. Meeting a lot of people and getting to know new industries
        keeps the job interesting. I currently work on customer’s old software
        that needs re-design UX/UI-wise and lots of new features. Meaning lots
        of work on understanding the needs of the end-users and keeping the design
        as simple as possible. There are multiple users with different needs,
        which makes the design a challenge. I mainly use Sketch, all Adobe
        programs, Invision, and Pen & paper when working.
      </p>
    <BlockQuote>
        "Some designers who are not working in the technology industry may have
        prejudices about it. A typical one that I hear is that you need to know
        how to code and be very tech-savvy"
    </BlockQuote>
      <p>
        Some designers (at least in my circle) who are not working in the
        technology industry may have prejudices about it. It can feel
        intimidating, especially to women, since the industry is male dominant.
        One typical prejudice I’ve heard many times is that you need to know how
        to code and be very tech-savvy in order to work as a designer in a tech
        company. Or that developers are too introverted to even get to know.
        My experience is quite the opposite!
      </p>
      <p>
        Obviously, it really helps if you know the basics of coding. However, you
        should not be scared of applying to technology companies just because you
        don’t know how to code. It is not rocket science to learn the basics of
        it, and it is definitely something you can learn from your colleagues
        along the way. Not a prerequisite.
      </p>
      <p>
        The way work is organized at Wunderdog guarantees there’s a competent
        team in solving problems. Each member focuses on their own core competence
        but helps each other out in everything needed. There’s never a situation
        where you’re left alone with a problem. In addition to your team, you’ll
        always have the support of the 80 other doggos working at Wunderdog. An
        open culture, free-time activities and working in teams makes sure that
        one learns to know his/her colleagues. And they’re awesome!
      </p>
    </Chapter>
  </Fragment>
)
