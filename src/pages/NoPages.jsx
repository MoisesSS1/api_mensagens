import React from 'react'
import './css/NoPage.css'
import { Link } from 'react-router-dom'

const NoPages = () => {
  return (
    <div id='noPage'>
      <div id='NoPage-container'>

      <h1> 404 - PÁGINA NÃO ENCONTRADA</h1>

      <p><Link to='/'>Vá para a Home</Link></p>

      </div>
    </div>
  )
}

export default NoPages