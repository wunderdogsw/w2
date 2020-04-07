import React from 'react'
import SalespersonTemplate from "../SalespersonTemplate"

import image from './600x600_Boogie.jpg'

export default () => (
  <SalespersonTemplate
    name='Antero Törhönen'
    responsibility='Sales'
    phone='+358 50 5281678'
    email='antero.torhonen@wunderdog.fi'
    image={image} />
)
