import './index.css'
import React, { Component } from 'react'
import cs from 'classnames'
import Card from 'App/components/Card'
import Image from 'App/components/Image'
import { getBlogPosts, getCultureBlogPosts } from 'App/external'

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
    const { culture } = this.props
    const posts = culture ? await getCultureBlogPosts() : await getBlogPosts()
    if ( this.mounted ) this.setState({ posts })
  }

  render() {
    const { children } = this.props
    const posts = this.state.posts.filter((_, i) => i < 2)
    const loading = !posts.length

    return (
      <section className={cs(
        'LatestBlogPosts',
        loading && 'LatestBlogPosts--loading'
      )}>
        <div className="LatestBlogPosts__posts">
          { posts.map( post => (
            <Card key={ post.guid } to={ post.link }>
              <Image asBackground src={ post.image } alt={ post.title } />
              <h4>{ post.title }</h4>
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
