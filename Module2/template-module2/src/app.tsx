import React, { useEffect } from "react";
import "./app.css";
import UserService from "./services/user.service";
import Routers from "./routers/routers.route";
import { useDispatch, useSelector } from "react-redux";
import { downCount, sum, upCount } from "./store/reducers/count";
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
