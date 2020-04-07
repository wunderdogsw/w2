import React from 'react'
import SalespersonTemplate from '../SalespersonTemplate'

import image from './600x600_Biitti.jpg'

export default () => (
  <SalespersonTemplate
    name='Pirkka Suominen'
    responsibility='Sales'
    phone='+358 40 7551327'
    email='pirkka.suominen@wunderdog.fi'
    image={image} />
)
