import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import App from './App';
import Home from './pages/Home'
import ListMessage from './pages/ListMessages'
import Message from './pages/Message'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/listmessages' element={<ListMessage />}/>
        <Route path='/message' element={<Message />} />

      </Route>
    </Routes>
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
