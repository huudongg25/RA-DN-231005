import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./private.route";
import Register from "../components/register/register";
import Login from "../components/login/login";
import Home from "../components/home/home";
import Profile from "../components/profile/profile";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route element={<PrivateRouter />}>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/cart" element={<h1>cart</h1>} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
};

export default Routers;
