import './index.css'
import React, { Component } from 'react'
import MainTitle from 'App/components/MainTitle'
import Image from 'App/components/Image'
import hero from './pahkina.jpg'

export default () => (
  <div className="PahkinaCustomHero">
    <MainTitle centered>Wundernut</MainTitle>
    <Image src={ hero } alt="Pahkina" />
  </div>
)
