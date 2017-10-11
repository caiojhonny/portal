import React from 'react'

import './style.css'

const Square = (props) => {
  return props.title ? (
      <div className='card--wrapper'>
        <span className='card--title'>{props.title}</span>
        <span className='card--subtitle'>{props.subtitle}</span>
      </div>
  ) : null
}

export default Square
