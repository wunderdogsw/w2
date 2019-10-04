import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import React, { Fragment } from 'react'
import hero from './open-source.jpg'

export default () => (
  <Fragment>
    <Image src={hero} alt='OpenSource' />
    <Chapter>
      <p>
        We all experience a multitude of oddly annoying problems in our everyday lives. Tiresome, isn’t it? At
        Wunderdog, we’re no different. But our doggos are lucky enough to be superb problem solvers — with pretty
        advanced technical skills to match. Matching problems to solutions is in our Wunderdog DNA, so we like to give
        our employees opportunities to solve some of their everyday problems.
      </p>
      <p>
        To do this we actively support independent learning and development, encouraging our people to kick-start their
        own personal projects. This fits in well with our project work — as consultants the gaps we sometimes have
        between projects provide the perfect opportunity to get down to some independent study and personal development.
        Having a personal project to focus on can be rewarding, interesting, and uplifting, which is great for the
        overall well-being of our employees — something that is really important to us as an employer.
      </p>
      <p>
        We also want everyone to share what they’ve created and learned, so we think it’s only fair to compensate our
        people for the open-source projects they work on outside of working hours. So far in 2018 our doggos have
        already spent 1,220 hours on open-source projects, and we’ve reimbursed them to the tune of €15 an hour.
      </p>
      <p>
        These open-source hours have mostly been used to solve everyday problems through modern technology. Maybe one of
        them will help to solve a problem you’ve been facing?
      </p>
      <p>Discover the everyday struggles — and solutions — of our doggos.</p>
    </Chapter>
  </Fragment>
)
