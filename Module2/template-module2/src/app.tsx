import React, { useEffect } from "react";
import "./app.css";
import UserService from "./services/user.service";
import Routers from "./routers/routers.route";

function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
