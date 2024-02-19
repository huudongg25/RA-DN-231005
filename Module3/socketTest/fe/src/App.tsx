import React, { useEffect } from "react";
import "./App.css";
import BlockUserComponent from "./components/blockUser";
import useSocket from "./hooks/useSocket";

function App() {
  const socket = useSocket();
  useEffect(()=>{
    socket.on('logout',(userId)=>{
      const id = localStorage.getItem('userId')
      if(id == userId) {
        //logic logout
      }
    })
  },[socket])
  return (
    <div className="App">
      <BlockUserComponent />
    </div>
  );
}

export default App;
