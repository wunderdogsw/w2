import React, { Component, createContext } from 'react'




const { Provider, Consumer } = createContext()




export class State extends Component {
  state = {
    splashShowing: true,
  }

  methods = {
    hideSplash: () => this.setState({ splashShowing: false }),
  }

  render() {
    return (
      <Provider
        value={{ ...this.state, ...this.methods }}
        children={ this.props.children }
      />
    )
  }
}




export const withState = EnhancedComponent => props => (
  <Consumer>
    { value => (
      <EnhancedComponent {...{...value, ...props}} />
    )}
  </Consumer>
)
