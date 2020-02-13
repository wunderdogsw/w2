import './index.css'
import React from 'react'
import MainTitle from '../../../../components/MainTitle'
import Image from '../../../../components/Image'
import hero from './pahkina.jpg'

export default () => (
  <div className="PahkinaCustomHero">
    <MainTitle centered>Wundernut</MainTitle>
    <Image src={ hero } alt="Pahkina" />
  </div>
)
