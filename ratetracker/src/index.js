import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/index.css';
import App from './App';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import Register from './component/Register';
import Home from './component/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='reister' element={<Register />} />
        <Route path='dashboard' element={<Dashboard />} />        
        </Route>
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);


