import React, { Fragment } from 'react'

import BlockQuote from '../../../components/BlockQuote'
import Chapter from '../../../components/Chapter'
import Image from '../../../components/Image'
import photo1 from './designblog-1.jpg'
import photo2 from './designblog-2.jpg'
import photo3 from './designblog-4.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        <i>
          PCE, a Production Chain Erosion, is a chronic state where the
          company's production chain runs sub-optimally and is prone to a
          delivery outage. Small companies are not infected, but as the size
          scales up, the risk multiplies. PCE can often be traced back to a
          prolonged shortage of essential software
          features and a lack of interest on data hygiene. There's no
          vaccination, but taking in a designer to your software project,
          well before buying or coding business software, pays back quickly.
        </i>
      </p>
    </Chapter>
    <Chapter>
    <h2>Introduction</h2>
      <p>
          Before diving too deep into the solutions, let's rewind.
          What is a business software? When classifying software, I often use
          a commonplace trichotomy. Most of the software we use can be called ​
          consumer software​: a public transport app on your mobile or a
          weather forecast in your browser. Often these are single-purpose
          apps with only a few features. Then there are ​personal productivity
          tools​ like word processing or photo editing: rich on features, while
          still based on one user role. The third category is ​business software​:
          stuff that organizations use to handle their resources – labor,
          capital or land, as in a classical economy. You name it: Enterprise
          Resource Planning, Product Lifecycle Management, Customer Relationship
          Management, Workforce Management, Patient Information system, time
          tracking, payroll, billing, invoicing or bookkeeping. Apps that many
          of you use at work, and which too often excruciatingly slow you down.
      </p>
    <BlockQuote>
          Based on my personal experience, people buying business software
          are often not aware of how complicated the requirements of
          features are in the end.
    </BlockQuote>
      <p>
          I recently had a thought-raising discussion with my father, who proved
          to be one of the first guys visioning a paperless
          office around the globe. Not that long ago in the 1970's they wrote
          their own databases and built drivers from scratch to get those bytes
          printed when paper-oriented people insisted. He did software when
          there was ​no such thing as a display​, let alone a graphical user
          interface.
        </p>
        <p>
          This discussion led me to a chain of thoughts.
      </p>
      <p>
          Consumer apps of the day feel easy and even delightful to use for
          numerous reasons. Huge markets and serious competition drive companies
          to invest in concept design and user experience. There are often just
          a few features, which makes design work easier and learning curve
          short.
          Simple software can be designed for one user role. Consumers make the
          decision to buy, stay or leave themselves – not a board.
      </p>
        <Image src={photo1} alt='designblog-1' />
        <p>
          In business, the core software is heavy on data and features.
          Users come in numerous roles. Decisions to buy or back off are
          often made by a board whose members don't always use the products
          themselves. Once a core business app is in production, changing
          it on the fly can be extremely difficult, slow and expensive.
        </p>
        <p>
          Data and the things you do with it (features) were there already
          before the graphical user interface.
        </p>
          <p>
          With consumer apps, the data- and the feature-related decisions are
          usually taken care of by the businesspeople. Designers help with the
          feature's path details and the general look and feel. This is logical,
          as easy-flowing paths and look and feel make the difference on
          the market.
        </p>
          <p>
          With business software, look and feel has a minor role, and work
          usually gets done even if the paths do not flow smoothly. Having the
          right features and the ability to handle incoming and outgoing data
          makes the difference. Based on my personal experience, people buying
          business software are often not aware of how complicated the
          requirements of features are in the end.
        </p>
          <p>
          Against this background, I present two preventions against PCE,
          starting from the most important one.
        </p>
        <BlockQuote>
              Before doing market research or benchmarking, ​map the features​
              that
              are needed while executing that exact part of your production
              chain.
        </BlockQuote>
        <h2>1. Prevention First aid: Map your Features</h2>
      <p>
          When an organisation needs new software, it has three ways to go:
          </p>
            <p>
          <b>1)</b> Deploy the features from a deprecated ecosystem that's
          probably
          already in use.
          </p>
            <p>
          <b>2)</b> Believe in a newcomer, be it an ecosystem, a bunch of
          single-feature software or a combination.
          </p>
            <p>
          <b>3)</b> Build your own.
      </p>
      <p>
          Sometimes the deprecated is good enough. Cases 2 and 3, however,
          will eventually lead to a software project –buying, building or a
          combination. The usual procedure has predictable steps.
          Someone first gets a ​nakki (Finnish translation for an unpleasant job)
          of executing a service provider survey and presenting a few of the
          best options. One option is picked based on 2-4 factors: license fees,
          fit on existing tech, sometimes information security/privacy,
          and a belief that the app does the job.
      </p>
      <p>
          Fees are fairly easy to calculate, even with growth in mind.
          For a tech fit, a software architect may carry out technical ​due
          diligence​. For information security, there are specialists as well.
      </p>
      <p>
          The most camouflaged business risks rely on the ​belief​ that the
          app does the job.
      </p>
          <Image src={photo2} alt='designblog-2' />
      <p>
          Before doing market research or benchmarking, ​map the features​
          that are needed while executing that exact part of your production
          chain. If you're uncertain how your production chain builds up,
          first carry out a service blueprint or other document that shows
          the actions needed to make a delivery happen.
      </p>
      <p>
          For example, if you need a tool to handle working hour entries from
          multiple subsidiaries, walk through the whole process phase by
          phase with the people currently handling the entries in their ways.
          Name every step, and preferably note the data sources and format.
          Generalize the steps so that they're not bound to current tools but
          to the user's needs (in software development these are called ​user
          stories​ and epics ​that bundle stories). Transcribe a memo.
        </p>
        <p>
          When you've done this, you're able to compare service providers
          based on the real need, not a belief. Into the bargain, you've got a
          work introduction/training document. Furthermore, if you find out
          there are no apps for the need in the market, you've already done a
          big part of the software specification.
        </p>
        <Image src={photo3} alt='designblog-4' />
        <h2>Regimen</h2>
        <p>
          To map features an easy and professional way, take a designer to do
          it for you. Besides excellent visualists, there are dedicated user
          research- and concept designers. Figuring out rough user stories is
          their daily bread, and some wizards master advanced methods
          like goal-directed design simulation, in case a process must
          be scavenged in-depth.
        </p>
        <h2>Modes of action</h2>
        <p>Significant increment of productivity: employees don't have
          to patch their workflow.
        </p>
        <p>
          Operational reliability: should an employee vanish, successor doesn’t
          have to spend the first 2 months building patches from scratch.
        </p>
        <p>
          Unexpected benefits: a roster that used to be an excel-print on a
          wall, is suddenly online and up-to-date. Shiftwishes can be proposed
          within the app instead of emails or whatsapp groups.
        </p>
        <p>
          Significant savings on software development.
          (This topic is worthy of another post).
          </p>
    </Chapter>
  </Fragment>
)
