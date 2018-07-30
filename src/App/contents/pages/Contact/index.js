import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Chapter from 'App/components/Chapter'
import CallToAction from 'App/components/CallToAction'
import ContactRow from 'App/components/ContactRow'

import { ElectronicInvoicing } from 'App/contents/callToActions'
import { Helsinki, Berlin, Lund } from 'App/contents/contactOffices'
import { MikaViskari, AnteroTorhonen, JoannaRindell, JasperVanGhemen, RedhaCherif } from 'App/contents/contactFaces'

export default () => (
  <Fragment>
    <MainTitle className="centered">Contact Us</MainTitle>
    <SubTitle alt>
      Feel free to throw us a question or two!
      Let's get together and make some wunders happen!
    </SubTitle>
    <p className="medium centered">
      <a className="noHyphen" href="mailto:hello@wunder.dog">hello<span>@</span>wunder.dog</a>
    </p>

    <ContactRow>
      <Helsinki />
      <MikaViskari />
      <AnteroTorhonen />
    </ContactRow>

    <ContactRow>
      <Berlin />
      <JoannaRindell />
      <JasperVanGhemen />
    </ContactRow>

    <ContactRow>
      <Lund />
      <RedhaCherif />
    </ContactRow>

    <CallToAction>
      <ElectronicInvoicing />
    </CallToAction>
  </Fragment>
)
