import React, { Fragment } from 'react'

import Image from '../../../components/Image'
import ImageRow from '../../../components/ImageRow'
import Chapter from '../../../components/Chapter'
import Summary from '../../../components/Summary'
import SubTitle from '../../../components/SubTitle'
import photo1 from './smartly-photo1.jpg'
import photo2 from './smartly-photo2.jpg'
import photo3 from './smartly-photo3.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <h2>Setting the scene</h2>
      <p>
        If you know anything about the Finnish startup scene, you’ve almost
        certainly heard about Smartly.io. The success of the company has been
        nothing short of staggering, with fast growth and an ever-increasing
        number of clients using Smartly.io’s solution to optimize their social
        media marketing.
      </p>
    </Chapter>
    <Image src={ photo1 } alt="Smartly.io crew" />
    <Chapter>
      <h2>The bright idea</h2>
      <p>
        What if Smartly.io’s increasingly large and complex systems could be
        iterated faster and more reliably?
      </p>
      <p>
        Smartly.io got in touch to find out if we had any seasoned engineers
        that could help do just that. And guess what? We did.
      </p>
    </Chapter>
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
        DevOps – the seamless interplay of people, technology, and processes –
        is a good way to give developers solid ground to work on and develop a
        product. But Smartly.io’s DevOps team needed some external help to
        drive the bits of DevOps development that were otherwise getting neglected.
        The existing continuous integration system was at full capacity, and the
        development experience needed to be improved with easier development
        environments and smoother deployments.
      </p>
    </Chapter>
    <ImageRow>
      <Image src={ photo2 } alt="Smartly crew 2" />
      <Image src={ photo3 } alt="Smartly crew 3" />
    </ImageRow>
    <Chapter>
      <h2>Our hands-on solution</h2>
      <p>
        We brought experience from multiple clients and different DevOps setups
        that gave perspective to the discussion about how to best solve the
        challenges at hand. This, combined with our ability to turn plans into
        action, meant we were confident that the collaboration would deliver
        the goods.
      </p>
    </Chapter>
    <Chapter>
      <h2>So how did it go?</h2>
      <p>
        This project is all about great collaboration, and our relationship
        with Smartly.io has grown from strength to strength. The work has now
        been going on for over a year and our strong contribution and the
        progress made have shown that by joining forces we can deliver value
        in a very demanding environment.
      </p>
    </Chapter>
    <Chapter>
      <h2>Success that speaks for itself</h2>
      <p>
        With the new continuous integration system we provided results are
        delivered faster and more reliably. Development environments are
        already easier and significantly faster to set up, saving time and
        energy. And the DevOps team’s processes have also moved forward with
        agile improvements such as Kanban, daily meetings, and retrospectives.
        This collaboration continues to prove that working together is working
        smartly.
      </p>
      <p>
      <i>
      Interested? Let's make ideas fly.
      </i>
      </p>
      <p>
      <i>
      Antero Törhönen, Business Development Lead
      <SubTitle>
        <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a>
      </SubTitle>
      +358505281678
      </i>
      </p>
    </Chapter>
    <Summary>
      <h2>The challenge</h2>
      <p>
        Assist the Smartly.io DevOps team with their work, migrating to a new
        continuous integration system and improving the development
        environments.
      </p>
      <h2>The result</h2>
      <p>
        A successful partnership leading to significant improvements in the
        development environments, with faster test runs and better
        modularization.
      </p>
    </Summary>
  </Fragment>
)
