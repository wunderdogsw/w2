import './index.css'
import React, { Component } from 'react'

export default ({ children }) => (
  <section
    className="LogoGrid">
    <ul
      children={
        children.map(([alt, url], i) => (
          <li title={ alt } key={ `${url}-${i}` }>
            <div>
              <div
                style={{ backgroundImage: `url(${ url })` }}
              />
            </div>
          </li>
        ))
      }
    />
  </section>
)
