import React, { Fragment } from 'react'

import Chapter from '../../../components/Chapter'
import ImageRow from '../../../components/ImageRow'
import Image from '../../../components/Image'
import CallToAction from "../../../components/CallToAction"
import { CaseContactInfo } from "../../callToActions"
import { JasperVanGhemen } from '../../contactSalesFaces'

import image1 from './HoneypotCult-Wunderdog2.jpg'
import image2 from './HoneypotCult-Wunderdog3.jpg'

export default () => (
  <Fragment>
    <Chapter>
      <p>
        <i>
          Our customer Honeypot, Europe’s developer-focused job platform, wanted to build a new media platform for their Developer Community, <a href="https://cult.honeypot.io/">“.cult”</a>, in which to hold blog posts, articles, visual material (videos and documentaries), events and podcasts. Jessika, our developer, built an embedded system with <a href="https://www.contentful.com/">Contentful</a>, a headless CMS that allows content creators to manage and scale platforms without the intervention of developers.
        </i>
      </p>
      <h2>The bright idea</h2>
      <p>
        If content is king, quality is queen. Honeypot’s objective was to amplify their community with high quality, engaging features that could be moduled over time without relying on development resources. Contentful was an optimal solution: as a self service content management system, it lets creators organize content into flexible “modules” or “sections” and modeling it as their project evolves. Thus, new pages can be added and the content and structure. To some extent, even design of existing pages can be edited directly in the system. Contentful also plays well with <a href="https://www.gatsbyjs.org/">Gatsby</a>, an open source framework that lets you pull data from any data source to render fast websites, and is easy to use if you’re not new to React.
      </p>
    </Chapter>
    <Chapter>
      <h2>Aligning cross-functional teams with Scrum</h2>
      <p>
        Projects involving content and community-building require much cross-functional teamwork. We started by aligning ourselves with the team on Honeypot’s end: a scrum master, a designer and one editorial manager. Wunderdog’s first step was to create a flexible, component based content structure that could be adapted to different designs. After aligning with the budget, we extended the project timeline to two months. This helped the designer catch up and get more stakeholders involved in the project, ranging from SEO to analytics, product and content management.
      </p>
      <p>
        To ensure team effectiveness, we used a strict Scrum process with one-week sprints. This structure made us work hand-in-hand to deliver successful results within our estimated deadline.
      </p>
    </Chapter>
    <Image src={ image1 } alt=".cult image content" />
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
        A positive outcome from cross-functional work teams is the multiple perspectives on the evolution of a product. However, they also require regular alignment from a very initial phase. The <a href="https://cult.honeypot.io/">.cult</a> platform was built from scratch and thus had to be thoroughly conceptualized. Honeypot was aware of all the possible issues and functions interlinked with the project and they dedicated the necessary time to it. Functionality and features, as well as content and metadata such as tags and categories –not to mention SEO– are elements to be thought about early on. They may require several iterations. For that purpose, testing and re-evaluation was an integral part of the process. One of the best tips to give as a consultant is to avoid assumptions: check and test regularly!
      </p>
      <p>
        Gatsby also pushed us to get into a different mindset. When working with statically generated pages, which at the same time can contain a lot of dynamic elements, you might run into peculiarities that you wouldn’t otherwise. Gatsby only uses its server-side rendering API when building for production, not during development. This forces the developer to conceptually separate the static and dynamic aspects of the app in order to avoid common pitfalls (such as trying to access browser globals from a Node context).
      </p>
    </Chapter>
    <ImageRow>
    </ImageRow>
    <Chapter>
      <h2>So, how did it go?</h2>
      <p>
        Our milestone was to build a high-quality platform within our deadline and budget. We succeeded, delivering sustainable results and empowering content managers in the process. Contentful’s flexible structure allowed us to create any type of content, giving creators full ownership. They can now change the design or add elements (videos, features, pages, etc) on the go without developer intervention.
      </p>
      <p>
        Scrum helped the team align regularly for optimal delivery. Development-wise, the process was enriching: Gatsby and Contentful make any project fun. Consulting-wise, here are a few conclusions we drew:
      </p>
      <ol>
        <li>
          Voicing concerns candidly at an early stage is valuable in the long run.
        </li>
        <li>
          Adjusting expectations is part of the consulting process: test, check, repeat!
        </li>
        <li>
          Flexibility is key: Consultants often take roles in the process they didn’t expect at the beginning, becoming project managers or team leads, for example. Starting a project with an open mind helps the consultant and the existing team to align for best practices.
        </li>
      </ol>
      <p>
        Aligning Honeypot’s stakeholders required very effective lines of communication. This implied switching, adapting, designing, adding new features, changing elements and moving between functions regularly. It implied many processes that weren’t reduced to a front-end or back-end project: a big part of the work consists of suggesting solutions, priorities and compromises. We all submerged in the content management system, and the result is a new blossoming community we are now glad to be part of.
      </p>
      <Image src={ image2 } alt=".cult hero" />
    </Chapter>
    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let’s take the next step together.">
        <JasperVanGhemen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
)
