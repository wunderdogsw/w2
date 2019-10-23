import React, { Fragment, useState } from 'react'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'
import Card from 'App/components/Card'
import CardsGrid from 'App/components/CardsGrid'
import CardContainer from 'App/components/CardContainer'
import cs from 'classnames'
import Image from 'App/components/Image'
import Navigation from 'App/components/Navigation'
import { allCategory, categories, posts } from 'App/routes/Blog'

export default () => {
  const [currentCategory, setCurrentCategory] = useState(allCategory)

  return (
    <Fragment>
      <MainTitle narrow>Our stories</MainTitle>
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
          .map(({ id, title, author, image, nextBlog }) => (
            <CardContainer>
              <Card type="post" key={id} to={`blog/${id}`}>
                <Image thumbSrc={image} src={image} alt={title} />
                <h4>{title}</h4>
                <p>By {author.name}</p>
              </Card>
            </CardContainer>
          ))}
      </CardsGrid>
    </Fragment>
  )
}
