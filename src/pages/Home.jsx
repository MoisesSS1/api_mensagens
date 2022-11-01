import React from 'react'
import { Link } from 'react-router-dom'
import './css/Home.css'
import bannerMsg from '../img/bannerMsg.jpg'

const Home = () => {
  return (
    <div id='container-home'>
          <div id="home-msg">
          <h1>Mensagens do dia!!</h1>
              <div id='home-links'>
                <p><Link to="/login">Fazer login</Link></p>
                <p><Link to="/createaccount">Criar conta</Link></p>

              </div>
          </div>
    </div>
  )
}

export default Home