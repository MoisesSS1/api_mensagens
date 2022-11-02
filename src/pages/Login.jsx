import React from 'react'
import './css/Login.css'
import { BiUserCircle } from 'react-icons/bi'
import {RiLockPasswordLine} from 'react-icons/ri'
import { CgEnter } from 'react-icons/cg'

const Login = () => {

  function onli(e) {
    e.preventDefault()
    alert('1')
  }

  return (
    <div id="login">
      

      <div id='box-login'>
        <h1>Entrar</h1>
        <p>Acesse as mensagens disponiveis!</p>

        <form id='form-login' >
          <p><span>{< BiUserCircle />}</span> <input type="text" name="login" placeholder='  Login'/></p>
          
          <p><span>{<RiLockPasswordLine/>}<input type="password" name="senha" placeholder='  Senha'/></span></p>

          <p><span > <CgEnter onClick={(e)=>onli(e)} size={35}/></span></p>
          
        </form>

      </div>
    </div>
  )
}

export default Login