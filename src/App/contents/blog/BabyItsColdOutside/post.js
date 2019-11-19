import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import TransitionLink from 'App/components/TransitionLink'
import React, { Fragment } from 'react'
import photo1 from './its-cold-outside.jpeg'

export default () => (
  <Fragment>
    <Chapter>
      <h2>A chilly problem</h2>
      <p>
        Finnish winters are cold, and I commute by tram — and even though Helsinki’s public transport is pretty
        punctual, I am not. This often leads to me seeing the rear lights of the tram disappearing over the horizon
        while I freeze my toes off waiting for the next one. One day I decided that I’d suffered for long enough; there
        had to be a way that this could be avoided.
      </p>
      <p>
        The first ideas I came up with were:
        <ul>
          <li>digging a tunnel to avoid the freezing air</li>
          <li>developing a system that would stop the tram and make it wait until I was on it</li>
        </ul>
      </p>
      <p>Great ideas, right? But unfortunately, impossible — and probably illegal too.</p>
      <h2>A repetitive problem</h2>
      <p>
        Being a pretty nerdy guy, I buy all kinds of gadgets even if I don’t know what I’ll use them for, so I happened
        to have a spare Raspberry Pi lying around with an 8” display. As a software developer, I know how to make
        computers beep, and I also knew that Helsinki provides an open API for the public transport system, which lets
        you track tram movements and schedules in real time.
      </p>
      <p>
        AI decided to craft a small display that would tell me the optimal time to leave for the next tram. This would
        combine all my professional skills: UI/UX design, JavaScript programming, Linux knowledge, and of course
        problem-solving. Another interesting aspect of this project was that I didn’t have to make it immediately
        understandable to anyone who glances at it for the first time: it just needed to work for me. Of course, this is
        the extreme opposite of my usual work!
      </p>
      <p>
        So I gathered together the Raspberry Pi and all my programming and design knowledge and after a couple of late
        nights I ended up with this:
      </p>
      <Image src={photo1} alt='RasberryPi' />
      <p>
        Here’s how it works: there are two trams I can catch to work, the number 7 and the number 9. The tram numbers
        are on either side of the screen, with the one that’s coming next lit. In the middle is the time in minutes
        until I need to leave the house in order to catch the tram. Above that is the air temperature so I know what to
        wear, and at the bottom is the actual time.
      </p>
      <h2>Problem solved</h2>
      <p>
        The accuracy is perfect: I can often just walk straight onto the tram as it usually arrives at the stop at the
        same time I do. I’ve got to say, my commutes are pretty smooth these days!{' '}
        <TransitionLink to='https://github.com/thatsprettyfaroutman/pi-kiosk'>
          Check out the code behind all this.
        </TransitionLink>
      </p>
    </Chapter>
  </Fragment>
)
