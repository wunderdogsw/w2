import React, { Fragment } from 'react'
import Chapter from '../../../components/Chapter'
import BlockQuote from '../../../components/BlockQuote'
import Image from '../../../components/Image'
import TransitionLink from '../../../components/TransitionLink'
import ImageRow from '../../../components/ImageRow'


import photo1 from './Seiskavisa-Wunderdog-office1.jpg'
import photo2 from './Slack-Wunderdog-coffeebreak (1).jpg'
import photo3 from './remote-work-wunderdog.jpg'
import photo4 from './remote-work-wunderdog(2).JPG'


export default () => (
  <Fragment>
      <Chapter>
      <p>
        During the past week, the coronavirus has filled our news feeds and
        caused worry, insecurity, and anxiety. We at Wunderdog take the official
        instructions and recommendations seriously and are doing our part in minimizing
        an exponential spreading of the virus – the situation demands
        collaborative actions as well as individual participation. Despite the
        situation, we continue to work hard on solving the problems our
        customers face. And we do so by staying connected and optimistic. A culture
        of collaboration still lies at the heart of everything we do, even
        - and especially - when working remotely.
        </p>
        <p>
        We’ve had to get used to working remotely and not seeing each other on
        a daily basis. In addition to our daily client work, the team building activities
        now rely on remote connectivity. We began working from home
        offices last Thursday, adapting to remote conditions right away.
        Google Hangouts proved to come in handy for not only the official
        meetings but also for more informal events such as our company-wide two
        o’clock coffee break, planking session, and another quirky habit of ours, our
        weekly Seiska magazine quiz.
        </p>
        <Image src={photo1} alt="Seiskavisa-Wunderdog-office1"/>
        <p>
        Last week was a long week, every day bringing new news. The situation is
        changing extremely fast, thus transparent and accurate communication is required to
        keep everyone in the loop. Nonetheless it is crucial to keep up good
        spirits and have a laugh together during these difficult times.
        Even the smallest of things might have a large impact on the general
        atmosphere, which could affect everyone’s wellbeing and endurance during
        this period of special circumstances. Being actively connected, having
        Hangouts facilitated coffee breaks and sticking to weekly routines -
        even remotely - can make all the difference.
      </p>
      <Image src={photo2} alt='Slack-Wunderdog-coffeebreak' />
      <p>
        Keeping the required distance now means staying closer in spirit;
        communal breaks over Hangouts, learning about our shared love for
        Iittala’s Taika mugs, sharing creative home office solutions, designing
        toilet paper emojis or just talking openly about our feelings and relying
        on peer-to-peer support have been exceptional ways to keep our team spirit
        united and uplifted. Our distance is paradoxically bringing us closer.
        It has shown how powerful a community can be.
      </p>
        <Image src={photo3} alt='remote-work-wunderdog' />
      <p>
        The most important thing to do right now is to stay safe and healthy.
        We are aware of the economic effects of the situation and how it might
        affect our customers’ business and, consequently, our business too.
        However, we believe staying positive during trying circumstances such as
        these is key. Continuing to stay united during these times is one way we
        can continue to be prepared for what is to come. The culture that we have
        built together in better times gets truly tested in harder ones. In times
        like these the culture can be a force that takes us far - it’s important
        to keep contributing to that.
      </p>
      <p>
        Here is our challenge to you: can you think of one thing, big or small,
        that you can already do today in your workplace to uplift spirits and
        connect with your colleagues? Please feel free to recycle our ideas and,
        if you come up with something new, share them with us! Our Instagram at
        @wunderdogofficial is one good place to do so. Let’s win the fight against
        Covid-19 together!
      </p>
    </Chapter>
    </Fragment>
)
