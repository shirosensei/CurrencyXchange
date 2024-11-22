import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './assets/css/index.css';
import App from './App.jsx';
import Dashboard from './component/Dashboard.jsx';
import Login from './component/Login.jsx';
import Register from './component/Register.jsx';
import Home from './component/Home.jsx';
import Help from './component/Help.jsx';
import Contact from './component/Contact.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='dashboard' element={<Dashboard />} />   
        <Route path='help' element={<Help />}  />    
        <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  </StrictMode>,
)
