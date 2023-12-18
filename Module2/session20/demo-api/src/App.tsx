import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users,setUsers]= useState<any>()
  useEffect(() => {
    axios.get("http://localhost:8000/users/?name=Pug")
    .then((data) => console.log(data))
    .catch((err)=>{
      console.log(err);
    })
  }, []);
  return <div className="App">
    {/* {
      users.map((item:any)=>{
        return <p key={item.id}>
          {item.name}
          tuổi: {item.age}
        </p>
      })
    } */}
  </div>;
}

export default App;
