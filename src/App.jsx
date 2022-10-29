import { useState, useEffect } from 'react';

import './App.css'
import Nav from './components/Nav';

function App() {

// const [message, setMessage] = useState(null)
// const [messages, setMessages] = useState([])
// const [account,setAccount] = useState(0)

// useEffect(()=>{

//   const fetchData = async ()=>{
//     const url = "https://api.adviceslip.com/advice"

//     const res = await fetch(url)
//     const data = await res.json()
  
//     setMessage(data.slip)

//     setMessages([...messages, data.slip.advice])

//   }

//   fetchData()


// },[account])

  return (  

    <div className='App'>
    <Nav />


    </div>


  );
}

export default App;
