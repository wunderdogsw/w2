import React from 'react'

import './index.css'

export default ({image, name, responsibility, phone, email}) => (
  <section className='SalespersonTemplate'>
    <img className='SalespersonTemplate__profilePhoto' src={image} alt={name}/>
    <div className='SalespersonTemplate__contactInfo'>
      <h5>{name}</h5>
      <p>
        {responsibility}
        <br/>
        <a className="noHyphen" href={'mailto:' + email}>
          {email.split('@')[0]}
          <span>@</span>
          {email.split('@')[1]}
        </a>
        <br/>
        {phone}
      </p>
    </div>
  </section>
)
