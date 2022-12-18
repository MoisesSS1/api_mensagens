import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'

const Home = () => {
  return (
    <div id='container-home'>
          <div id="home-msg">
          <h1>Messages of day!!</h1>
              <div id='home-links'>
                <p><Link to="/login">Login</Link></p>
                <p><Link to="/createaccount">Create Accout</Link></p>

              </div>
          </div>
    </div>
  )
}

export default Home