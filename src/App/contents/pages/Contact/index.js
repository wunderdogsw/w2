import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Image from 'App/components/Image'
import Indent from 'App/components/Indent'
import Chapter from 'App/components/Chapter'
import CallToAction from 'App/components/CallToAction'
import ContactRow from 'App/components/ContactRow'

import { ElectronicInvoicing } from 'App/contents/callToActions'
import { Helsinki, Berlin, Malmo, Empty } from 'App/contents/contactOffices'
import {
  MikaViskari,
  AnteroTorhonen,
  JoannaRindell,
  JasperVanGhemen,
  RedhaCherif,
  AnnaMariaLaFiura,
  MeriTuuliOlkkonen,
  TimoSand,
  MartinLyckestjarn,
  LauriPaalama,
} from 'App/contents/contactFaces'

import helsinki from './office_helsinki.jpg'
import berlin from './office_berlin.jpg'
import malmo from './office_malmo.jpg'

export default () => (
  <Fragment>
    <MainTitle narrow>Let's make some wunders happen</MainTitle>
    <Image src={ helsinki } alt="Helsinki" indent hero />
    <Indent>
      <ContactRow>
        <Helsinki />
        <MikaViskari />
        <AnteroTorhonen />
        <AnnaMariaLaFiura />
        <MeriTuuliOlkkonen />
      </ContactRow>
    </Indent>

    <Image src={ berlin } alt="Berlin" indent hero />
    <Indent>
      <ContactRow>
        <Berlin />
        <JoannaRindell />
        <JasperVanGhemen />
        <TimoSand />
        <LauriPaalama />
      </ContactRow>
    </Indent>

    <Image src={ malmo } alt="Malmo" indent hero />
    <Indent>
      <ContactRow>
        <Malmo />
        <RedhaCherif />
        <MartinLyckestjarn />
      </ContactRow>
    </Indent>

    <CallToAction grid>
      <ElectronicInvoicing />
    </CallToAction>
  </Fragment>
)
