import { Component } from 'react'

export default class extends Component {
  static defaultProps = { children: {} }

  componentDidMount() {
    const { children } = this.props
    Object.entries(children).forEach(([prop, value]) => {
      document.body.style.setProperty(prop, value)
    })
  }

  componentWillUnmount() {
    const { children } = this.props
    Object.entries(children).forEach(([prop, value]) => {
      document.body.style.setProperty(prop, null)
    })
  }

  render = () => null
}
