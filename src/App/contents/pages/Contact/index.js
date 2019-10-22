import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import Image from 'App/components/Image'
import Indent from 'App/components/Indent'
import Chapter from 'App/components/Chapter'
import CallToAction from 'App/components/CallToAction'
import ContactRow from 'App/components/ContactRow'

import { ElectronicInvoicing } from 'App/contents/callToActions'
import { Helsinki, Berlin, Lund, Empty } from 'App/contents/contactOffices'
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

import helsinkiThumb from './office_helsinki.jpg'
import helsinki from './office_helsinki.jpg'
import berlinThumb from './office_helsinki.jpg'
import berlin from './office_helsinki.jpg'
import malmoThumb from './office_helsinki.jpg'
import malmo from './office_helsinki.jpg'

export default () => (
  <Fragment>
    <MainTitle>Let's make some wunders happen</MainTitle>
    <Indent>
      <h2>Helsinki</h2>
      <ContactRow>
        <Helsinki />
        <MikaViskari />
        <AnteroTorhonen />
        <AnnaMariaLaFiura />
        <MeriTuuliOlkkonen />
      </ContactRow>
    </Indent>
    <Image thumbSrc={ helsinkiThumb } src={ helsinki } alt="Helsinki" indent />

    <Indent>
      <h2>Berlin</h2>
      <ContactRow>
        <Berlin />
        <JoannaRindell />
        <JasperVanGhemen />
        <LauriPaalama />
      </ContactRow>
    </Indent>
    <Image thumbSrc={ berlinThumb } src={ berlin } alt="Berlin" indent />

    <Indent>
      <h2>Mälmö</h2>
      <ContactRow>
        <Lund />
        <RedhaCherif />
        <MartinLyckestjarn />
      </ContactRow>
    </Indent>
    <Image thumbSrc={ malmoThumb } src={ malmo } alt="Helsinki" indent />

    <CallToAction grid>
      <ElectronicInvoicing />
    </CallToAction>
  </Fragment>
)
