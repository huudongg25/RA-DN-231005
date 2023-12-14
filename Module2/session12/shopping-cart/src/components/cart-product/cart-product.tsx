import React from "react";
import { FaCartPlus } from "react-icons/fa";
import "./cart-product.css";
import { Product } from "../../type";

interface Props {
  infor: Product;
  handleAddToCart: Function;
}

const CartProduct = (props: Props) => {
  return (
    <figure className="cart-wrapper">
      <img src={props.infor.imageUrl} alt="" />
      <figcaption>
        <h3>{props.infor.name}</h3>
        <p>{props.infor.des}</p>
        <div className="infor">
          <span>Giá: {props.infor.price.toLocaleString()}đ</span>
          <span>Số lượng: {props.infor.stock}</span>
        </div>
        <button
          onClick={() => {
            props.handleAddToCart(props.infor);
          }}
          className="add-cart"
        >
          <FaCartPlus />
        </button>
      </figcaption>
    </figure>
  );
};

export default CartProduct;
