import React, { Fragment } from 'react'

import MainTitle from '../../../components/MainTitle'
import Card from '../../../components/Card'
import CardContainer from '../../../components/CardContainer'
import CardsGrid from '../../../components/CardsGrid'
import Image from '../../../components/Image'
import { works } from '../../../routes/Work'

export default () => (
  <Fragment>
    <MainTitle narrow>We help companies and communities succeed</MainTitle>
    <CardsGrid disharmony>
      {works
        .map(({ id, title, client, image }, i) => (
          <CardContainer key={i}>
            <Card type="work" key={ id } to={`work/${ id }`}>
              <Image src={ image } alt={ title } />
              <h4>{ title }</h4>
              <p>{ client }</p>
            </Card>
          </CardContainer>
        ))}
    </CardsGrid>
  </Fragment>
)
