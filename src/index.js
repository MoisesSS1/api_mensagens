import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import App from './App';
import Home from './pages/Home'
import CreateAccount from './pages/CreateAccount';
import Messages from './pages/Messages';
import Login from './pages/Login';
import NoPages from './pages/NoPages'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path="createaccount" element={<CreateAccount />}/>
        <Route path="messages" element={<Messages />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/*' element={<NoPages />}/>

      </Route>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
