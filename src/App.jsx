import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SuccessRegisterPage from "./Pages/SuccessRegisterPage";
import ForgetPassword from "./Pages/ForgetPassword";
import ChangePassword from "./Pages/ChangePassword";
import ForgetPin from "./Pages/ForgetPin";
import ChangePin from "./Pages/ChangePin";
import Dashboard from "./Pages/Dashboard";

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/user/login" element={<Login/>}/>
          <Route path="/user/register" element={<Register/>}/>
          <Route path="/user/success" element={<SuccessRegisterPage/>}/>
          <Route path="/user/forget-pass" element={<ForgetPassword/>}/>
          <Route path="/user/forget-pin" element={<ForgetPin/>}/>
          <Route path="/user/change-password/:email" element={<ChangePassword/>}/>
          <Route path="/user/change-pin/:email" element={<ChangePin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
