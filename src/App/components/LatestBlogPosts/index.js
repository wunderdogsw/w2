import './index.css'
import React, { Component } from 'react'
import Card from 'App/components/Card'
import Image from 'App/components/Image'
import { getMediumPosts } from 'App/external'
import { LatestBlogPosts as Content } from 'App/contents/other'

export default class extends Component {
  state = {
    posts: []
  }
  mounted = false

  componentDidMount() {
    this.mounted = true
    this.init()
  }

  componentWillUnmount() {
    this.mounted = false
  }

  init = async () => {
    const posts = await getMediumPosts()
    if ( this.mounted ) this.setState({ posts })
  }

  render() {
    const posts = this.state.posts.filter((_, i) => i < 2)

    if (!posts.length) return null

    return (
      <section className="LatestBlogPosts">
        <div className="LatestBlogPosts__posts">
          { posts.map( post => (
            <Card key={ post.guid } to={ post.link }>
              <Image asBackground src={ post.image } alt={ post.title } />
              <h4>{ post.title }</h4>
            </Card>
          ))}
        </div>
        <div className="LatestBlogPosts__content">
          <Content />
        </div>
      </section>
    )
  }
}
