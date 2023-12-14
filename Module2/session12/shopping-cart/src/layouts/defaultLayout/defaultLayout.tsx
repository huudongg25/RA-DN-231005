import React from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import './defaultLayout.css'
import { Cart } from "../../type";


interface Props {
    child:JSX.Element
    carts:Cart[]
    handleUpdateTheme:Function
}

export default function DefaultLayout(props:Props) {
  return (
    <div className="wrapper-layout">
      <div className="header-layout">
        <Header cartsLenght={props.carts.length} />
      </div>
      <div className="sidebar-layout">
        <Sidebar handleUpdateTheme={props.handleUpdateTheme} />
      </div>
      <div className="content-layout">
        {props.child}
      </div>
    </div>
  );
}
