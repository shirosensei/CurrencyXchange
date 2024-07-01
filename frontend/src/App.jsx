import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./assets/css/App.css";
import Dashboard from "./components/Dashboard.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import Help from "./components/Help.jsx";
import Contact from "./components/Contact.jsx";
import LoginLayout from "./components/LoginLayout.jsx";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<MainLayout />}>
          <Route index element={<Home />} />
      
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="help" element={<Help />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route element={<LoginLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Outlet will render nested route components */}
        <Outlet />
      </main>
    </>
  );
};

export default App;
