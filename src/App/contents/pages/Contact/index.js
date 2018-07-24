import React, { Fragment } from 'React'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Chapter from 'App/components/Chapter'
import CallToAction from 'App/components/CallToAction'
import ContactRow from 'App/components/ContactRow'

import { ElectronicInvoicing } from 'App/contents/callToActions'
import { Helsinki, Berlin, Lund } from 'App/contents/contactRows'
import { MikaViskari } from 'App/contents/contactFaces'

export default () => (
  <Fragment>
    <MainTitle className="centered">Contact Us</MainTitle>
    <p className="medium centered">
      Feel free to throw us a question or two!<br />
      Let's get together and make some wunders happen!
    </p>

    <ContactRow>
      <Helsinki />
      <MikaViskari />
      <MikaViskari />
    </ContactRow>

    <ContactRow>
      <Berlin />
      <MikaViskari />
      <MikaViskari />
    </ContactRow>

    <ContactRow>
      <Lund />
      <MikaViskari />
      <MikaViskari />
    </ContactRow>

    <CallToAction>
      <ElectronicInvoicing />
    </CallToAction>
  </Fragment>
)
