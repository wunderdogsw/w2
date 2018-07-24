import './index.css'
import React, { Component } from 'react'
import NotFound from 'App/components/NotFound'
import * as pages from 'App/contents/pages'

const pagesLower = Object
  .entries(pages)
  .reduce((res, [key, value]) => {
    res[key.toLowerCase()] = value
    return res
  }, {})

export default class extends Component {
  state = {
    minHeight: 0,
  }

  componentDidMount() {
    window.scrollTo(0, 0)

    const footer = document.querySelector('.Footer')
    this.setState({
      minHeight: window.innerHeight - footer.clientHeight,
    })
  }

  render () {
    const { match } = this.props
    const { minHeight } = this.state
    const contentKey =
      match.params.page
      && match.params.page.toLowerCase()
    const Content = pagesLower[contentKey]

    return (
      <div className="Page" style={{ minHeight }}>
        <article className="Page__inner">
          { Content ? <Content /> : <NotFound /> }
        </article>
      </div>
    )
  }
}
