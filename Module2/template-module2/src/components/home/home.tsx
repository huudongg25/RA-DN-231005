import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const data = useSelector((state: any) => state.user);
  console.log(data);
  return <div>Chào mừng {data.data?.user?.email}
    <Link to="/profile" >Profile</Link>
  </div>;
};

export default Home;
