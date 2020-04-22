import React, { Fragment } from 'react'

import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import Indent from 'App/components/Indent'
import BlockQuote from 'App/components/BlockQuote'
import photo1 from './BluesAngryBirds-Wunderdog.jpg'
import photo2 from './BombAngryBirds-Wunderdog.jpg'
import photo4 from './AngryBirdsFriends-Wunderdog2.jpg'
import {AnteroTorhonen} from '../../contactSalesFaces'
import CallToAction from "../../../components/CallToAction"
import {CaseContactInfo} from "../../callToActions"

export default () => (
  <Fragment>
    <Chapter>
      <h2>Our solution</h2>
      <p>
        We took the code of Angry Birds Friends and squashed so many bugs that
        bug reports decreased by two thirds. This opened up new conversations
        about remarketing the game – once marketing started the player base
        increased to more than a million players monthly.
      </p>
    </Chapter>
    <Indent twice><Stats>
      <div>
        <span>66%</span>
        <span>bug reports decreased by two thirds</span>
      </div>
      <div>
        <span>1M</span>
        <span>player base increased to more than a million players monthly</span>
      </div>
    </Stats></Indent>
    <ImageRow>
      <Image src={ photo1 } alt="Angry Birds Friends Blues" />
      <Image src={ photo2 } alt="Angry Birds Friends Bomb" />
    </ImageRow>
    <Chapter>
      <h2>The bright idea</h2>
      <p>
      What if, instead of creating something new, we could help give something
      brilliant a new lease on life? Angry Birds Friends had gathered a ton of
      complicated code from retired features and unspecified behaviour in corner
      cases, which all needed a good clean up. Rovio needed another backend
      developer to help tidy up the code, so we jumped in.
      </p>
    </Chapter>
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
      Angry Birds Friends was first published in 2013, so our first challenge
      was just to keep it alive. The original game client was written for a
      browser plugin that would no longer be supported after 2020 – we needed to
      future-proof the game as well as making it possible for new functions to
      be added.
      </p>
    </Chapter>
    <Chapter>
      <h2>So how did it go?</h2>
      <p>
      We expanded the test coverage, improved code testability by refactoring,
      and eliminated bugs introduced by code complexity. As a result, the number
      of bug reports to Rovio’s customer support was reduced to one third of the
      previous level. A quarter of the way through the project, Rovio’s own
      backend developer left the team, but they didn’t feel the need to hire a
      new one as they felt our developer was such a gem – so we became the
      team’s only backend developer. The number of players had been decreasing
      due to the bugs, but with our code clean up its now gone back up to over
      one million players a month. Rovio have been very happy with the results!
      </p>
    </Chapter>
    <Image src={ photo4 } alt="Angry Birds Friends" />
    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let's talk.">
        <AnteroTorhonen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
)
