import BlockQuote from 'App/components/BlockQuote'
import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import React, { Fragment } from 'react'
import photo1 from './ragoon.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        <i>
          Wunderdog looks and feels like the Doggos that work at Wunderdog. We
          wanted them to tell you in their own words who they are and what they
          do!
        </i>
      </p>
    </Chapter>
    <Chapter>
      <p>
      Cheers!
        I’m Kanki, a Service Designer by profession and a landholder by noble
        rank — which means I mostly wander in roadless forests and I’m lovin’ it!
      </p>
      <p>
        It’s been almost four years since I heard of Wunderdog for the first
        time from a re-posted job ad. What caught my eyes immediately were the
        brand animals (back then, the Wunderdog brand was all about animals).
        And the next thing I knew I woke up in the universe of digital
        consultancy. Since then our brand has evolved quite a bit, and our
        animals have gone to summer pasture. Regardless, as a company, we still
        have what counts to me: friskiness and curiosity.
      </p>
    <BlockQuote>
        Coming from designing for Finland’s oldest organisation, Church in
        Finland, I feel I’ve now seen the Finnish organisational
        extremes.
    </BlockQuote>
      <p>
        Personally, the past four years have been a professional leap for me.
        Coming from designing for Finland’s oldest organisation, Church in
        Finland, I feel I’ve now seen the Finnish organisational extremes.
        Strange enough, when it comes to working culture, both rely primarily
        on being self-guided as an employee. The biggest differences are perhaps
        the pace and agility. I have sometimes wondered that it’s about how
        organizations understand time. In a business-driven organization their
        functions may easily seem like tennis, where the tempo is affected by
        the speed of the court, whereas an NGO or a GO functions with a slower
        pace which is more like chess. In my past work, my former employer's
        idea of time was closer to eternity. (pun intended)
      </p>
    <Image src={photo1} alt='Ragoon' />
      <p>
        I like to divide design work in half: building concepts and crafting
        products of them. Concepts come in many forms; facilitation session
        post-it walls, plain text, slideshows, posters, quick web pages and
        visual or even haptic prototypes, just to mention a few. It’s all about
        trying to get a stakeholder consensus on what should be done next. This
        is what I often concentrate as a Service Designer.
      </p>
      <p>
        Digital crafting usually happens in a small team, more often as a team
        process rather than a designer-show-off document. If the preliminary
        concept looks polished, the designer’s role in the implementation phase
        can sometimes be smaller. In some cases, I’ve spent up to a year with a
        team drawing layouts and finishing details. Thus, my daily or weekly
        work varies depending on the case.
      </p>
    <BlockQuote>
        I believe being in the consultant’s role, even for a short period
        improves one’s professionalism.
    </BlockQuote>
      <p>
        For design, I usually resort to Sketch, as I can do most things with it.
        I’m pretty new to Figma, but it seems like collaborative art design
        tools might make a larger difference. I’ve tried to play with some fresh
        tools like Invision Studio or Framer X, but the closer I come to
        animation and code, the stronger I remember I’m most at home doing design
        research, recapitulating stuff and working toward better internal
        communication. For those, the most important tool in my opinion, is
        listening. By listening carefully and making clear analysis one can go
        far.
      </p>
      <p>
        I believe being in the consultant’s role, even for a short period
        improves one’s professionalism. It forces you to think faster, being one
        step ahead and switching your mentality to servant mode. As a reward,
        you get to see companies, cultures, products and people you would not
        have seen otherwise. And at Wunderdog, it’s also the incredible
        colleagues who make the days meaningful.
      </p>
    <BlockQuote>
        At Wunderdog, it’s also the incredible colleagues who make the days
        meaningful.
    </BlockQuote>
      <p>
        When I look back and try to remember why I got into design, two memories
        come to my mind. During my late teens, I remember being naively impressed
        by classic Finnish design, the glass stuff and Marimekko (the utopia
        rather than the clothes).
      </p>
      <p>
        Then, during my master’s studies in industrial design, I remember a
        course discussion about attendees’ professional motivations. My reason
        “to bring order to the chaos” raised some eyebrows.
      </p>
      <p>
        A little later I listened to Dan Brown’s “The Lost Symbol” as an
        audiobook. Still hearing the ultimate words “Ordo Ab Chao” in my head
        recited by the rugged Finnish narrator Lars Swedberg, I remind myself
        from time to time to calm down and just try to sharpen that famous
        designer’s eye for detail.
      </p>
    </Chapter>
  </Fragment>
)
