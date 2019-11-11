import React, { Fragment } from 'react'
import LogoGrid from 'App/components/LogoGrid'

import logoBarona from './barona_logo.svg'
import logoSmartly from './smartly_logo.svg'
import logoRedbull from './redbull_logo.svg'
import logoRovio from './rovio_logo.svg'
import logoSanomaPro from './sanomapro_logo.svg'
import logoBlueprintGenetics from './blueprintgenetics_logo.svg'
import logoOodi from './oodi_logo.svg'
import logoAlma from './alma_logo.svg'
import logoSometurva from './someturva_logo.svg'

export default () => (
  <Fragment>
    <LogoGrid>
      {[
        ['Sanoma Pro', logoSanomaPro],
        ['Alma', logoAlma],
        ['Barona', logoBarona],
        ['Blueprint Genetics', logoBlueprintGenetics],
        ['Smartly', logoSmartly],
        ['Redbull', logoRedbull],
        ['Oodi', logoOodi],
        ['Someturva', logoSometurva],
        ['Rovio', logoRovio],
      ]}
    </LogoGrid>
  </Fragment>
)
