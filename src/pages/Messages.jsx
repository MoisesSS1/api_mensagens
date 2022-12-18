import { useState, useEffect } from 'react';
import CardMessage from '../components/CardMessage';

import './css/Messages.css'

const Messages = () => {

const [message, setMessage] = useState(null)//mensagem vinda da api
const [arrayMessage, setArrayMessage] = useState([])//mensagens adicionadas
const [controller, setController] =  useState([])//controler para salvar id das mensagens que ja foram adicionadas

const [account,setAccount] = useState(0)//contador para chamar api


useEffect(()=>{
  const fetchData = async ()=>{
    const url = "https://api.adviceslip.com/advice"

    const res = await fetch(url)
    const data = await res.json()

    setMessage(data.slip)

    if(!controller.includes(data.slip.id)){ //evite que o usuario adicione a mesma mensagem duas vezes
      setArrayMessage([...arrayMessage, data.slip]) 
      setController([...controller, data.slip.id])
    }
  }

  fetchData()
},[account])

const validatorClick = (e)=>{
  
  setAccount(account + 1)
}

  return (
    <div id='container-messages'>

      <div id='generator-messages'>
        {message && <p>{message.advice}</p> }
        <button onClick={(e)=>validatorClick(e)}>New Message</button>
      </div>

      <div>
      <h2>Your messages</h2>

      <div id='box-messages'>
        
            {arrayMessage.map((message) => {
                  return <CardMessage key={message.id} message={message}/>
                })}
      
            </div>
      </div>




    </div>
  )
}

export default Messages