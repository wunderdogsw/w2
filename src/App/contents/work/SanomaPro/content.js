import React, { Fragment } from 'react'

import BlockQuote from '../../../components/BlockQuote'
import Image from '../../../components/Image'
import ImageRow from '../../../components/ImageRow'
import Chapter from '../../../components/Chapter'
import Summary from '../../../components/Summary'
import photo2 from './Design-Sprint.jpg'
import photo3 from './Design-Sprint1.jpg'
import photo4 from './Design-Sprint4.jpg'
import {PirkkaSuominen} from '../../contactSalesFaces'
import CallToAction from "../../../components/CallToAction"
import {CaseContactInfo} from "../../callToActions"

export default () => (
  <Fragment>
  <Chapter>
      <p>
        <i>
      For the last decade Sanoma Pro has focused heavily on digital learning,
      but the key question always remains: what will be the learning environment
      of the future?
        </i>
      </p>
      <h2>Our dynamic and organized solution</h2>
      <p>
        We prototyped and tested alternative ways to visualize and organize the
        learning material - over 30,000 pieces of information including text,
        audio, video, images, exercises, and games - then showed these early-stage
        prototypes to pupils and teachers. Feedback showed the continuous stream
        of bite-sized information was user-friendly for both groups of users: the
        pupils saw value in how the personalized feed remembers where you are in
        each topic and how it offers a simple way to submit homework, while
        teachers liked the ability to dynamically manage the feed with their own
        material (including external content such as YouTube videos) and the
        fact they can give personalized, context-based feedback.
        </p>
        <p>
        By default, the pupil will see the content feed
        as it would be in a book, but the teacher can also include tests, tips,
        and reminders. The teacher has a dashboard where they can assess the
        class as a whole or create smaller groups and evaluate the progress of
        individual pupils.
        </p>
        <p>
        We also made device independence a design principle, with the solution
        working alongside the use of books. In a digital environment, we can
        include audio and video alongside books and content from pupils and
        teachers and keep it all in context – as well as making it easier to
        carry information and homework to and from school.
      </p>
      <BlockQuote by="Lasse Kaikkonen, Senior Service Designer at Wunderdog">
        The design sprints clarified user needs and helped us to identify and
        design the key features and define the role of the product in its existing
        environment.
      </BlockQuote>
    </Chapter>
    <ImageRow>
      <Image src={ photo2 } alt="Design-Sprint.jpg" />
      <Image src={ photo3 } alt="Design-Sprint1.jpg" />
    </ImageRow>
    <Chapter>
      <h2>The bright idea</h2>
      <p>
      What if we could deconstruct the existing learning material to create a
      truly personalized learning path for pupils? This would enable teachers
      to better respond to the varying needs of individual classes and pupils.
      </p>
      <p>
      By breaking down the boundaries of traditional learning materials and
      separating the information into discrete parts, we could create an
      individual, dynamic learning stream which adapts over time to better
      support teachers’ individual needs and matches the ability of any
      individual pupil. The teacher can support the stream’s flow on a group or
      individual level by sharing tips and increasing or decreasing the
      difficulty level. The solution would scale from individual mobile phones
      and tablets to the projector screen in front of a class.
      </p>
    </Chapter>
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
      We knew that the approach would be disruptive, meaning it would face
      resistance. There were also two key challenges for us to solve. Firstly,
      breaking down structures is easy, but how should we reconstruct and
      represent that information logically? Should we present the information
      through topics or themes? Could it be a feed? Are individual pieces of
      information portrayed as individual cards or should we support
      phenomenon-based learning through interactive “molecules” consisting of
      grouped information?
      </p>
      <p>
      The other challenge we faced was that schools have a finite budget for
      digital tools. In most digital transformations the physical environment
      is not a consideration, which makes it easier to rethink the business as
      a whole. In this case, the complexity and challenges are far greater.
      Which leads to perhaps the most difficult question: how do we juggle the
      coexistence of traditional books with a new digital learning environment
      that could perhaps take decades to complete.
      </p>
    </Chapter>
    <Image src={ photo4 } alt="Design-Sprint4.jpg" />
    <Chapter>
      <h2>So how did it go?</h2>
      <p>
      We believe this new digital learning environment paves the way for future
      learning.
      </p>
      <p>
      By first establishing a solid understanding of the problems and clarifying
      the concept we were able to present Sanoma Pro with a model for
      reconstructing their content. This concept enabled us to then engage
      internal stakeholders to review and reorganize the editorial processes to
      support the user experience.
      </p>
      <BlockQuote by="Juha Rouvinen, Head of Design at Wunderdog">
      We are thrilled for Sanoma Pro as we have seen how the learnings and
      methods from this single project have now taken a larger role in the
      company, driving the building of a customer-driven culture.
      </BlockQuote>
    </Chapter>
    <Summary>
      <h2>The challenge</h2>
      <p>
        Sanoma Pro needed a partner to help with the digital transformation of
        their learning environment, from books to digital.
      </p>
      <h2>The result</h2>
      <p>
        By using design sprints, we prototyped and tested our ideas to get insight
        from users, then used their feedback to build a product. Alongside books,
        audio and video placed in context in a digital learning environment add
        value for both teachers and pupils.
      </p><h2>Methods used</h2>
      <p>
        A series of design sprints.
      </p>
    </Summary>
    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let's talk.">
        <PirkkaSuominen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
)
