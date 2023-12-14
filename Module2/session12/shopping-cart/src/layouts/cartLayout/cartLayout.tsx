import React from "react";
import Header from "../../components/header/header";
import Sidebar from "../../components/sidebar/sidebar";
import './cartLayout.css'
import { Cart } from "../../type";

interface Props {
    child:JSX.Element
    carts:Cart[]

}

export default function CartLayout(props:Props) {
  return (
    <div className="wrapper-layout">
      <div className="header-layout">
        <Header cartsLenght={props.carts.length} />
      </div>
      <div className="content-cart-layout">
        {props.child}
      </div>
    </div>
  );
}
