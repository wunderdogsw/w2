import './index.css'
import React, { Component } from 'react'
import MainTitle from 'App/components/MainTitle'
import Image from 'App/components/Image'
import hero from './pahkina-hero.png'
import heroThumb from './pahkina-hero-thumb1.jpg'

export default () => (
  <div className="PahkinaCustomHero">
    <MainTitle centered>Wundernut</MainTitle>
    <Image thumbSrc={ heroThumb } src={ hero } alt="Pahkina" />
  </div>
)
