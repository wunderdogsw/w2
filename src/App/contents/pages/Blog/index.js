import React, { Fragment, useState } from 'react'
import Card from '../../../components/Card'
import { allCategory, categories, posts } from '../../../routes/General'

export default () => {
  const [currentCategory, setCurrentCategory] = useState(allCategory)

  return (
    <Fragment>
      <div>
        {categories.map(category => (
          <button key={category} onClick={() => setCurrentCategory(category)}>
            {category}
          </button>
        ))}

        {posts
          .filter(p => currentCategory === allCategory || p.category === currentCategory)
          .map(({ id, title }) => (
            <Card key={id} to={`blog/${id}`}>
              {title}
            </Card>
          ))}
      </div>
    </Fragment>
  )
}
