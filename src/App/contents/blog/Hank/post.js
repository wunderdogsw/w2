import BlockQuote from 'App/components/BlockQuote'
import Chapter from 'App/components/Chapter'
import Image from 'App/components/Image'
import React, { Fragment } from 'react'
import hero from './hank.png'

export default () => (
  <Fragment>
    <Image src={hero} alt='Hank' />
    <Chapter>
      <p>
        <i>
          Wunderdog looks and feels like the Doggos that work at Wunderdog. We wanted them to tell you in their own
          words who they are and what they do!
        </i>
      </p>
      <BlockQuote>
        ”The most important things in my job are the ”traditional” ones: getting along with people, communication,
        taking notes etc. Without these skills even the best code wizard wouldn’t get along”
      </BlockQuote>
      <p>
        Hi there! I’m Hank, a graduate engineer from Otaniemi. I’ve worked in software development for 10 years now.
      </p>
      <p>
        All technical widgets have always interested me since I was very young. But it was sort of an accident how I got
        into tech industry and coding. I did some courses on coding at Uni but the skills I have now are mainly
        self-learnt. That said: often through trial and error!
      </p>
      <p>
        I’ve mainly worked in small startups doing product development projects roles varying from developer to designer
        and team leader to product owner. Before Wunderdog I worked at a startup as one of the founders.
      </p>
      <p>
        My current project focuses on building a big entity for planning work shifts and managing on-demand work. It’s a
        long project that will last for several years. We’re working on it as a 5-member team of wunderdogs together
        with the product owner of the customer.
      </p>
      <p>
        We use Scrum and work in one week sprints. The regular week is built around the sprint cycle: On Thursdays, the
        previous sprint is outlined and the following planned. The beginning of the week consists of user interviews,
        working on the backlog, building new interfaces and features and solving things that have arisen along the way.
        On Fridays everyone works at Wunderdog’s office and that’s when we have all possible internal meetings that are
        not directly related to the current customer project.
      </p>
      <p>
        My role covers coordinating the teamwork and tasks related to the service design. I don’t do actual coding
        excluding some occasional bug fixes. However the technical background comes in handy when prioritising, choosing
        the right design solutions and overall communication with the team.
      </p>
      <p>
        Other members are full-stack developers with some roles agreed: DevOps responsible, back-end architecture and
        the chief of front-end.
      </p>
      <p>
        A good Lassie is interested in the well-being of the team, the needs of the end-users and the business of the
        customer. Multifaceted work experience and an interest towards different fields of software development are key.
        However the most important thing is supporting the team members and facilitating their efficient working.
      </p>
      <BlockQuote>
        " With this gang working is actually fun. Also, the fact that bureaucracy and organization charts are
        conspicuously absent is a huge plus”
      </BlockQuote>
      <p>
        For me the most motivating situations to work are those, where the team members all get to utilise their
        expertise efficiently and where problems are intervened quickly and solved together. As a Lassie, these are the
        things one gets to impact. The best feedback is when colleagues are seemingly enjoying being at work and shit
        gets done. The meaningfulness, possibility for personal development and great atmosphere within the team are the
        things that guarantee my well-being at work. With this gang working is actually fun. Also, the fact that
        bureaucracy and organization charts are conspicuously absent is a huge plus. In addition, our kick-ass office
        downtown deserves to be praised!
      </p>
      <p>
        Even though coding and the importance of it is much discussed in the media (especially the trending AI, big
        data, cloudservices etc.) I’d keep in mind that for instance in my job, the most important things are the”
        traditional” ones: getting along with people, communication, taking notes etc. Without these skills, even the
        best code wizard wouldn’t get along!
      </p>
      <p>
        The most important thing is that solutions that truly make the life of the user easier are successfully made.
        Personally, I care more about the resulting user experience we are able to create than just the technical
        details of the execution.
      </p>
    </Chapter>
  </Fragment>
)
