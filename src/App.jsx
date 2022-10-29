import { useState, useEffect } from 'react';

function App() {

const [message, setMessage] = useState(null)
const [messages, setMessages] = useState([])
const [account,setAccount] = useState(0)

useEffect(()=>{

  const fetchData = async ()=>{
    const url = "https://api.adviceslip.com/advice"

    const res = await fetch(url)
    const data = await res.json()
  
    setMessage(data.slip)

    setMessages([...messages, data.slip.advice])

  }

  fetchData()


},[account])

  return (
    <div className="App">

    {message && <h1 key={message.id}>{message.advice}</h1>}

    <button onClick={()=>setAccount(account +1)}>Nova mensagem</button>
      
    </div>
  );
}

export default App;
