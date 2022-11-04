import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import {RiLockPasswordLine} from 'react-icons/ri'
import { CgEnter } from 'react-icons/cg'
import './css/CreateAccount.css'

const CreateAccount = () => {
  return (
    <div id="createAccount">
      

      <div id='box-create'>
        <h1>Create account</h1>
        <form id='form-create' >
          <p><span>{< BiUserCircle />}</span> <input type="text" name="login" placeholder='  Login'/></p>
          
          <p><span>{<RiLockPasswordLine/>}<input type="password" name="password" placeholder='  Password'/></span></p>
          <p><span>{<RiLockPasswordLine/>}<input type="password" name="confirmPassword" placeholder='  Confirm Password'/></span></p>

          <p><span > <CgEnter  size={35}/></span></p>
          
        </form>

      </div>
    </div>
  )
}

export default CreateAccount