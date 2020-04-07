import React, { Component,  } from 'react'

import './index.css'
import Chapter from '../Chapter'
import Card from '../Card'
import Image from '../Image'
import CardContainer from '../CardContainer'
import CardsGrid from '../CardsGrid'
import { posts } from '../../routes/Blog'

export default class extends Component {

  render() {
    const { children } = this.props

    return (
      <section className="LatestBlogPosts">
        <Chapter>
          <h2>Our latest blog posts</h2>
          <p>Behind every individual is the support and shared knowledge of the
          entire Wunderdog team, with a bold and open-minded attitude towards
          possibilities that enables us to stay ahead of our game. We want to
          share our learnings with you too.</p>
        </Chapter>
        <CardsGrid disharmony>
          { posts
            .slice(0, 2)
            .map(({ id, title, author, image }, i) => (
            <CardContainer key={i}>
              <Card type="post" key={ id } to={ `/blog/${id}` }>
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
