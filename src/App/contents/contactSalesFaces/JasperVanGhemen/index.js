import React from 'react'
import SalespersonTemplate from "../SalespersonTemplate"

import image from './600x600_jasper.jpg'

export default () => (
  <SalespersonTemplate
    name='Jasper Van Ghemen'
    responsibility='Sales'
    phone='+49 175 2948023'
    email='jasper.vanghemen@wunderdog.fi'
    image={image} />
)
