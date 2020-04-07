import React, { Fragment, useState } from 'react'
import cs from 'classnames'

import MainTitle from '../../../components/MainTitle'
import Card from '../../../components/Card'
import CardsGrid from '../../../components/CardsGrid'
import CardContainer from '../../../components/CardContainer'
import Image from '../../../components/Image'
import Navigation from '../../../components/Navigation'
import { allCategory, categories, posts } from '../../../routes/Blog'

export default () => {
  const [currentCategory, setCurrentCategory] = useState(allCategory)

  return (
    <Fragment>
      <MainTitle narrow>Endless analysing and learning</MainTitle>
      <Navigation>
        {categories.map(category => (
          <li
            className={cs(
              category === currentCategory && 'Selected'
            )}
            key={category}
            onClick={() => setCurrentCategory(category)}>
            {category}
          </li>
        ))}
      </Navigation>
      <CardsGrid disharmony>

        {posts
          .filter(p => currentCategory === allCategory || p.category === currentCategory)
          .map(({ id, title, author, image, nextBlog }, i) => (
            <CardContainer key={i}>
              <Card type="post" key={id} to={`/blog/${id}`}>
                <Image src={image} alt={title} />
                <h4>{title}</h4>
                <p>By {author.name}</p>
              </Card>
            </CardContainer>
          ))}
      </CardsGrid>
    </Fragment>
  )
}
