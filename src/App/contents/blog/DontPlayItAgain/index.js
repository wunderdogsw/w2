import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CssVars from 'App/components/CssVars'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Keywords from 'App/components/Keywords'
import Image from 'App/components/Image'
import Chapter from 'App/components/Chapter'
import TransitionLink from 'App/components/TransitionLink'

import heroThumb from './dont-play-thumb.jpg'
import hero from './dont-play.jpeg'
import photo1Thumb from './dont-play-it-again1.png'
import photo1 from './dont-play-it-again1.png'

export default () => (
  <Fragment>
    <MainTitle narrow>I had a problem: Don’t play it again, Sam!</MainTitle>
    <SubTitle useAsMetaTitle>By Kapu&nbsp;&nbsp;•&nbsp;&nbsp;Mar 4, 2019&nbsp;&nbsp;•&nbsp;&nbsp;Read time 4 min</SubTitle>
    <Keywords>javascript, HTTP, problem solving</Keywords>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Oodi" />
    <Chapter>
      <p>
        We all encounter a range of everyday problems in our lives, both large
        and small. At Wunderdog we’re no different, but we do have the advantage
        of being excellent problem solvers with some pretty advanced technical
        skills — helping us to find innovative answers to some of life’s tricky
        problems.
      </p>
    </Chapter>
    <Chapter>
      <h2>A repetitive problem</h2>
      <p>
        We all like listening to music, and Spotify is pretty handy for that,
        right? For instance, on Spotify you can save albums to “Your Music”,
        which is a good way to keep track of your favorites. But a problem arises
        when you start having loads of them (I have over 300) because Spotify
        doesn’t let you search within the list. That’s annoying since it’s always
        the same tunes that come to mind first, meaning you start to listen to
        the same albums over and over again. A lot of gems you have saved get no
        attention at all and you end up hearing certain songs to death!
      </p>
    </Chapter>
    <Chapter>
      <h2>A searchable solution</h2>
      <p>
        After getting annoyed by this serious problem, I decided that there has
        to be some sort of solution that I could craft. I found out that Spotify
        has an API that allows you to fetch user data, so I coded a search tool
        and made a website where you log in with your Spotify account information.
        The website fetches your user data and all your saved music from your
        Spotify account and allows you to search within your saved albums.
      </p>
    <Image thumbSrc={ photo1Thumb } src={ photo1 } alt="Albums" />
      <p>
        Being able to search for music by title or artist was great, but I
        decided to go even further. I added genre tags to albums by searching
        for data from last.fm. Now I can search for “atmospheric black metal” or
        whatever I feel like listening to, and the website filters my music
        accordingly.
      </p>
      <p>
        Thinking back to the initial problem of listening to the same songs over
        and over again I decided to also add how many times I’ve listened to each
        album on the website. Now I can search for tunes I haven’t listened to
        that much and avoid getting tired of the ones I listen to the most.
      </p>
    </Chapter>
    <Chapter>
      <h2>Problem solved</h2>
      <p>
        This has made listening to music a lot easier and added much more variety.
      </p>
      <p>
        If you share the same problem, go ahead and check out my solution <TransitionLink to="https://github.com/arttuka/luma">here</TransitionLink> —
        then code a similar one yourself or just start using mine!
      </p>
    </Chapter>

  </Fragment>
)
