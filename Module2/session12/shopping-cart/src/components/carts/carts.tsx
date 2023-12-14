import React from "react";
import TableCart from "../table-cart/table-cart";
import { Cart } from "../../type";
import "./carts.css";

interface Props {
  carts: Cart[];
  handlePlus: Function;
  handleMinus: Function;
  handleDelete: Function;
  handlePayment:Function
}

export default function Carts(props: Props) {
  return (
    <div className="wrapper-products">
      <h3 className="title-products">Carts</h3>
      <hr style={{ color: "var(--border-color)", marginBottom: 30 }}></hr>
      <TableCart
        handleDelete={props.handleDelete}
        handleMinus={props.handleMinus}
        handlePlus={props.handlePlus}
        carts={props.carts}
      />
      {props.carts.length > 0 ? (
        <button onClick={()=>props.handlePayment()} className="payment-btn">Payment</button>
      ) : (
        ""
      )}
    </div>
  );
}
