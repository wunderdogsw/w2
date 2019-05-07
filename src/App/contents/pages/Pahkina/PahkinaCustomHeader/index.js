import './index.css'
import React, { Component } from 'react'
import Logo from 'App/components/Logo'

export default () => {
  return (
    <div className="PahkinaCustomHeader">
      <Logo useHorizontal to="/" />
    </div>
  )
}
