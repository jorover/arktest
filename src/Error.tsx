import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="error"> 
      <h1> Error 404!!! You are at the wrong page </h1>
      <Link to="/" className="backHome">
          BACK HOME
      </Link>
    </section>
  )
}

export default Error