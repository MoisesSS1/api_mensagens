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
import FavoriteMessages from './pages/FavoriteMessages';
import Login from './pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path="createaccount" element={<CreateAccount />}/>
        <Route path="messages" element={<Messages />}/>
        <Route path="favoritemessages" element={<FavoriteMessages />}/>
        <Route path='/login' element={<Login/>}/>

      </Route>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
