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
import hero from './oodi-hero.png'
import photo1Thumb from './oodi-photo1-thumb.jpg'
import photo1 from './oodi-photo1.png'
import photo2Thumb from './oodi-photo2-thumb.jpg'
import photo2 from './oodi-photo2.png'
import summary from './smartly-summary.svg'


export default () => (
  <Fragment>
    <CssVars>
      {{
        '--color-accent': '#f7f7f7',
        '--color-text-on-accent': '#000',
      }}
    </CssVars>
    <MainTitle>Oodi, Central Library</MainTitle>
    <SubTitle useAsMetaTitle>An ode to the city</SubTitle>
    <DatLine />
    <Keywords>React, Unity, UI Design, UX Design</Keywords>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Oodi" />
    <Chapter>
      <h4>Setting the scene</h4>
      <p>
        Oodi, Helsinki’s brand spanking new central library, is a world away
        from the stereotypical libraries of the past. As well as books as far as
        the eye can see, this new landmark in central Helsinki boasts a whole
        host of high-tech equipment that everyone’s welcome to use – like
        3D laser printers and computerized embroidery machines. For its grand
        opening at the beginning of December 2018, a building this special
        needed a celebration of the city to match
      </p>
    </Chapter>
    <Chapter>
      <h4>The bright idea</h4>
      <p>
        What if the power of digital could be harnessed to deliver interactive
        experiences that would engage everyone with Helsinki as a city and
        create a real buzz around Oodi?
      </p>
      <p>
        As a part of the grand opening, Helsinki Urban Environment Division
        wanted to create an inclusive and interactive space where people could
        get to know Helsinki and contribute to its development.
      </p>
    </Chapter>
    <Chapter>
      <h4>The inevitable challenge</h4>
      <p>
        Helsinki Urban Environment Division brought in creative agency Sherpa,
        but with no technological background, Sherpa needed to find a partner to
        co-create and execute the digital part of the experience. This was the
        start of an inspiring partnership between Sherpa and Wunderdog.
      </p>
    </Chapter>
    <YoutubeVideo videoId="nAMdgX7YXAA" />
    <Chapter>
      <h4>Our capital solution</h4>
      <p>
        We took the City of Helsinki style guide and ran with it, creating three
        different experiences in collaboration with Sherpa:
      </p>
      <ul>
      <li>
        A fun quiz, Helsinki Test, where people could discover which Helsinki district they are
      </li>
      <li>
        A social media wall to gather content posted with the #unelmienkaupunki hashtag
      </li>
      <li>
        An audio-visual 3D map of Helsinki and its districts
      </li>
      </ul>
      <p>
      We created a beautiful look and feel for the Helsinki Test using modern CSS
      animations, and used React for the quiz itself. The great thing about this
      was that we didn’t need to worry about multiple browsers and resolutions
      as the quiz was implemented for iPad only.
      </p>
      <p>
      For the social media wall we benchmarked solutions that were already
      available so we could get things up and running fast. We chose wall.io
      because it gave us the flexibility to create exactly the look and feel we
      wanted. Why start from scratch and waste time and money when someone’s
      already created something that fits the bill perfectly?
      </p>
      <p>
      Developing the 3D map was particularly exciting for us as we got our first
      chance to use the Unity engine.
      </p>
    </Chapter>
    <ImageRow>
      <Image thumbSrc={ photo1Thumb } src={ photo1 } alt="Smartly crew 2" />
      <Image thumbSrc={ photo2Thumb } src={ photo2 } alt="Smartly crew 3" />
    </ImageRow>
    <Chapter>
      <h4>So how did it go?</h4>
      <p>
        There was a real buzz around the grand opening and the Helsinki Urban
        Environment Division was super happy with the results. We really got
        a kick out of the opportunity to create new services for consumers and
        be part of creating the Oodi experience. Oodi supports lifelong learning,
        active citizenship, democracy, and freedom of expression – it has been
        an honor and a pleasure to be part of its journey.
      </p>
    </Chapter>
    <Chapter>
      <h4>Success that speaks for itself</h4>
      <p>
        This project was the first time we’ve collaborated with a creative agency
        and we just love it when we make a match with other great companies.
        The project itself was a success and everyone involved is pleased with
        the outcome. In fact, the collaboration with Sherpa went so well that
        we’re planning to work together on more projects in future.
      </p>
    </Chapter>
    <Summary>
      <Image src={ summary } alt="" />
      <h4>The challenge</h4>
      <p>
        Create an exciting and engaging way for people to get to know Helsinki
        and contribute to its development.
      </p>
      <h4>The result</h4>
      <p>
        Three new interactive experiences that celebrate Helsinki and are actively
        used by visitors to Oodi.
      </p>
      <h4>Technologies used</h4>
      <p>
        React, Unity
      </p>
    </Summary>

  </Fragment>
)
