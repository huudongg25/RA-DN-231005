import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { TbSunMoon } from "react-icons/tb";
import { CiLogout } from "react-icons/ci";

interface Props {
  handleUpdateTheme:Function
}

const Sidebar = (props:Props) => {
  const handleChangeTheme =()=>{
    const getLocal = localStorage.getItem('theme')
    if(getLocal == 'light') {
      localStorage.setItem('theme','dark')
    }else {
      localStorage.setItem('theme','light')
    }
    props.handleUpdateTheme()
  }
  return (
    <aside className="sidebar">
      <ul className="list">
        <li className="list-item">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="list-item">
          <Link to={"/product"}>Product</Link>
        </li>
        <li className="list-item">
          <Link to={"/profile"}>Profile</Link>
        </li>
      </ul>
      <div className="actions">
        <TbSunMoon onClick={handleChangeTheme} />
        <CiLogout />
      </div>
    </aside>
  );
};

export default Sidebar;
