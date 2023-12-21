import React, { useEffect } from "react";
import "./app.css";
import UserService from "./services/user.service";

function App() {
  const userService = new UserService();

  useEffect(() => {
    try {
      userService.login({ username: "dong", password: 1111 });
      window.location.href = "/aaaaaaa";
    } catch (error) {
      console.log(error);
    }
  }, []);
  
  return <div className="App"></div>;
}

export default App;
