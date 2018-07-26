import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Chapter from 'App/components/Chapter'
import CallToAction from 'App/components/CallToAction'
import ContactRow from 'App/components/ContactRow'

import { ElectronicInvoicing } from 'App/contents/callToActions'
import { Helsinki, Berlin, Lund } from 'App/contents/contactOffices'
import { MikaViskari } from 'App/contents/contactFaces'

export default () => (
  <Fragment>
    <MainTitle className="centered">Contact Us</MainTitle>
    <p className="medium centered narrow">
      Feel free to throw us a question or two!
      Let's get together and make some wunders happen!
    </p>
    <p className="medium centered">
      <a href="mailto:hello@wunder.dog">hello@wunder.dog</a>
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
