import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./private.route";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route element={<PrivateRouter />}>
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/cart" element={<h1>cart</h1>} />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  );
};

export default Routers;
