import React, { Component, Fragment } from 'react'
import MainTitle from 'App/components/MainTitle'
import SubTitle from 'App/components/SubTitle'


const FRAMES = [
  '¯\\_(ツ)_/¯',
  '-__(ツ)__-',
]


export default class extends Component {
  state = {
    frame: 0,
  }
  interval = null

  componentDidMount() {
    this.interval = setInterval(this.update, 1000 / 2)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  update = () => {
    const { frame } = this.state
    this.setState({
      frame: (frame + 1) % FRAMES.length
    }, () => {
      const { frame } = this.state
      window.location.replace(`#${ FRAMES[frame]}`)
    })
  }

  render() {
    const { frame } = this.state
    return (
      <Fragment>
        <MainTitle>{ FRAMES[frame] }</MainTitle>
        <SubTitle>404 content not found</SubTitle>
      </Fragment>
    )
  }
}
