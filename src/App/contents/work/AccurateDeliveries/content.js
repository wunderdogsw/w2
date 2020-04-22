import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import DatLine from 'App/components/DatLine'
import BlockQuote from 'App/components/BlockQuote'
import Stats from 'App/components/Stats'
import Indent from 'App/components/Indent'

import photo1 from './GlobalRetailer-Wunderdog2.jpg'
import {JasperVanGhemen} from '../../contactSalesFaces'
import CallToAction from "../../../components/CallToAction"
import {CaseContactInfo} from "../../callToActions"


export default () => (
  <Fragment>
    <Chapter>
      <h2>Our solution</h2>
      <p>
      Accurately distributing large numbers of deliveries from warehouses to stores
      is a challenging task for major global retailers. Facing this issue themselves,
      our customer, a leading sports retailer in Europe, trusted Wunderdog’s developers
      to build an application to scan all deliveries on arrival in the stores. The
      project would ensure the items coming from warehouses would always match the
      items the stores were expecting to receive.
      </p>
      </Chapter>

    <Chapter>
      <h2>The bright idea</h2>
      <p>
      Our customer reached out to us wanting to use IoT devices—in this case
      network attached RFID scanners—to ensure the accuracy of their stock information
      once the deliveries had arrived in a store. Their goal was to find out if it
      was feasible to use scanner gates to reach a high enough accuracy. Following
      Design Thinking principles, we crafted a more sustainable solution: keeping
      the scanners as devices, setting up a cloud infrastructure and building a
      comparatively simple web application instead of the android application.
      </p>

    </Chapter>

    <Chapter>
      <BlockQuote by=" ">
      Our involvement in the project showed how design thinking can help any
      business find the best solutions to their challenges.
      </BlockQuote>
    </Chapter>
    
    <Chapter>
      <h2>Why a web application?</h2>
      <p>
      Done right, web applications are more versatile than applications specialized
      for one platform, like Android. The effort of developing a web application is
      lower and in the long term it minimizes costs. It does not lack any feature but
      quite the opposite: it is as good as the android application but with more
      desirable benefits.
      </p>
      <p>
      How does it work? The software allows monitoring and collecting information
      coming from the RFID scanners. The scanners scan the tag of the product and
      send the information to our software. After that we can visualize the information
      to give a direct overview of the results and export the data in a format that
      can be analyzed further.
      </p>
      <p>
      The project was hosted in a Google Cloud environment and we built upon Node.js
      and Vue.js using WebSockets for live communication between the backend and
      frontend.
      </p>
    </Chapter>
    <Image src={ photo1 } alt="Wunderdog at work" />
    <Chapter>
      <h2>The inevitable challenge</h2>
      <p>
      Design thinking processes take some time. You need to talk to your customer,
      discuss their possibilities, what they want to achieve and ultimately adapt
      to their needs while proposing feasible solutions. This project required an
      optimal communication between all the involved parties, such as recurring
      negotiations with suppliers. After many collective discussions about the
      development of the project and listening deeply to everyone involved, we
      opted to save our customer’s resources providing functional and uncomplicated
      technical solutions.
      </p>
      </Chapter>

      <Chapter>
      <h2>Success that speaks for itself</h2>
      <p>
      A common understanding and agreement in the initial phase of the project is
      crucial for a good execution, as well as good communication between all the
      interested parties. Our involvement in the project showed how design thinking
      can help any business find the best solutions to their challenges. No matter
      what the original problem is, consultancy can help you implement new technologies
      that will optimize your path towards the end result. In the case of this retailer
      project, we made sure the deliveries are now in the place they belong to.
      </p>
      </Chapter>
    <CallToAction color="blue" large grid>
      <CaseContactInfo slogan="Let’s take the next step together.">
        <JasperVanGhemen />
      </CaseContactInfo>
    </CallToAction>
  </Fragment>
)
