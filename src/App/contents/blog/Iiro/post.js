import React, { Fragment } from 'react'

import BlockQuote from '../../../components/BlockQuote'
import Chapter from '../../../components/Chapter'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        <i>
          Iiro, a charming 15-year-old student from Järvenperä junior high school,
          completed his work practice program at Wunderdog in the fall of 2019.
          We asked him to share his learnings and thoughts of his work practice
          program at Wunderdog.
        </i>
      </p>
    </Chapter>
    <Chapter>
      <h2>My expectations vs. reality</h2>
      <p>
        I was excited and optimistic about the work practice program. I was
        curious what Wunderdog would turn out to be like and what type of work I
        was going to do. Some of the assignments felt a little bland, but mostly
        they were pleasant to do and fun to execute. I learned coding, helped
        with the Christmas party preparations, used Slack on a daily basis to
        communicate with the staff and I helped gathering information about our
        potential clients.
      </p>
    <BlockQuote>
        The notion I had from the IT business left me intrigued and I’m hoping
        to learn more in the future.
    </BlockQuote>
      <h2>My learnings</h2>
      <p>
        I have learned some practical skills during my time here, and I got a
        notion about how the IT business work. My mentors were really nice and
        usually instructed me sufficiently. The work didn’t include much
        pressure and the methods of working assured that the tasks didn’t feel
        too long. On my side I hope I helped Wunderdog by saving people’s time.
        I wanted to help them be more effective by assisting them in their
        assignments.
      </p>
      <h2>My feelings about the work practice programme</h2>
      <p>
        The notion I had from the IT business left me intrigued and I’m hoping
        to learn more in the future. Overall, IT seems like an interesting
        career choice. It seems that Wunderdog is a pleasant place to work at.
        There is no work pressure and the working hours are flexible. I had the
        perception it is a company that keeps the workers in a good mood and
        makes work a pleasant activity.
      </p>
    </Chapter>
    <Chapter>
      <p>
        <small>
        *Work practice program is a two-week period in which high school
        students in Finland get in touch with working life. The purpose of the
        program is to support education and vocational selection. For most of
        the students this is their first work experience.
        </small>
      </p>

    </Chapter>
  </Fragment>
)
