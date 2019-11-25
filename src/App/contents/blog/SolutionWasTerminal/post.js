import BlockQuote from 'App/components/BlockQuote'
import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import React, { Fragment } from 'react'
import TransitionLink from 'App/components/TransitionLink'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        <i>We all encounter a range of everyday problems in our lives, both large
        and small. At Wunderdog we’re no different, but we do have the advantage
        of being excellent problem solvers with some pretty advanced technical
        skills — helping us to find innovative answers to some of life’s tricky
        problems.
        </i>
      </p>
    </Chapter>
    <Chapter>
      <h2>A dark and drizzly problem</h2>
      <p>
        It was the end of October 2016. The hazy and drizzly weather made Helsinki resemble the mean streets of some
        film noir movie. On the day in question, I was just finishing my workday: closing applications on my laptop
        before throwing it into my backpack and heading to out the door.
      </p>
      <p>
        That day, like every other day back then, I needed to catch the bus back
        home. And as usual I’d left work without checking the timetable — I was
        in for another long wait before the bus turned up. As I watched the city
        lights reflect off the cold, wet streets I asked myself the question I
        had asked a million times before: why was I always too lazy to check the
        timetable before leaving work?
      </p>
    </Chapter>
    <Chapter>
      <h2>A terminal solution</h2>
      <p>
        Back at work, the last application I had open was a blank Terminal window.
        I am certain that every programmer knows the magic of that solitary cursor
        blinking in a pure black window. The minimalistic beauty of a raw and
        robust tool without any dropdowns, inputs, popups, or mouse clicks. While
        watching that blinking cursor I thought how cool it would be if I could
        just write my timetable query into Terminal and get the results I needed
        delivered straight back to me. As I stared at the black screen I suddenly
        realized the answer: a coder’s got to do what a coder’s got to do.
      </p>
      <p>
        That evening, I began to code a command-line-based route planner using
        JavaScript and it wasn’t long before I had the first version published
        to npm. That’s one of the reasons I love JavaScript: you simply get
        things done with it.
      </p>
      <h2>Problem solved</h2>
      <p>
        Here we are back in 2019 and my route planner has been downloaded more
        than 4,500 times. I have happy memories of programming the application
        and it taught me quite a bit — not to mention how much time it’s saved
        me from waiting for the bus or tram to arrive! One thing’s for sure, I
        couldn’t have done it without @HSLdevcom, so big thanks to them for
        providing such a great API for their public transport timetables. Check
        out the code of my route planner <TransitionLink to='https://github.com/anttikon/routahe'> here.</TransitionLink>
      </p>
      <p>
        <i>Piispa, an homme fatale with a terminal solution, has been coding at
        Wunderdog since 2015.
        </i>
      </p>
    </Chapter>

  </Fragment>
)
