import React, { Fragment } from "react";

import Chapter from "../../../components/Chapter";
import ImageRow from "../../../components/ImageRow";
import Image from "../../../components/Image";
import CallToAction from "../../../components/CallToAction";
import { CaseContactInfo } from "../../callToActions";
import { JasperVanGhemen } from "../../contactSalesFaces";

import image1 from "./HoneypotCult-Wunderdog2.jpg";
import image2 from "./HoneypotCult-Wunderdog4.jpg";

export default () => (
  <Fragment>
    <Chapter>
      <p>
        <i>
          Our customer Honeypot, Europe’s developer-focused job platform, wanted
          to build a new media platform for their Developer Community,{" "}
          <a href="https://cult.honeypot.io/">“.cult”</a>, to publish blog
          posts, articles, visual material (videos and documentaries), events
          and podcasts. Jessika, our developer, built a content management
          system with <a href="https://www.contentful.com/">Contentful</a>, a
          headless CMS that allows content creators to manage and scale
          platforms without the intervention of developers.
        </i>
      </p>
      <h2>The bright idea</h2>
      <p>
        If content is king, quality is queen. Honeypot’s objective was to
        amplify their community with high quality, engaging features that could
        be built over time without relying on development resources. Contentful
        was an optimal solution: as a self-service content management system, it
        lets creators organize content into flexible “modules” or “sections” and
        modeling it as their project evolves. It also plays well with{" "}
        <a href="https://www.gatsbyjs.org/">Gatsby</a>, an open source framework
        that lets you pull data from any data source to render fast websites.
        Gatsby is easy to use if you’re not new to React.
      </p>
    </Chapter>
    <Chapter>
      <h2>Aligning cross-functional teams with Scrum</h2>
      <p>
        Projects involving content and community-building require a lot of
        cross-functional teamwork. Our first step was meeting Honeypot’s team: a
        scrum master, a designer and one editorial manager. Wunderdog’s first
        step was to create a flexible, component based content structure that
        could be adapted to different designs. After a careful initial
        assessment and considering the budget, we extended the project timeline
        by two months. This adjustment was crucial because it allowed the
        designer to catch up and get more stakeholders involved in the project.
        They ranged from SEO to analytics, product and content management.
      </p>
      <p>
        To ensure team effectiveness, we used a strict Scrum process with
        one-week sprints. This structure made us work hand-in-hand to deliver
        successful results and reach our deadline.
      </p>
    </Chapter>
    <Image src={image1} alt=".cult image content" />
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
        One of the main benefits of cross-functional teams are all the
        multidisciplinary perspectives that are considered throughout the
        product development process. However, they also require regular
        alignment from a very initial phase. The{" "}
        <a href="https://cult.honeypot.io/">.cult</a> platform had to be built
        from scratch in a short amount of time. All the stakeholders worked
        closely together and ensured the individual parts would contribute to
        the overall functionality of the project. Content, features and metadata
        such as tags and categories –not to mention SEO– were all essential
        elements we needed to build together. This required shorter but more
        frequent evaluations to make sure that they would work properly.
      </p>
      <p>
        Gatsby also pushed us to get into a new developer mindset. When working
        with statically generated pages, which can still contain a lot of
        dynamic elements, you might run into peculiarities that you otherwise
        wouldn’t. Gatsby only uses its server-side rendering API when doing
        production builds, not during development. This forces the developer to
        conceptually separate the static and dynamic aspects of the app in order
        to avoid common pitfalls (such as trying to access browser globals from
        a Node context).
      </p>
    </Chapter>
    <ImageRow></ImageRow>
    <Chapter>
      <h2>So, how did it go?</h2>
      <p>
        Our goal was to build a high-quality platform with the given timeline
        and budget. We succeeded, delivering sustainable results and empowering
        content managers in the process. Contentful’s flexible tools allowed us
        to create any type of content, giving creators full ownership of their
        work. They can now change the designs or add elements (videos, features,
        pages, etc) on the go without developer intervention.
      </p>
      <p>
        Scrum helped the team align regularly for optimal delivery.
        Development-wise, the process was enriching: Gatsby and Contentful make
        any project fun. Consulting-wise, here are a few lessons we learnt:
      </p>
      <ol>
        <li>
          Voicing concerns candidly at an early stage is valuable in the long
          run.
        </li>
        <li>
          Adjusting expectations and validating assumptions are both valuable
          effects of the consulting process.
        </li>
        <li>
          Flexibility is key: One of the main benefits of cross-functional teams
          are all the multidisciplinary perspectives that are considered
          throughout the product development process. For example, you might
          become a project manager or team lead when you thought that the client
          was looking for just a front-end engineer. Starting a project with an
          open mind helps the consultant and the existing team to align for best
          practices.
        </li>
      </ol>
      <p>
        Finding an understanding between all the stakeholders required effective
        communication from the team. This included switching, adapting,
        designing, adding new features, changing elements and moving between
        functions regularly. It entailed many processes that weren’t reduced to
        a front-end or back-end project. A big part of the work consists of
        suggesting solutions, priorities and compromises. We submerged in the
        content management system, and the result is a new blossoming community
        we are now glad to be part of.
      </p>
      <Image src={image2} alt=".cult hero" />
    </Chapter>
    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let’s take the next step together.">
        <JasperVanGhemen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
);
