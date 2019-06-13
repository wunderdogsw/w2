import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import CaseCards from 'App/components/CaseCards'
import { CasesCaseCards } from 'App/contents/other'

export default () => (
  <Fragment>
    <CaseCards>
      <CasesCaseCards />
    </CaseCards>
  </Fragment>
)
