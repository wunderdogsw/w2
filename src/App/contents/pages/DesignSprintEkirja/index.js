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
import HubspotForm from 'App/components/HubspotForm'
import './index.css'
import ReactGA from 'react-ga'

import photo1 from './juha-larm2.jpg'
import photo2 from './Design-Sprint-L&T.jpg'
import photo3 from './design-sprint-kampus.jpg'
import photo4 from './Abe.jpg'
import photo5 from './design-sprint-ebook.jpg'

export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#fcfcfc',
        '--color-text-on-accent': '#000000',
      }}
    </CssVars>
    <MainTitle narrow>Design Sprint tuotekehityksen tueksi</MainTitle>

    <Video src='https://player.vimeo.com/external/407896117.hd.mp4?s=af58b4132c6328cdd12e1a83392380fc19b6ce4a&profile_id=175' useUnmute/>

    <Chapter>
    <h2>Wunderdogin Design Sprint on tuotekehityksen helikopterikyyti.</h2>
      <p>
      Tiesitkö, että fasilitoimme Design Sprinttejä nyt myös täysin
      etänä? Viikon mittaisella Design Sprintillä ennen kuukausien projektien aloitusta:
      </p>
      <p><b>1)</b> Varmistat, että keskityt relevantteihin ongelmiin</p>
      <p><b>2)</b> Saat konkreettisia tuloksia päätöksen teon tueksi vain yhdessä viikossa </p>
      <p><b>3)</b> Suunnittelet tehokkaasti projektin seuraavat askelmerkit</p>
      <p>
      Design Sprint pureutuu oleelliseen, eli keskusteluun ja idean validointiin
      varsinaisten loppukäyttäjien kanssa ennen projektiin investointia. Jo kevyenkin
      käyttäjätutkimuksen perusteella voidaan tehdä parempi päätös siitä, kannattaako
      kehitysprojektiin sitoutua.
      </p>
      <p>
      <b>Lataa Design Sprint e-kirja alta.</b> Etsitkö englannin kielistä versiota?
      <TransitionLink to='https://wunderdog.fi/design-sprint'>  Löydät sen täältä.</TransitionLink>
      </p>
    </Chapter>

    <HubspotForm
      formId='e7539c06-eb76-4047-b867-c7da2d2847f7'

      onSubmit={() => {
        ReactGA.event({
          category: 'Content Downloads',
          action: 'E-Book',
          label: 'Design Spring E-Book',
        })
      }}
      />

    <Image src={ photo5 } alt="Design Sprint Wunderdog" indent="left" hero/>


    <Chapter>
    <h2>Mihin Design Sprint soveltuu?</h2>
      <p><b>1)</b> Idealla tai konseptilla ei ole vielä muotoa</p>
      <p><b>2)</b> Tarvitset nopean validoinnin uudelle idealle</p>
      <p><b>3)</b> Haluat paljastaa tuotteen tai idean ongelmakohdat</p>
      <p><b>4)</b> Projektille tarvitaan momentum</p>
      <p><b>5)</b> Haluat kehittää tiimityöskentelyä</p>
      <p><b>6)</b> Haluat saada organisaatiosi ymmärtämään muotoiluajattelun
      merkityksen</p>
      </Chapter>

          <Image src={ photo2 } alt="L&T" indent="right" hero/>

      <Chapter>
        <h2>DESIGN SPRINT 1: Lassila & Tikanoja</h2>
        <p>
        Alkuperäinen ongelmien määritys tuli L&T:n briiffistä, jossa kerrottiin
        urakoitsijoiden tavallisesti tilaavan rakennustyömaille rakennusmateriaaleja
        yli tarpeidensa, jotta he välttyisivät töiden viivästymisiltä ja
        ylimääräisiltä työvoimakuluilta materiaalien toimitusten viivästymisen
        vuoksi. Ylijääneet rakennusmateriaalit päätyvät näin ollen jätteeksi,
        joka kuormittaa ympäristöä ja on haitaksi kiertotaloudelle.
        </p>
        <p>
        L&T halusi tutkia kuinka ongelman voisi ratkaista Design Sprintin avulla;
        “Miten voisimme jälleenmyydä käyttämättömät
        rakennusmateriaalit kuluttajille niin, että materiaaleja käytettäisiin
        siihen, mihin alunperin oli suunniteltukin, eli rakentamiseen?"
        <TransitionLink to='https://wunderdog.fi/blog/experimenting-with-new-business-models-using-design-sprint'> Lue koko blogi postaus englanniksi täältä.</TransitionLink>
        </p>
      </Chapter>

            <Image src={ photo3 } alt="SanomaPro" indent="left" hero/>

        <Chapter>
          <h2>DESIGN SPRINT 2: SanomaPro</h2>
          <p>
          Mitä jos uudistaisimme tämän hetken oppimateriaalt täysin luodaksemme
          kustomoidun oppimisen polun oppilaille? Tämä auttaisi opettajia
          vastaamaan paremmin eri luokkien ja oppilaiden erilaisiin tarpeisiin.
          </p>
          <p>
          Sarjalla Design Sprinttejä, me suunnittelimme uuden digitaalisen
          oppimisympäristön yhdessä Sanoma Pron kanssa.
          <TransitionLink to='https://wunderdog.fi/work/sanoma-pro'> Lue koko case englanniksi täältä.</TransitionLink>
            </p>
          </Chapter>


            <Chapter>
            <h2>
            Yhdessä rakennamme hyvistä ideoista digitaalista todellisuutta.
            </h2>
            <p>
            Lue lisää tekemistämme <b>asiakasprojekteista</b> <TransitionLink to='https://wunderdog/work'> täältä.</TransitionLink>
            </p>
            </Chapter>

    <Indent twice>
      <Logos>
        <Clients />
      </Logos>
    </Indent>

        <Image src={ photo4 } alt="Abe" indent="right" hero/>

        <Chapter>
        <h2>
        Ota yhteyttä
        </h2>
        <p>
        <i>
        Antero Törhönen, Helsinki
          <SubTitle>
           <a className="noHyphen" href="mailto:antero.torhonen@wunderdog.fi">antero.torhonen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358505281678
          </i>
        </p>
        <p>
        <i>
        Pirkka Suominen, Helsinki
          <SubTitle>
           <a className="noHyphen" href="mailto:pirkka.suominen@wunderdog.fi">pirkka.suominen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358407551327
          </i>
        </p>
        <p>
        <i>
        Ville Arponen, Helsinki
          <SubTitle>
           <a className="noHyphen" href="mailto:ville.arponen@wunderdog.fi">ville.arponen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +358505637955
          </i>
        </p>
        <p>
        <i>
        Jasper van Ghemen, Berliini
          <SubTitle>
           <a className="noHyphen" href="mailto:jasper.vanghemen@wunderdog.fi">jasper.vanghemen<span>@</span>wunderdog.fi</a>
          </SubTitle>
          +491752948023
          </i>
        </p>

    </Chapter>
  </Fragment>
)
