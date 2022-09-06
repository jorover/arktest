import React from 'react'
import Pen from '../pen.png'

const SuggestBtn = () => {
  return (
    <figure className="suggestions">
        <img src={Pen} alt="pen-logo" />
        <p> Suggest </p>
    </figure>
  )
}

export default SuggestBtn