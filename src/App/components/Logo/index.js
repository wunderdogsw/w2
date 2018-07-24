import cx from './index.css'

import React, { Component, Fragment } from 'react'
import shuffle from 'lodash.shuffle'
import cs from 'classnames'
import prefixStyles from 'inline-style-prefixer/static'
import TransitionLink from 'App/components/TransitionLink'



// Changing this wont change the logo text. Its only used to count letters
const LETTERS = 'wunderdog'.split('')

export default class extends Component {
  letterStyles = LETTERS.map(x => null)

  componentWillMount() {
    if ( !this.props.animate ) return

    const delays =
      shuffle(LETTERS.map((_, i) => i * 100 + 500))

    this.letterStyles = delays.map( delay => prefixStyles({
      animationDelay: `${ delay }ms`
    }))
  }

  render() {
    const { animate, className, useHorizontal, to } = this.props

    return React.createElement( to ? TransitionLink : 'div', {
      to: to,
      className: cs(
        'Logo',
        animate && 'Logo--animate',
        useHorizontal && 'Logo--useHorizontal',
        className
      ),
    }, (
      <Fragment>
        <LogoHorizontal letterStyles={ this.letterStyles } />
        <LogoGrid letterStyles={ this.letterStyles } />
      </Fragment>
    ))

  }
}



const LogoHorizontal = ({ letterStyles }) => (
  <svg
    className="Logo__horizontal"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1000 86.6"
  >
    <polygon
      style={ letterStyles[0] }
      points="333.4,52 297.2,1.4 277.6,1.4 277.6,85.2 297.2,85.2 297.2,32.7 334.2,84.8 334.5,85.2 352.9,85.2 352.9,1.4 333.4,1.4"/>
    <path
      style={ letterStyles[1] }
      d="M423.5,1.4h-33.3v83.8h33.3c26.6,0,44.4-16.8,44.4-41.9C467.9,18.3,450,1.4,423.5,1.4z M448,43.4 c0,14.4-10.1,24.4-24.5,24.4h-13.7V18.9h13.7C438.6,18.9,448,28.3,448,43.4z"/>
    <polygon
      style={ letterStyles[2] }
      points="500.5,85.2 564.1,85.2 564.1,68 520.1,68 520.1,51.2 556.6,51.2 556.6,34.1 520.1,34.1 520.1,18.5 564.1,18.5 564.1,1.4 500.5,1.4"/>
    <path
      style={ letterStyles[3] }
      d="M735.6,1.4h-33.3v83.8h33.3c26.6,0,44.4-16.8,44.4-41.9C780,18.3,762.2,1.4,735.6,1.4z M760.1,43.4 c0,14.4-10.1,24.4-24.5,24.4h-13.7V18.9h13.7C750.7,18.9,760.1,28.3,760.1,43.4z"/>
    <path
      style={ letterStyles[4] }
      d="M221,49.5c0,9.9-8,17.9-17.9,17.9h-2.2c-9.9,0-17.9-8-17.9-17.9V1.4h-19.1v48.1c0,20.4,16.6,37.1,37,37.1h2.2 c20.4,0,37-16.6,37-37.1V1.4H221V49.5z"/>
    <path
      style={ letterStyles[5] }
      d="M849.1,0.1c-23.7,0-42.9,19.4-42.9,43.2s19.3,43.2,42.9,43.2c23.7,0,42.9-19.4,42.9-43.2S872.8,0.1,849.1,0.1z  M872.1,43.3c0,13.2-10.3,23.9-23,23.9c-12.7,0-23-10.7-23-23.9s10.3-23.9,23-23.9C861.8,19.5,872.1,30.2,872.1,43.3z"/>
    <polygon
      style={ letterStyles[6] }
      points="136.5,1.3 116.7,1.3 99.4,55.9 79.8,1.3 57,1.3 39.7,55.9 20,1.3 0,1.3 30.2,85.2 50.1,85.2 68.8,26.3 90,85.2 109.9,85.2"/>
    <path
      style={ letterStyles[7] }
      d="M616.4,60h17.4L652,85.4h21.1l-20.6-28.8c9.3-4.9,15.7-14.7,15.7-26c0-16.2-13.2-29.4-29.4-29.4h-39.5v8.6V60v25.4h17.2 V60z M616.4,18.4h22.4c6.7,0,12.2,5.5,12.2,12.2s-5.5,12.2-12.2,12.2h-22.4V18.4z"/>
    <path
      style={ letterStyles[8] }
      d="M966.1,40.1v2.1v1.6v12h14.4c-1,3.2-2.9,6-5.9,8.6c-4,3.4-8.4,5.1-13.5,5.1c-5.9,0-11.6-2.3-16.7-7c-5.6-5-8.3-11.2-8.3-19 c0-7.6,2.4-13.7,7.4-18.7c5-5.1,11-7.5,18.4-7.5c5.4,0,10.2,1.7,14.5,5c1.2,0.9,2.3,1.9,3.4,3.1l11.1-13.6c-1.8-1.7-3.7-3.2-5.6-4.6 C983.5,6,981.8,4.9,980,4c-5.6-2.7-11.8-4-18.3-4c-12.1,0-22.4,4.3-30.9,12.7c-8.4,8.4-12.7,18.7-12.7,30.8c0,11.8,4.2,22,12.5,30.5 c8.3,8.4,18.4,12.7,30,12.7c12,0,22-4.4,29.7-13.2c3.4-3.9,5.9-8.2,7.4-12.8c1.5-4.8,2.2-10.3,2.2-16.3v-4.1H966.1z"/>
  </svg>
)

const LogoGrid = ({ letterStyles }) => (
  <svg
    className="Logo__grid"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 222.603 211.957"
  >
    <path
      style={ letterStyles[0] }
      d="M959.844,24.727,943.247,1.5H934.3V39.945h8.947V15.84l16.976,23.906.14.2h8.448V1.5h-8.967Z"
      transform="translate(-747.706 -1.2)"
    />
    <path
      style={ letterStyles[1] }
      d="M82.678,433.5H67.4v38.445H82.658c12.183,0,20.371-7.709,20.371-19.193C103.049,441.249,94.861,433.5,82.678,433.5Zm11.244,19.253c0,6.591-4.633,11.184-11.244,11.184H76.367V441.509h6.311C89.608,441.509,93.922,445.822,93.922,452.753Z"
      transform="translate(-53.939 -346.924)"
    />
    <path
      style={ letterStyles[2] }
      d="M515.8,471.945h29.118v-7.889H524.747v-7.729H541.8V448.5H524.747v-7.15h20.171V433.5H515.8Z"
      transform="translate(-412.787 -346.924)"
    />
    <path
      style={ letterStyles[3] }
      d="M82.758,865.5H67.5v38.445H82.758c12.183,0,20.371-7.709,20.371-19.193C103.129,873.249,94.941,865.5,82.758,865.5ZM94,884.753c0,6.591-4.633,11.184-11.244,11.184H76.467V873.509h6.291C89.688,873.509,94,877.822,94,884.753Z"
      transform="translate(-54.019 -692.647)"
    />
    <path
      style={ letterStyles[4] }
      d="M527.463,22.049a8.2,8.2,0,0,1-8.188,8.208h-1.018a8.217,8.217,0,0,1-8.188-8.208V0H501.3V22.049a17,17,0,0,0,16.956,17h1.018a17,17,0,0,0,16.956-17V0h-8.767Z"
      transform="translate(-401.183)"
    />
    <path
      style={ letterStyles[5] }
      d="M509.792,862.5a19.812,19.812,0,1,0,19.692,19.812A19.77,19.77,0,0,0,509.792,862.5Zm10.545,19.832a10.552,10.552,0,1,1-10.545-10.944A10.766,10.766,0,0,1,520.337,882.332Z"
      transform="translate(-392.22 -690.246)"
    />
    <path
      style={ letterStyles[6] }
      d="M948.669,880.334v7.729h6.591A8.385,8.385,0,0,1,952.543,892a9.215,9.215,0,0,1-6.191,2.337,11.407,11.407,0,0,1-7.669-3.2,11.147,11.147,0,0,1-3.775-8.708,11.512,11.512,0,0,1,3.415-8.568,11.207,11.207,0,0,1,8.428-3.455,10.628,10.628,0,0,1,6.651,2.3,12.827,12.827,0,0,1,1.558,1.418l5.073-6.231a26.764,26.764,0,0,0-2.556-2.1,18.258,18.258,0,0,0-2.437-1.458,20.092,20.092,0,0,0-22.528,3.974,19.987,19.987,0,0,0-.1,28.08,18.715,18.715,0,0,0,13.78,5.812,17.5,17.5,0,0,0,13.641-6.051,16.613,16.613,0,0,0,3.4-5.852,25.954,25.954,0,0,0,1-7.489v-2.437H948.669Z"
      transform="translate(-741.624 -690.246)"
    />
    <path
      style={ letterStyles[7] }
      d="M62.571,1.4H53.524L45.595,26.424,36.588,1.4H26.123L18.194,26.424,9.187,1.4H0L13.88,39.905h9.107l8.548-27.021,9.726,27.021h9.127Z"
      transform="translate(0 -1.12)"
    />
    <path
      style={ letterStyles[8] }
      d="M943.929,460.222h7.989l8.348,11.623h9.686l-9.467-13.181a13.456,13.456,0,0,0-6.271-25.364H936.1v38.565h7.869V460.222Zm0-19.073h10.265a5.592,5.592,0,1,1,0,11.184H943.929Z"
      transform="translate(-749.147 -346.764)"
    />
  </svg>
)
