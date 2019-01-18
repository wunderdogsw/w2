import './index.css'
import React, { Component } from 'react'
import Image from 'App/components/Image'
import background from './bg.jpg'
import backgroundThumb from './bg-thumb.jpg'
import foreground from './foreground.png'
import foregroundThumb from './foreground-thumb.png'
import mikko from './mikko-frames.png'
import mikkoThumb from './mikko-frames-thumb.png'
import pirjo from './pirjo-frames.png'
import pirjoThumb from './pirjo-frames-thumb.png'




export default () => {
  const whichSkier = Math.round(Math.random())
  return (
    <div className="PumPumCustomHero">
      <div className="PumPumCustomHero__world">
        <Image
          className="PumPumCustomHero__background"
          asBackground
          src={ background }
          thumbSrc={ backgroundThumb }
        />
        <Image
          className="PumPumCustomHero__foreground"
          asBackground
          src={ foreground }
          thumbSrc={ foregroundThumb }
        />
      </div>
      <Image
        className="PumPumCustomHero__skier"
        asBackground
        src={ whichSkier ? pirjo : mikko }
        thumbSrc={ whichSkier ? pirjoThumb : mikkoThumb }
      />
    </div>
  )
}
