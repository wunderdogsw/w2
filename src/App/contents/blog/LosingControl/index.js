import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import Chapter from 'App/components/Chapter'
import TransitionLink from 'App/components/TransitionLink'

import heroThumb from './i-had-a-problem.jpeg'
import hero from './i-had-a-problem.jpeg'

export default () => (
  <Fragment>
    <MainTitle narrow>I had a problem: I keep losing control</MainTitle>
    <SubTitle useAsMetaTitle>By Manu&nbsp;&nbsp;•&nbsp;&nbsp;April 1, 2019&nbsp;&nbsp;•&nbsp;&nbsp;Read time 2 min</SubTitle>
    <Keywords>javascript, HTTP, problem solving</Keywords>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Oodi" />
    <Chapter>
      <p>
        We all encounter a range of everyday problems in our lives, both large
        and small. At Wunderdog we’re no different, but we do have the advantage
        of being excellent problem solvers with some pretty advanced technical
        skills — helping us to find innovative answers to some of life’s tricky
        problems.
      </p>
    </Chapter>
    <Chapter>
      <h2>A remote problem</h2>
      <p>
        Imagine having power outlets at home that you can turn on and off by
        remote control. Cool, right? I’ve had some for several years now — they
        come in a pack of three with a simple remote for controlling them.
      </p>
      <p>
        In general, they worked just as you’d expect them to work, but over time
        I noticed a recurring problem: I had the outlets in two different rooms
        and it seemed that the remote control was always either lost or in a
        different room from me. Not so cool anymore..
      </p>
      <p>
        As this was clearly unpractical, I started to think of a solution. The
        more I thought, the more I was convinced that the remote control was
        pointless. What if the outlets could be controlled by phone, tablet,
        or computer instead, so long as I was connected to my home network?
      </p>
    </Chapter>
    <Chapter>
      <h2>A powerful solution</h2>
      <p>
        As it turned out, someone had already experienced the exact same problem
        and crafted a solution for it! All I needed to do was invest a small
        amount of money in the necessary equipment and dedicate a few nights to
        modifying the code for my particular needs.
      </p>
      <p>
        After a couple of long evenings investigating and programming, I had a
        web application running on Raspberry Pi that enabled me to control the
        power outlets with any device as long as it is on my home network. And
        I always have at least one device in the same room as I am!
      </p>
    </Chapter>
    <Chapter>
      <h2>Problem solved</h2>
      <p>
        Thanks to a few rows of code, I got rid of a useless gadget that always
        got lost. I’m back in control and everything’s cool again.
      </p>
      <p>
        Check out my code <TransitionLink to="https://github.com/jorilytter/remotestick-server">on Github.</TransitionLink>
      </p>
      <p>
        And if you can relate to my problem, <TransitionLink to="http://blog.polarcoder.net/2015/10/diy-home-automation-v1.html">here’s</TransitionLink>how to make your own solution.
      </p>
      <p>
        Not enough for you? If your inner engineer is like mine and always
        thinking of improvements, LINKKI CONTROL FREAKIIN!!!! take a look at how I further developed the
        system to include temperature and humidity monitoring.
      </p>
    </Chapter>

  </Fragment>
)
