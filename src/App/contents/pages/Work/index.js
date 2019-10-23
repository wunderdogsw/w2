import React, { Fragment, useState } from 'react'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Card from 'App/components/Card'
import CardContainer from 'App/components/CardContainer'
import CardsGrid from 'App/components/CardsGrid'
import cs from 'classnames'
import Image from 'App/components/Image'
import Navigation from 'App/components/Navigation'
import { works } from 'App/routes/Work'

export default () => (
  <Fragment>
    <MainTitle narrow>We help companies and communities succeed</MainTitle>
    <CardsGrid disharmony>
      {works
        .map(({ id, title, client, image }) => (
          <CardContainer>
            <Card type="work" key={ id } to={`work/${ id }`}>
              <Image thumbSrc={ image } src={ image } alt={ title } />
              <h4>{ title }</h4>
              <p>{ client }</p>
            </Card>
          </CardContainer>
        ))}
    </CardsGrid>
  </Fragment>
)
