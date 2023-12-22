import React, { useEffect } from "react";
import "./app.css";
import UserService from "./services/user.service";
import Routers from "./routers/routers.route";
import { useDispatch, useSelector } from "react-redux";
import { downCount, sum, upCount } from "./store/reducers/count";
import { getUser } from "./store/reducers/user";

function App() {
  const countNumber = useSelector((state: any) => {
    return state.count;
  });

  const user = useSelector((state: any) => {
    return state.user;
  });

  const dispatch = useDispatch<any>();

  const actionDispatch = () => {
     dispatch(getUser()).unwrap()
  };


  console.log(user.data);


  return (
    <div className="App">
     loading {String(user.loading)} ===
    error  {String(user.error)} === 
     data {String(user.data?.name)}
      <button onClick={actionDispatch}>get user</button>
      <button onClick={() => dispatch(upCount())}>Tăng</button>
      <button onClick={() => dispatch(downCount())}>Giảm</button>
      <button onClick={() => dispatch(sum(20))}>SUM</button>
      {/* <Routers /> */}
    </div>
  );
}

export default App;
