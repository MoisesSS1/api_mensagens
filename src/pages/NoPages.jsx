import React from 'react'
import './css/NoPage.css'
import { Link } from 'react-router-dom'

const NoPages = () => {
  return (
    <div id='noPage'>
      <div id='NoPage-container'>

      <h1> 404 - Page not found</h1>

      <p><Link to='/'>Go Home</Link></p>

      </div>
    </div>
  )
}

export default NoPages