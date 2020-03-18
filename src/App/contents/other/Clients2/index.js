import React, { Fragment } from 'react'

import LogoGrid from '../../../components/LogoGrid'
import logoBlueprintGenetics from './blueprintgenetics_logo.svg'
import logoOodi from './oodi_logo.svg'
import logoSometurva from './someturva_logo.svg'
import logoPerusterveys from './perusterveys_logo.svg'

export default () => (
  <Fragment>
    <LogoGrid>
      {[
        ['Blueprint Genetics', logoBlueprintGenetics],
        ['Oodi', logoOodi],
        ['Someturva', logoSometurva],
        ['Perusterveys', logoPerusterveys],
      ]}
    </LogoGrid>
  </Fragment>
)
