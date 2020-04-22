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

import photo1 from './Wunderdog-digital.jpg'
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
      <MainTitle narrow>Nyt on aika investoida parempaan tulevaisuuteen.</MainTitle>
      <Chapter>
      <YoutubeVideo videoId="HfUjEegWQ1Y"/>
      <h2> Aika löytää liiketoiminnan ongelmakohdat ja ratkoa ne
      sekä tunnistaa arvoa tuottavat tekijät ja panostaa niihin.
      </h2>
      <p>
      Siihen tarvitaan kykyä tunnistaa todelliset ongelmakohdat, luovuutta keksiä
      uusia lähestymistapoja, inhimillisyyttä ymmärtää loppukäyttäjiä ja teknologista
      kompetenssia toteuttaa toimivia ratkaisuja.
      </p>
      <p>
      <b>Tässä olemme asiantuntijoita.</b> Meillä on kokemusta toimivien digitaalisten
      ratkaisujen ideoinnista toteutukseen eri aloilla. Tuomme vanhat järjestelmät
      tähän päivään ja rakennamme tulevaisuuden palveluita, jotka helpottavat meidän kaikkien
      elämää. Keskitymme olennaiseen eli arvoa tuottavaan tekemiseen. Me uskomme,
      että asiat voi tehdä paremmin.
      </p>
      </Chapter>


    <Chapter>
      <h2>
        Tulevaisuuteen investoidaan nyt.
      </h2>
      <p><b>1.</b><br />Ota yhteyttä <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a> tai täytä listan alla oleva lomake</p>
      <p><b>2.</b><br />Sovitaan 30 min maksuton sparrailupuhelu ja kartoitetaan tilanteesi yhdessä</p>
      <p><b>3.</b><br />Päätetään joko lähteä ratkomaan ongelmia yhdessä ja käynnistetään projekti tai todetaan, että tilanteessasi on järkevämpää edetä toisella tavalla </p>
    </Chapter>

    <HubspotForm
    portalId='1704241'
    formId='e4b0b759-034f-438e-bdaf-f8013c58c323'
    css=''
    />
    <Chapter>
    <BlockQuote by=" Teemu Tiainen, Director of Service Delivery at Elisa Santa Monica">
      Wunderdogin työntekijät todella täydensivät osaamisportfoliotamme.
      Kehittäjien osaamistaso oli vaikuttava.
    </BlockQuote>
    </Chapter>

      <Chapter>
      <p>
    <BlockQuote by="Pia Ruusukivi, Director at Alma Talent">
      We’re pleased we found a partner that has been able to live up to our
      expectations.
    </BlockQuote>
      </p>
      </Chapter>

      <Chapter>
    <BlockQuote by="Jussi Paananen, Chief Technology Officer at Blueprint Genetics">
    We appreciate Wunderdog's hard work, open communication and ability to take
    improvements forward.
    </BlockQuote>
    </Chapter>

    <Chapter>
    <p>
    <BlockQuote by="Markus Neimo, CEO of Rahamylly">
    We were impressed by how the Wunderdog team really took the lead on
    the technology and genuinely kept the success of Rahamylly as their
    first priority.
    </BlockQuote>
    </p>
    </Chapter>


    <Chapter>
    <BlockQuote by="Jarno Vuorenmaa, CTO Someturva">
      When it comes to partners it is not just the people but the organization
      as a whole that needs to understand the core dynamics of a startup.
      Wunderdog has been the right partner for us.
    </BlockQuote>
    </Chapter>

<Image src={ photo1 } alt="iPad-image" indent="right" hero/>
      <Chapter>
      <h2>
      Yhdessä rakennamme hyvistä ideoista digitaalista todellisuutta.
      </h2>
      <p>
      Lisää meistä ja tekemistämme asiakasprojekteista <TransitionLink to='https://wunder.dog/work'>täällä.</TransitionLink>
        </p>
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
