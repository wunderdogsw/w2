import './index.css'
import React, { Component, Fragment } from 'react'
import cs from 'classnames'
import Chapter from 'App/components/Chapter'
import Card from 'App/components/Card'
import Image from 'App/components/Image'
import Indent from 'App/components/Indent'
import CardContainer from 'App/components/CardContainer'
import CardsGrid from 'App/components/CardsGrid'
import { posts } from 'App/routes/Blog'

export default class extends Component {

  render() {
    const { children } = this.props

    return (
      <section className="LatestBlogPosts">
        <Indent>
          <Chapter>
            <h2>Continuous experimentation and learning</h2>
            <p>Behind every individual is the support and shared knowledge of the entire Wunderdog team, with a bold and open-minded attitude towards possibilities that enables us to stay ahead of our game. We want to share our learnings for you too.</p>
          </Chapter>
        </Indent>
        <CardsGrid disharmony>
          { posts
            .slice(0, 2)
            .map(({ id, title, author, image }, i) => (
            <CardContainer key={i}>
              <Card type="post" key={ id } to={ `blog/${id}` }>
                <Image asBackground src={ image } alt={ title } />
                <h4>{title}</h4>
                <p>By {author.name}</p>
              </Card>
            </CardContainer>
          ))}
        </CardsGrid>
        <div className="LatestBlogPosts__content">
          { children }
        </div>
      </section>
    )
  }
}
