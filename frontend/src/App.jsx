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

import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="*" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="help" element={<Help />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

const MainLayout = () => {
  return (
    <main className="pt-16">
      {/* Outlet will render nested route components */}
      <Outlet />
    </main>
  );
};

export default App;
