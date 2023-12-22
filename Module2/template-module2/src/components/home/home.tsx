import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const data = localStorage.getItem('token')
  const decoded:any = jwtDecode(data as string);
console.log(decoded);
return <div>Chào mừng {decoded.email}
    <Link to="/profile" >Profile</Link>
  </div>;
};

export default Home;
