import React, { Fragment } from 'react'

import Image from '../../../components/Image'
import ImageRow from '../../../components/ImageRow'
import Chapter from '../../../components/Chapter'
import Summary from '../../../components/Summary'
import BlockQuote from '../../../components/BlockQuote'
import photo1 from './alma-photo1.jpg'
import photo2 from './alma-photo2.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <h2>Our solution</h2>
      <p>
      Since 2015 we’ve been collaborating with Alma Media as an essential part
      of their information service team, both maintaining existing services and
      developing old systems. We’ve joined other teams too, like their stock
      exchange team to assist with its renewal — basically, whenever there’s
      a need, we try to find the solution. Alma Media is delighted to be
      working with a partner that can live up to their expectations,
      helping them to improve their ways of working and assist with software
      development.
      </p>
      <p>
      And the good feeling is mutual – one of our consultants described Alma
      Media as a “nice, serene working environment where new technologies are
      utilized well.”
      </p>
      <BlockQuote by="Pia Ruusukivi, Director at Alma Talent">
        We’re pleased we found a partner that has been able to live up to our
        expectations.
      </BlockQuote>
    </Chapter>
    <Chapter>
      <h2>The bright idea</h2>
      <p>
      What if there was a way to see digital disruption as an ongoing
      opportunity?
      </p>
      <p>
      Back in 2015, Alma Media was looking for professionals to join
      their digital department. Their people knew their products inside-out,
      but they wanted help from external experts – people with fresh ideas
      and access to the latest knowledge – that could work with their team to
      help them develop top-quality digital services using modern technologies.
      </p>
    </Chapter>
    <Image src={ photo1 } alt="Wunderdog team at work" />
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
      While Alma Media knew they needed their development to be continuous
      in order to stay ahead, they didn’t want to build their own separate
      team just for developing; instead, they wanted experts inside their
      current teams who could keep the development process moving. It was
      crucial for them to have someone working with them at their office
      every day – knowledge provided remotely from a faceless third party
      would be no good for long-term cooperation.
      </p>
    </Chapter>
    <Chapter>
      <h2>How did it go?</h2>
      <p>
      Like many other media companies, Alma Media has had to radically
      transform its business model from print to digital. But unlike some
      of their competitors, they have managed to turn this to their advantage
      by utilizing new digital services – helping them to grow into one of
      Finland’s biggest media corporations.
      </p>
      <p>
      When working long-term with digital services, you need in-depth
      understanding of how to build new modern services on top of old systems.
      Alma Media’s strong industry knowledge and Wunderdog’s extensive
      technology and software development know-how have helped to forge a
      partnership that has lasted years. The collaboration has been fruitful
      for both parties; we learn from each other and are continuously
      evolving professionally.
      </p>
    </Chapter>
    <Image src={ photo2 } alt="Alma media" />
    <Chapter>
      <p>
        <i>*Photos by Alma Media</i>
      </p>
    </Chapter>
    <Summary>
      <h2>The challenge</h2>
      <p>
        Keep a media corporation ahead of the game with constant
        digital development.
      </p>
      <h2>The result</h2>
      <p>
        A successful five-year-and-counting collaboration working closely
        in their teams.
      </p>
    </Summary>

  </Fragment>
)
