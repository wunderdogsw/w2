import React, { Fragment } from 'react'

import LogoGrid from '../../../components/LogoGrid'
import logoCoventures from './coventures_logo.svg'
import logoOrangit from './orangit_logo.svg'
import logoPolarsquad from './polarsquad_logo.svg'

export default () => (
  <Fragment>
    <LogoGrid>
      {[
        ['Polarsquad', logoPolarsquad],
        ['Orangit', logoOrangit],
        ['Coventures', logoCoventures]
      ]}
    </LogoGrid>
  </Fragment>
)
