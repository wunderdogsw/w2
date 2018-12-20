import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import ImageRow from 'App/components/ImageRow'
import Chapter from 'App/components/Chapter'
import Summary from 'App/components/Summary'
import DatLine from 'App/components/DatLine'
import YoutubeVideo from 'App/components/YoutubeVideo'

import heroThumb from './oodi-hero-thumb.jpg'
import hero from './oodi-hero.jpg'
import photo1Thumb from './oodi-photo1-thumb.jpg'
import photo1 from './oodi-photo1.jpg'
import photo2Thumb from './oodi-photo2-thumb.jpg'
import photo2 from './oodi-photo2.jpg'
import summary from './smartly-summary.svg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#ffd400',
        '--color-text-on-accent': '#000',
      }}
    </CssVars>
    <MainTitle>Oodi Helsinki Central Library</MainTitle>
    <SubTitle useAsMetaTitle>Teamwork makes the dream work</SubTitle>
    <DatLine />
    <Keywords>Design & Development</Keywords>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Oodi" />
    <Chapter>
      <h4>Setting the scene</h4>
      <p>
        When talking about the new Helsinki central library, we aren’t talking
        about the standard library but instead of a new monument in the central
        Helsinki equipped with high-tech equipment for the people to use.
        Besides the library’s 3D-laser printers, laser cutters and computerised
        embroidery machines one can find books there too. For their grand
        opening at the beginning of December 2018, Oodi (‘ode’ in Finnish) had
        to organise the celebrations it deserved.
      </p>
    </Chapter>
    <YoutubeVideo videoId="XyNlqQId-nk" />
    <Chapter>
      <h4>The bright idea</h4>
      <p>
        As a part of the grand opening, the Helsinki Urban Environment Division
        wanted to create inclusive space for people to contribute to the
        development of the city and they shared duties with creative agency
        Sherpa.
      </p>
      <p>
        With no technological background, Sherpa needed a partner to co-create
        and execute the digital part of the experience to Oodi, and they
        suggested collaboration - and it was the start of the partnership of
        Sherpa and Wunderdog.
      </p>
    </Chapter>
    <Chapter>
      <h4>The inevitable challenge</h4>
      <p>
        Together with Sherpa, we needed to create an interactive space where
        the people could contribute to the development of Helsinki and get to
        the know the contemporary Helsinki. We wanted to present Helsinki and
        its districts in an engaging and different kind of ways.
      </p>
    </Chapter>
    <ImageRow>
      <Image thumbSrc={ photo1Thumb } src={ photo1 } alt="Smartly crew 2" />
      <Image thumbSrc={ photo2Thumb } src={ photo2 } alt="Smartly crew 3" />
    </ImageRow>
    <Chapter>
      <h4>Our hands-on solution</h4>
      <p>
        We used the style guide of Helsinki city and created three different
        experiences for the people to use: A merry quiz to solve which Helsinki
        district the user is, a social media wall that gathers all the content
        posted in social media channels with the hashtag #unelmienkaupunki and
        a 3D audiovisual map of Helsinki and its districts.
      </p>
      <p>
        We designed and developed the experiences in smooth collaboration with
        Sherpa, and for us, it was an exciting project as we had a chance to use
        Unity with the 3D map that we haven’t used before. The current map
        experience is made with Helsinki’s old lo-res 3D map and will be
        upgraded to high-resolution version as soon as it’s available for
        developers.
      </p>
      <p>
        In Helsinki Test, we build a quite good look & feel using modern CSS
        animations, and with the test itself, we used React. And it was an
        excellent case for front-end too as we didn’t need to think other
        browsers and resolutions as it was implemented only for iPad.
      </p>
      <p>
        With the social media wall, we benchmarked the existing products as to
        work smartly and efficiently it was the best option for creating it.
        Why start from scratch and waste time and money when there is a good
        product already existing? We found wall.io the best option for us as
        there we could modify the look & feel strongly.
      </p>
    </Chapter>
    <Chapter>
      <h4>So how did it go?</h4>
      <p>
        In the grand opening, there was a buzz going on with the services we
        created to Brygga and the Helsinki Urban Environment Division was happy
        with the results. The collaboration with Sherpa went so well that we’re
        planning new projects together in the future too. For us, it was fun to
        invent services for consumers and be part of creating Oodi. It was also
        the first time we collaborated with creative agency, and we love it when
        we make a match with other great companies.
      </p>
    </Chapter>
    <Chapter>
      <h4>Success that speaks for itself</h4>
      <p>
        Oodi stands for itself and promotes lifelong learning, active citizenship,
        democracy and freedom of expression, and it has been a pleasure to be
        part of this journey. The project itself was a success and everyone
        involved are pleased with the outcome and the collaboration both city
        of Helsinki and Sherpa are already continuing with new plans.
      </p>
    </Chapter>
    <Summary>
      <Image src={ summary } alt="" />
      <h4>The challenge</h4>
      <p>
        To create an exciting and interactive way for people to familiarise
        with Helsinki and contribute to developing the city together.
      </p>
      <h4>The result</h4>
      <p>
        Combining the capabilities of a creative agency and a technology & design
        company led to three different kinds of solutions that are in high use
        of the people visiting the Oodi.
      </p>
    </Summary>
  </Fragment>
)
