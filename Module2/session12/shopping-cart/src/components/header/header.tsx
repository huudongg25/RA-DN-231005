import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import "./header.css";
import { Link } from "react-router-dom";
import { Cart } from "../../type";

interface Props {
  cartsLenght:number
}

const Header = (props:Props) => {
  return (
    <header className="header">
      <Link to={"/"}>
        <img
          className="logo"
          src="https://png.pngtree.com/template/20190927/ourmid/pngtree-e-commerce-logo-template-image_311731.jpg"
          alt=""
        />
      </Link>
      <Link to={'/cart'} className="cart-wrapper1">
        <CiShoppingCart className="cart-item" />
        <span className="cart-quantity">{props.cartsLenght}</span>
      </Link>
    </header>
  );
};

export default Header;
