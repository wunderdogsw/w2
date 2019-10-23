import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'
import Card from 'App/components/Card'
import CardContainer from 'App/components/CardContainer'
import CardsGrid from 'App/components/CardsGrid'
import Image from 'App/components/Image'
import { works } from 'App/routes/Work'

export default class extends Component {

  render() {
    const { children } = this.props

    return (
      <CardsGrid disharmony>
        { works
          .slice(0, 4)
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
    )
  }
}
