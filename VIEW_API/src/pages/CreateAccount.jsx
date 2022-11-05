import { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import {RiLockPasswordLine} from 'react-icons/ri'
import { CgEnter } from 'react-icons/cg'
import './css/CreateAccount.css'

const CreateAccount = () => {

  const [newUser, setNewUser] = useState()
  const [newPassword, setNewPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()



  const saveUser = ()=>{

    if(newPassword!==confirmPassword){
      return
    }

    const fetchData = async () =>{
      const url = 'http://localhost:3001/create'

      const user = {
        login:newUser,
        password:newPassword
      }

      const saveData = await fetch(url,{
        method:"POST",
        body:JSON.stringify(user),
        headers:{
          "Content-type": "application/json"
        }
      })

    }

    fetchData()
  }


  return (
    <div id="createAccount">
      

      <div id='box-create'>
        <h1>Create account</h1>
        <form id='form-create' >
          <p><span>{< BiUserCircle />}</span> <input onChange={(e)=>(setNewUser(e.target.value))} type="text" name="login" placeholder='  Login'/></p>
          <p><span>{<RiLockPasswordLine/>}<input onChange={(e)=>(setNewPassword(e.target.value))} type="password" name="password" placeholder='  Password'/></span></p>
          <p><span>{<RiLockPasswordLine/>}<input onChange={(e)=>(setConfirmPassword(e.target.value))} type="password" name="confirmPassword" placeholder='  Confirm Password'/></span></p>
          <p><span id='save' onClick={saveUser()}> <CgEnter  size={35}/></span></p>
          
        </form>

      </div>
    </div>
  )
}

export default CreateAccount