import React from 'react'
import SalespersonTemplate from '../SalespersonTemplate'

import image from './600x600_Mobu.jpg'

export default () => (
  <SalespersonTemplate
    name='Mika Viskari'
    responsibility='CEO'
    phone='+358 50 3139423'
    email='mika.viskari@wunderdog.fi'
    image={image} />
)
