import React, { Component } from 'react'

import './index.css'
import Card from '../Card'
import CardContainer from '../CardContainer'
import CardsGrid from '../CardsGrid'
import Image from '../Image'
import { works } from '../../routes/Work'

export default class extends Component {

  render() {
    const { children } = this.props

    return (
      <section className="LatestWork">
        <CardsGrid disharmony>
          { works
            .slice(0, 4)
            .map(({ id, title, client, image }, i) => (
              <CardContainer key={i}>
                <Card type="work" key={ id } to={`/work/${ id }`}>
                  <Image src={ image } alt={ title } />
                  <h4>{ title }</h4>
                  <p>{ client }</p>
                </Card>
              </CardContainer>
            ))}
        </CardsGrid>
        <div className="LatestWork__content">
          { children }
        </div>
      </section>
    )
  }
}
