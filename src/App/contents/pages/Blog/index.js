import React, { Fragment, useState } from 'react'
import Card from '../../../components/Card'
import { subPages } from '../../../routes/General'

const allCategory = 'all'
const categories = [allCategory]
const posts = subPages.blog // Object: key: name, value: blogPost
const convertedPosts = []

for (const key in posts) {
  if (posts.hasOwnProperty(key)) {
    const post = posts[key]
    const { category } = post
    if (category) {
      if (!!post.title) {
        post.id = key
        convertedPosts.push(post)
      }
      if (!categories.includes(category)) categories.push(category)
    }
  }
}

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

        {convertedPosts
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
