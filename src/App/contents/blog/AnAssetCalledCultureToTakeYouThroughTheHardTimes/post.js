import React, { Fragment } from 'react'
import Chapter from '../../../components/Chapter'
import BlockQuote from '../../../components/BlockQuote'
import Image from '../../../components/Image'
import TransitionLink from '../../../components/TransitionLink'
import ImageRow from '../../../components/ImageRow'


import photo1 from './Seiskavisa-Wunderdog-office1.jpg'
import photo2 from './Slack-Wunderdog-coffeebreak (1).jpg'
import photo3 from './remote-work-wunderdog.jpg'
import photo4 from './remote-work-wunderdog(2).jpg'


export default () => (
  <Fragment>
      <Chapter>
      <p>
        During the past week, the Corona Virus has filled our news feeds and
        caused worry, insecurity, and anxiety. We at Wunderdog take the official
        instructions and recommendations seriously and do our part in minimizing
        an exponential spreading of the virus – the situation demands
        collaborative actions as well as individual participation. Despite the
        situation, we continue working hard on solving the problems our
        customers face. And we do so by staying connected and optimistic. The
        collaborative culture still lies at the heart of everything we do, even
        - and especially - when working remotely.
        </p>
        <p>
        We’ve had to get used to working remotely and not seeing each other on
        a daily basis. In addition to actual work, the team building activities
        are now relying on distant connections. We began working from home
        offices last Thursday. Adapting to remote conditions began right away.
        Google Hangouts was proved to come in handy for not only the official
        meetings but also for company-wide 2 o’clock coffee break, planking
        session and yet another habit of ours: weekly Seiska magazine quiz.
        </p>
        <Image src={photo1} alt="Seiskavisa-Wunderdog-office1"/>
        <p>
        It’s been a long week, every day bringing new news. Situations change
        extremely fast. Transparent and accurate communication is required to
        keep everyone on the loop. But what’s also crucial, is keeping up the
        good spirit and having a laugh together during these difficult times.
        The smallest of things might have a great impact on the general
        atmosphere that affects everyone’s wellbeing and endurance during this
        period of special arrangements. Being actively connected, having
        Hangouts facilitated coffee breaks and sticking to weekly routines -
        even from distance - can make a difference.
      </p>
      <Image src={photo2} alt='Slack-Wunderdog-coffeebreak' />
      <p>
        Taking the required distance now, means staying closer in spirit. Taking
        coffee breaks via Hangouts, learning about our shared love for Iittala’s
        Taika mugs, sharing creative home office solutions, crafting toilet
        paper emojis or just sharing openly our feelings and reaching for
        peer-to-peer support have been exceptional ways to keep our team spirit
        together and uplifted. Our distance is paradoxically bringing us closer.
        It has shown how powerful a community can be.
      </p>
        <Image src={photo3} alt='remote-work-wunderdog' />
      <p>
        The most important thing to do now is to stay safe and healthy. We’re
        also aware the economic effects of the situation might affect our
        customers and therefore us too. However, we believe staying positive
        during unexpected circumstances is key. Being united during these times
        is one way we prepare for what’s to come. The culture that has been
        built together in better times gets truly tested in the harder ones.
        In times like this the culture can be the force that takes us far -
        it’s important to keep contributing to that.
      </p>
      <p>
        Here is our challenge to you: can you think of one - just one - thing
        that you can do already today in your workplace to uplift the spirit
        and connect with your colleagues? You are free to recycle our ideas.
        If you come up with something new, please share them to us for example
        on Instagram at @wunderdogsw. Let’s win the COVID-19 together!
      </p>
    </Chapter>
    </Fragment>
)
