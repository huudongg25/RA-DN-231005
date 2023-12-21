import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRouter from "./private.route";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  />
        <Route element={<PrivateRouter />}>
          <Route path="/profile" element />
          <Route path="/profile" element />
          <Route path="/profile" element />
        </Route>

        <Route path="*" element />
      </Routes>
    </div>
  );
};

export default Routers;
