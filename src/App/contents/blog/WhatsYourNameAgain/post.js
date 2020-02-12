import React, { Fragment } from 'react'

import Chapter from '../../../components/Chapter'
import TransitionLink from '../../../components/TransitionLink'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        We all encounter a range of everyday problems in our lives, both large and small. At Wunderdog we’re no
        different, but we do have the advantage of being excellent problem solvers with some pretty advanced technical
        skills — helping us to find innovative answers to some of life’s tricky problems.
      </p>
      <h2>An awkward problem</h2>
      <p>
        You know what it’s like when you start a new job. So much new information and so many new faces and names — it’s
        completely overwhelming. And when you’re meeting and getting to know a host of new colleagues in a short period
        of time, it’s easy to forget a name or two.
      </p>
      <p>
        When I joined the wonderful pack of doggos at Wunderdog, I was faced with that very challenge — doubled.
        Everyone at Wunderdog is given a nickname, so I had to learn everyone’s real-life name and their Wundername! I
        thought there has to be a way of making this easier, so as a programmer, I turned to technology for the
        solution.
      </p>
      <h2>A doggedly good solution</h2>
      <p>
        I made a Clojure application that fetches each colleague’s profile picture, their real name, and their
        Wundername from our internal Slack, then creates a gallery of these pictures with the names attached. Thus was
        born the Doggo Gallery. I also added a script that publishes this gallery on the internal wiki where all the
        important information about our company is available to all employees. As an added bonus, newbies can just add
        their photos to Slack without needing to upload them to the wiki separately.
      </p>
      <h2>Problem solved</h2>
      <p>
        The gallery now serves as a useful tool for new and old doggos alike. A bit of code{' '}
        <TransitionLink to='https://github.com/paasar/slack-user-gallery'>(check it out here)</TransitionLink> and now there are far fewer of those awkward moments where you have to ask someone’s name for the hundredth time
        — or when you just resign yourself to never using their name again! You can thank me later, introverts.
      </p>
    </Chapter>
  </Fragment>
)
