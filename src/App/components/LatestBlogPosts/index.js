import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'
import Card from 'App/components/Card'
import Image from 'App/components/Image'
import { posts } from 'App/routes/Blog'

export default class extends Component {

  render() {
    const { children } = this.props

    return (
      <section className="LatestBlogPosts">
        <div className="LatestBlogPosts__posts">
          { posts
            .slice(0, 3)
            .map(({ id, title, author, image }) => (
            <Card type="post" key={ id } to={ `blog/${id}` }>
              <Image asBackground src={ image } alt={ title } />
              <h4>{title}</h4>
              <p>By {author.name}</p>
            </Card>
          ))}
        </div>
        <div className="LatestBlogPosts__content">
          { children }
        </div>
      </section>
    )
  }
}
