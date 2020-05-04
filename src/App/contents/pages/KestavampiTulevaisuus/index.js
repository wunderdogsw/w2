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
import HubspotForm from 'react-hubspot-form'
import './index.css'

import photo1 from './Jopo.jpg'
import photo4 from './Abe.jpg'
import YoutubeVideo from 'App/components/YoutubeVideo'

export default () => (

  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
      <MainTitle narrow>Luodaan yhdessä kestävämpi tulevaisuus.</MainTitle>
      <Video src='https://player.vimeo.com/external/408322729.hd.mp4?s=2f0a25ba9df33b1e02c06206dc945eafe070e419&profile_id=175'useUnmute/>
      <Chapter>
      <h2>
      Me autamme.
      </h2>
      <p>
      Viime aikoina yhä useammat meistä ovat joutuneet miettimään yrityksensä
      toimintamallit uudelleen, ja keksimään uusia tuotteita ja palveluita toimintansa
      ylläpitämiseen. Digitaalisaatio on ajankohtaisempaa yhä useamman kohdalla,
      mutta uudistuminen saattaa olla vaikeaa. Meidän työmme on auttaa sinua tässä.
      </p>
      <p>
      Tarvitaan taitoa tunnistaa liiketoiminnan kasvumahdollisuudet ja
      todelliset haasteet, luovuutta keksiä
      uusia lähestymistapoja, inhimillisyyttä ymmärtää loppukäyttäjiä ja
      teknologista
      kompetenssia toteuttaa toimivia ratkaisuja.
      </p>
      <p>
      <b>Tässä olemme asiantuntijoita.</b> Meillä on kokemusta toimivien digitaalisten
      ratkaisujen ideoinnista toteutukseen eri aloilla. Tuomme vanhat järjestelmät
      tähän päivään ja rakennamme tulevaisuuden palveluita, jotka helpottavat meidän kaikkien
      elämää. Me uskomme,
      että asiat voi tehdä paremmin.
      </p>
      </Chapter>


    <Chapter>
      <h2>
      Nyt jos koskaan on aika ratkoa liiketoiminnan ongelmakohdat ja panostaa
      arvoa tuottaviin tekijöihin.
      </h2>
      <p><b>1.</b> Ota yhteyttä <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a> tai täytä listan alla oleva lomake</p>
      <p><b>2.</b> Sovitaan 30 min sparrailupuhelu ja kartoitetaan tilanteesi yhdessä</p>
      <p><b>3.</b> Päätetään joko lähteä ratkomaan ongelmia yhdessä ja käynnistetään projekti tai todetaan, että tilanteessasi on järkevämpää edetä toisella tavalla </p>
    </Chapter>

    <HubspotForm
    portalId='1704241'
    formId='e4b0b759-034f-438e-bdaf-f8013c58c323'
    css=''
    />
    <Chapter>
    <BlockQuote by=" Teemu Tiainen, Director of Service Delivery, Elisa Santa Monica">
      Wunderdog todella täydensi osaamisportfoliotamme.
      Kehittäjien osaamistaso oli vaikuttava.
    </BlockQuote>
    </Chapter>

      <Chapter>
      <p>
    <BlockQuote by="Pia Ruusukivi, Director, Alma Talent">
      Olemme löytäneet kumppanin, joka todella täyttää odotuksemme.
    </BlockQuote>
      </p>
      </Chapter>


    <Chapter>
      <h2>
        Näitä tarjoamme:
      </h2>
      <p><b>Digitaalinen transformaatio</b><br />Arvoketjujen ja prosessien kokonaisvaltainen uudelleen suunnittelu ja implementointi digitaalisten teknologioiden avulla, jotta liiketoiminnalle ja käyttäjille tuotettu arvo maksimoituu.</p>
      <p><b>Kehitysprojektit</b><br />Selkeästi määritellyt projektit. Aloitamme sprintillä, jossa yhdessä asiakkaan kanssa määrittelemme kehitystarpeen, projektin laajuuden ja raamit. </p>
      <p><b>Design- ja koodausapu</b><br />Tuntilaskutuksella työskentely asiakasprojektissa, jotta projekti saadaan maaliin halutussa aikataulussa. Designereillamme ja koodareillamme on keskimäärin kymmenen vuoden kokemus alaltaan.</p>
    </Chapter>

<Image src={ photo1 } alt="iPad-image" indent="right" hero/>
      <Chapter>
      <h2>
      Yhdessä rakennamme hyvistä ideoista digitaalista todellisuutta.
      </h2>
      <p><i>Loimme <b><TransitionLink to='https://wunderdog.fi/work/sanoma-pro'> digitaalisen oppimisympäristön</TransitionLink> </b>
      Sanomapron kanssa, jotta opiskelu olisi mukavaa myös etänä.</i></p>
      <p><i>Autoimme Suomen biopankkeja rakentamaan <b><TransitionLink to='https://www.facebook.com/wunderdogofficial/posts/2972412549491165/'> kampanjan, jonka avulla
      kerätään biopankkisuostumuksia, </TransitionLink></b> joita käytetään hoitojen ja ennaltaehkäisevien
      menetelmien kehittämisessä tauteja, kuten koronavirusta vastaan. </i></p>
      <p><i>Loimme <b><TransitionLink to='https://wunderdog.fi/work/someturva'> Someturva-sovelluksen, </TransitionLink></b>
      jonka avulla voit turvata itsesi ja läheisesi somessa nettikiusaamisen
      lisääntyessä. </i></p>
      <p>
      Lisää meistä ja muista tekemistämme asiakasprojekteista <b><TransitionLink to='https://wunder.dog/work'>täällä.</TransitionLink></b>
        </p>
      </Chapter>
      <Indent twice>
      <Logos>
        <Clients />
      </Logos>
      </Indent>

      <Chapter>
    <BlockQuote by="Jussi Paananen, Chief Technology Officer, Blueprint Genetics">
    Arvostamme Wunderdogin ahkeruutta, avointa kommunikaatiota ja kykyä viedä parannusehotukset maaliin saakka.
    </BlockQuote>
    </Chapter>

    <Chapter>
    <p>
    <BlockQuote by="Markus Neimo, CEO, Rahamylly">
    Olimme vaikuttuneita siitä, kuinka Wunderdog otti teknologisen johtajuuden ja aidosti piti meidän menestymistämme tärkeimpänä prioriteettinään.
    </BlockQuote>
    </p>
    </Chapter>

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
        +358505281678</i>
        </p>
        <p>
        tai jätä yhteystietosi:
        </p>


        <HubspotForm
        portalId='1704241'
        formId='e4b0b759-034f-438e-bdaf-f8013c58c323'
        css=''
        />


  </Chapter>
</Fragment>
)
