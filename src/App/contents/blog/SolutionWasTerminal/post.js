import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import React, { Fragment } from 'react'
import { default as hero, default as heroThumb } from './i-had-a-problem.jpeg'

export default () => (
  <Fragment>
    <Image thumbSrc={heroThumb} src={hero} alt='Oodi' />
    <Chapter>
      <p>
        We all encounter a range of everyday problems in our lives, both large and small. At Wunderdog we’re no
        different, but we do have the advantage of being excellent problem solvers with some pretty advanced technical
        skills — helping us to find innovative answers to some of life’s tricky problems.
      </p>
    </Chapter>
    <Chapter>
      <h2>A dark and drizzly problem</h2>
      <p>
        It was the end of October 2016. The hazy and drizzly weather made Helsinki resemble the mean streets of some
        film noir movie. On the day in question, I was just finishing my workday: closing applications on my laptop
        before throwing it into my backpack and heading to out the door.
      </p>
      <BlockQuote>Service is fast, affordable, and comes with informed, actionable insights.</BlockQuote>
      <p>
        Genetic testing company Blueprint Genetics uses the latest technologies and techniques to help healthcare
        professionals around the world to diagnose and treat rare genetic conditions. Service is fast, affordable, and
        comes with informed, actionable insights.
      </p>
    </Chapter>
  </Fragment>
)
