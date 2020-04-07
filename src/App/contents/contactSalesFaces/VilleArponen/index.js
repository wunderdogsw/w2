import React from 'react'
import SalespersonTemplate from "../SalespersonTemplate"

import image from './600x600_Abe.jpg'

export default () => (
  <SalespersonTemplate
    name='Ville Arponen'
    responsibility='Sales'
    phone='+358 50 5637955'
    email='ville.arponen@wunderdog.fi'
    image={image} />
)
