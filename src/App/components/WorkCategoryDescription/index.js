import './index.css'
import React from 'react'

import categoryDescriptions from './categoryDescriptions'

export default ({category}) => (
  <section className="WorkCategoryDescription">
    {
      categoryDescriptions[category] &&
      <div className="WorkCategoryDescription__inner">
        {categoryDescriptions[category]}
      </div>
    }
  </section>
)
