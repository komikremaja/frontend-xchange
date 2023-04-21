import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SuccessRegisterPage from "./Pages/SuccessRegisterPage";

function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/user/login" element={<Login/>}/>
          <Route path="/user/register" element={<Register/>}/>
          <Route path="/user/success-register" element={<SuccessRegisterPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
