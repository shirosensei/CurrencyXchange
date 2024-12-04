import React from 'react';
import LoginNavbar from './LoginNavbar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
  return (
    <>
      <LoginNavbar />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default LoginLayout