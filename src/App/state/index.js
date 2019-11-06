import React, { Component, createContext } from 'react'




const { Provider, Consumer } = createContext()




export class State extends Component {
  state = {
    splashShowing: false,
    userHasNavigated: false,
  }

  methods = {
    hideSplash: () => this.setState({ splashShowing: true }),
    userNavigated: () => this.setState({ userHasNavigated: true }),
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
