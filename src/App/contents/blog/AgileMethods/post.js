import React, { Fragment } from 'react'

import BlockQuote from '../../../components/BlockQuote'
import Chapter from '../../../components/Chapter'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        <i>Or, Why Do I Constantly Feel Like I’m Not in Control of My Work?</i>
      </p>
      <p>
        I firmly believe that during their career, every single developer has heard uttered the phrase “If there’s just
        some quick and dirty way to do it now, let’s do that and do it properly later”. Sounds familiar? Another facet
        of this is a piece of conversation, which I also believe everyone has at least heard — if not been a part of
        themselves — in which the developer goes to the project manager or product owner (PO) with a choice. The
        developer says “I know I can do a really dirty fix that’ll take half an hour, or I can do this properly, that’ll
        take a day.” Inevitably, the response is going to be “Alright then, do the quick fix, thanks”, and away the
        developer goes, to once again make a codebase smell more like legacy code than it did before.
      </p>
      <p>
        What’s also common is that these teams and product managers call their teams agile precisely because of this
        trait, their ability to quickly perform “dirty fixes”. What I have come to think is that they actually mean that
        the developers are flexible or gullible. Former, in the meaning that they are willing to bend their own ethics
        to accommodate the will of their manager, latter in the sense that they really do believe they get to return and
        fix this properly. What both parties miss is that they’re part of the same team, with the same common goal, and
        they’re both fundamentally breaking their own roles within the team.
      </p>
      <BlockQuote>
        We, as developers of software that people are hopefully going to use to better their lives — or in some cases
        even depend on to continue living, carry an enormous responsibility.
      </BlockQuote>
      <p>
        I touched the word ethics in the previous paragraph. In my first year of studies, everyone was made to read the
        IEEE’s code of ethics, which I strongly feel every single developer and software engineer out there should read
        and take to heart. The main idea is that we, as developers of software that people are hopefully going to use to
        better their lives — or in some cases even depend on to continue living, carry an enormous responsibility. The
        very first point in the code reads: “to accept responsibility in making decisions consistent with the safety,
        health, and welfare of the public, and to disclose promptly factors that might endanger the public or the
        environment”. To me, this point alone is nowadays sufficient to speak up when I hear talk of dirty hacks and
        shortcuts. Shortcuts and dirt makes your codebase harder to maintain, which makes it harder to notice errors,
        which in turn directly endangers your users.
      </p>
      <p>
        When your manager or the product owner calls for quick and dirty coding, there are two very important factors
        for you to consider concerning this person giving you the order. Fine, they are the director, supposed to be
        guiding you in your work. However, do they actually have the proper education to be making such a call? Is she
        able to evaluate the ramifications to your codebase, the impact on future development, the stability of the
        product or the impact on your job satisfaction? Furthermore, consider the fact that none of those are actually a
        part of her job — those are all on you. By giving her the choice, you’ve taken away your ability and freedom to
        answer these very important questions and work accordingly. An integral part of agile methodologies is the
        clear-cut difference between the developers and the stakeholders. Respect yourself as a representative of the
        developer community; you make the coding calls, and you trust your managers and POs to respect that and bring
        their own expert knowledge in their fields to the table.
      </p>
      <BlockQuote>
        Big part of our job satisfaction as developers is our freedom to resolve problems the way we see fit.
      </BlockQuote>
      <p>
        Speaking of product owners and managers just being interested in shipping, the most common counter is for the
        developer to cry deadline. And fair enough, deadline-pressure is something that we all feel time and time again,
        and when the deadline looms, the quick hacks start pouring in. In these cases it’s important to keep in mind
        your goal for the product. Is it a proof of concept which isn’t going to be maintained anyway? Then just roll it
        out the door, and make sure it’s taken down as soon as it has served its purpose. However, if your goal is to
        build a product that’s going to keep pumping for years, instead of making a compromised product, you should
        maybe start talking about pushing back deadlines. Agile teams communicate often, and they voice their concerns
        on deadlines soon precisely so that we avoid having to roll out a new product that’s legacy code from day 0.
      </p>
      <p>
        Big part of our job satisfaction as developers is our freedom to resolve problems the way we see fit. When we
        hold on to it, we must also accept the corresponding responsibility — we need to provide a good product, one
        that we can be proud of as well. Giving our managers the ability to dictate our coding style drastically takes
        away our freedom and is usually to the detriment of our product. Product owners and managers don’t code, they
        don’t get to say how to code, but they still fill a very important role in our teams: they deliver the work,
        prioritised according to urgency and business needs, they give us insight into the business expectations of the
        product and serve as a buffer between us and the sometimes inane business talks that don’t relate to our jobs.
        The responsibilities of an agile team are then to be self-supervising, self-guiding and motivated to bring to
        life the best possible product, each and every project.
      </p>
    </Chapter>
  </Fragment>
)
