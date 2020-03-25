import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import MainTitle from 'App/components/MainTitle'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Indent from 'App/components/Indent'
import Grid from 'App/components/Grid'
import Chapter from 'App/components/Chapter'
import Stats from 'App/components/Stats'
import { SeriousStats } from 'App/contents/stats'
import Logos from 'App/components/Logos'
import { Clients, Ecosystem } from 'App/contents/other'
import CssVars from 'App/components/CssVars'
import TransitionLink from 'App/components/TransitionLink'
import SubTitle from 'App/components/SubTitle'
import Video from 'App/components/Video'
import BlockQuote from 'App/components/BlockQuote'

import photo1 from './Wunderdog-digital.jpg'
import photo4 from './Abe.jpg'

export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
    <MainTitle narrow>Nyt on aika investoida parempaan tulevaisuuteen.</MainTitle>

    <Image src={ photo1 } alt="iPad-image" indent="right" hero/>

    <Chapter>
    <h2>Palvelemme tällä hetkellä 100% asiakkaistamme etänä. Voisimmeko palvella sinuakin?
    </h2>
      <p>
      Onko tehtävälistallasi kasa ideoita, joiden tiedät tuottavan arvoa
      liiketoiminallesi, mutta aiemmin niiden toteuttamiseen ei ole löytynyt riittävästi
      aikaa tai resursseja?
      </p>
      <SubTitle>
      <p>
      Tulevaisuuteen investoidaan nyt.
      </p>
      <p>
      Ota yhteyttä ja ratkaistaan ongelmasi yhdessä <a className="noHyphen" href="mailto:hello@wunderdog.fi">hello<span>@</span>wunderdog.fi</a>
      </p>
    </SubTitle>
    </Chapter>

    <Chapter>
      <h2>
        Palvelumme
      </h2>
      <p><b>Ohjelmistokehitys</b><br />Luomme korkealaatuisia digitaalisia tuotteita ja palveluita</p>
      <p><b>Tuoteanalyysi</b><br />Ymmärrystä siitä, kuinka käyttäjät sitoutuvat rakentamiimme palveluihin sekä palveluiden kehittämistä sitoutumisen parantamiseksi </p>
      <p><b>Liiketoiminnan muotoilu</b><br />Uuden liiketoiminnan kehittäminen, konseptointi ja testaus </p>
      <p><b>Tuote- ja palvelumuotoilu</b><br />Rakennamme käyttäjäystävällisiä käyttöliittymiä osaksi erinomaista kuluttajakokemusta</p>
      <p><b>Valmennus ja tiimien johtaminen</b><br />Sovellamme ketteriä menetelmiä tukemaan järkevämpiä työskentelytapoja </p>
      <p><b>Toimittajayhteistyö</b><br />Luotettavaa tekemistä ohjelmistokehitysprosessien tehostamiseen </p>
    </Chapter>

    <Chapter>
    <p>
    Lisää meistä ja tekemistämme asiakasprojekteista <TransitionLink to='https://wunder.dog/work'>täällä.</TransitionLink>
    </p>
    </Chapter>
    <Chapter>
    <BlockQuote by=" Teemu Tiainen, Director of Service Delivery at Elisa Santa Monica">
      Wunderdogin työntekijät todella täydensivät osaamisportfoliotamme.
      Kehittäjien osaamistaso oli vaikuttava.
    </BlockQuote>
    </Chapter>

    <Indent twice>
      <Stats useAccent>
        <SeriousStats />
      </Stats>
    </Indent>

    <Chapter>
      <h2>
        Yhdessä luomme hyvistä ideoista digitaalista todellisuutta.
      </h2>
    </Chapter>
    <Indent twice>
      <Logos>
        <Clients />
      </Logos>
    </Indent>

        <Image src={ photo4 } alt="Abe" indent="left" hero/>

    <Chapter>
        <h2>
        Ota yhteyttä!
        </h2>
        <p>
        <i>
        Antero Törhönen
          <SubTitle>
           <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358505281678
          </i>
        </p>
        <p>
        <i>
        Pirkka Suominen
          <SubTitle>
           <a className="noHyphen" href="mailto:pirkka.suominen@wunderdog.fi">pirkka.suominen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358407551327
          </i>
        </p>
        <p>
        <i>
        Ville Arponen
          <SubTitle>
           <a className="noHyphen" href="mailto:ville.arponen@wunderdog.fi">ville.arponen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358505637955
          </i>
        </p>
    </Chapter>

  </Fragment>
)
