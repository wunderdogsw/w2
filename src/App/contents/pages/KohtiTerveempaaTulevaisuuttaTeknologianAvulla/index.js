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
import HubspotForm from 'react-hubspot-form'
import './index.css'

import photo1 from './somebuddy-wunderdog.jpg'
import photo2 from './blueprint-genetics-wunderdog.jpg'
import photo3 from './abe-wunderdog-sales.jpg'

export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
    <MainTitle narrow>Kohti terveempää tulevaisuutta teknologian avulla</MainTitle>
    <Video src="https://player.vimeo.com/external/373123756.hd.mp4?s=df9edf8ebcd1410bca9d4743c2f1221c115fd73f&profile_id=174" indent />
    <Chapter>
      <p>
      Digitalisaatio on muuttanut sosiaali- ja terveysalaa viime vuosina.
      Parhaimmilaan digitalisaatio helpottaa päivittäistä työtä ja tuo
      kustannussäästöjä automatisoinnilla ja uusilla työkaluilla.
      Pahimmillaan se kuormittaa henkilöstöä ja luo digitaalista kaaosta.
      Me Wunderdogilla kannatamme ensimmäistä vaihtoehtoa - uskomme että asiat
      voi tehdä paremmin modernin teknologian ja fiksujen työtapojen avulla.
      Olemme olleet mukana luomassa useita menestystarinoita alan toimijoille
      aina startupeista isoihin yhtiöihin.
      </p>
      <p>
      <b>Nyt on aika investoida parempaan tulevaisuuteen.</b>
      </p>
      <p>
      Ota yhteyttä <a className="noHyphen" href="mailto:ville.arponen@wunderdog.fi">ville.arponen<span>@</span>wunderdog.fi </a>
      tai täytä yhteystietosi alle ja sovitaan maksuton 30 min sparrailupuhelu! Ratkaistaan ongelmasi yhdessä.
      </p>
  

    <HubspotForm
    portalId='1704241'
    formId='e4b0b759-034f-438e-bdaf-f8013c58c323'
    css=''
  />

    </Chapter>

    <Chapter>
      <h2>CASE: Someturva</h2>
    </Chapter>
    <Chapter>
      <p>
      Loimme mobiilisovelluksen joka tarjoaa lakiapua kiusaamisen pysäyttämiseksi
      sosiaalisessa mediassa. Tällä sovelluksella erityisesti nuoret voivat
      hakea apua netissä kohtaamaansa sopimattomaan käytökseen jota kohtaavat
      netissä.
      Sovellus on palvelu, joka tarjoaa matalan kynnyksen lakiapua ongelmiin,
      kuten kiusaamiseen, häirintään tai yksityisen tiedon levittämiseen.
      Sovelluksella on tekoälyn sydän, mutta ihmisen empatia.
      <TransitionLink to='https://wunder.dog/work/someturva'> Lue koko case esittely.</TransitionLink>
      </p>
    </Chapter>

    <Indent twice><Stats>
      <div>
        <span>18k</span>
        <span>nuorta on kirjautunut palveluun
        </span>
      </div>
      <div>
        <span>1000</span>
        <span>ihmistä on saanut apua raportoimiensa rikosten selvittämiseen
        </span>
      </div>
      </Stats></Indent>

    <Chapter>
        <p>
        <i>
        Kiinnostuitko? Ota yhteyttä.
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
    </Chapter>
    <Image src={ photo1 } alt="Somebuddy app" indent="left" hero/>
    <Chapter>
      <h2>
        CASE: Blueprint Genetics
      </h2>
      <p>
        Entä jos tutkimustyönä alkanut projekti voisi muuttua menestyväksi
        liiketoimintakokonaisuudeksi, johon kuuluu useita modernin teknologian
        ratkaisuilla tuettuja kaupallisia tuotteita ja palveluita, joiden avulla
        käsitellään suuria määriä ihmisten geneettistä dataa? Kaikki tämä kävi
        toteen. <TransitionLink to='https://wunder.dog/work/blueprint-genetics'> Lue koko case esittely.</TransitionLink>
        </p>
      </Chapter>

      <Indent twice><Stats>
        <div>
          <span>200%</span>
          <span>Blueprint Geneticsin liikevaihto on yli tuplaantunut vuosittain
          yhteistyömme aikana.
          </span>
        </div>
        <div>
          <span>1000TT</span>
          <span>Blueprint Geneticsin keräämä data lasketaan tänä päivänä
          petatavuina. 1 petatavu = 1000 teratavua.
          </span>
        </div>
        </Stats></Indent>

        <Chapter>
            <p>
            <i>
            Haluatko kuulla lisää? Ota yhteyttä.
            </i>
            </p>
            <p>
            <i>
            Antero Törhönen
              <SubTitle>
              <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a>
              </SubTitle>
              +358505281678
              </i>
            </p>
        </Chapter>

      <Image src={ photo2 } alt="Blueprint Genetics" indent="right" hero/>


    <Chapter>
      <h2>
        Yhdessä rakennamme hyvistä ideoista digitaalista todellisuutta
      </h2>
    </Chapter>
    <Indent twice>
      <Logos>
        <Clients />
      </Logos>
    </Indent>
    <Chapter>
      <h2>
        Palvelumme
      </h2>
      <p><b>Ohjelmistokehitys</b><br />Luomme korkealaatuisia digitaalisia tuotteita ja palveluita</p>
      <p><b>Tuoteanalyysi</b><br />Ymmärrystä siitä, kuinka käyttäjät sitoutuvat rakentamiimme palveluihin sekä palveluiden kehittämistä sitoutumisen parantamiseksi</p>
      <p><b>Liiketoiminnan muotoilu</b><br />Uuden liiketoiminnan kehittäminen, konseptointi ja testaus</p>
      <p><b>Tuote- ja palvelumuotoilu</b><br />Rakennamme käyttäjäystävällisiä käyttöliittymiä osaksi erinomaista kuluttajakokemusta</p>
      <p><b>Valmennus ja tiimin johtaminen</b><br />Sovellamme ketteriä menetelmiä tukemaan järkevämpiä työskentelytapoja</p>
      <p><b>Toimittajayhteistyö</b><br />Luotettavaa tekemistä ohjelmistokehitysprosessien tehostamiseen</p>
    </Chapter>

<Image src={ photo3 } alt="Wunderdog sales" indent="left" hero/>

      <Chapter>
      <h2>
        Design Sprint
      </h2>
      <p>
      <b>Wunderdogin Design Sprint</b> on kustannustehokas tuotekehityksen
      helikopterikyyti. Tiesitkö, että Design Sprint on mahdollista fasilitoida
      myös etänä sinulle ja kollegoillesi?
      </p>
      <p>
      Kysy lisää <SubTitle>
      <a className="noHyphen" href="mailto:pirkka.suominen@wunderdog.fi">pirkka.suominen<span>@</span>wunderdog.fi</a>
      </SubTitle>
      tai lataa Design Sprint oppaamme <TransitionLink to='http://landing.wunder.dog/designsprint'> tästä.</TransitionLink>
      </p>
      </Chapter>

    <Chapter>
        <h2>
        Ota yhteyttä
        </h2>
        <p>
        <i>
        Antero Törhönen
          <SubTitle>
           <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358407551327
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
