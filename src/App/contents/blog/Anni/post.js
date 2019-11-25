import BlockQuote from 'App/components/BlockQuote'
import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import TransitionLink from 'App/components/TransitionLink'
import React, { Fragment } from 'react'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        <i>
          Anni, a 15-year-old student from Pohjois-Tapiola junior high
          school, completed her work practice program at Wunderdog in the fall
          of 2019. We asked her to share her learnings and thoughts of her work
          practice program at Wunderdog.
        </i>
      </p>
    </Chapter>
    <Chapter>
      <h2>My hopes & expectations</h2>
      <p>
        I hoped that the work practice program would help me in future work
        experiences and I wanted to get acquainted with work life. My assignments
        were very fun to do, not too challenging but not too easy to carry out
        either. I’m at my best when I’m doing art and I’m grateful I had the
        chance to apply my skills to something important. My assignments were
        actually helpful. Even though I did multiple pieces of art, I think they
        had a purpose. I drew pictures with Procreate and Adobe Illustrator for
        stickers, case stories and blog posts. I also used Slack on a daily
        basis to communicate with the staff.
      </p>
    <BlockQuote>
        I got a very positive image from the industry and I aim to follow a
        similar path in the future.
    </BlockQuote>
      <h2>My learnings</h2>
      <p>
        I learned how to behave in a work environment and I got to know where
        many of the closest restaurants are located in Helsinki, which will help
        a lot in the future. The guidance at Wunderdog was great: the
        instructions were clear and easy to understand and the guidance was not
        overwhelming. I had a lot of space to develop and I valued that a lot.
        Working at Wunderdog was enjoyable, the office is huge and extremely
        comfy. Sometimes it was even hard to pick a room to work in as there
        were too many good options.
      </p>
      <h2>My feelings about the work practice programme</h2>
      <p>
        I got a very positive image from the industry and I aim to follow a
        similar path in the future. I’m happy I chose Wunderdog. Many other
        people took the classic supermarket option, which I didn’t find
        interesting. There are many things that my made my friends jealous and
        I told that they should’ve come to work here as well. It would be nice
        to come here to work someday.
      </p>
    </Chapter>
    <Chapter>
      <p>
        <i>
        Anni drew amazing pictures for us to use, e.g.the black and white
        drawing in <TransitionLink to='https://wunder.dog/Mieli'>Mieli - Mental
        Health Finland case story.
        </TransitionLink>
        </i>
      </p>
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
