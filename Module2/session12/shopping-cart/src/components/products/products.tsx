import React from "react";
import CartProduct from "../cart-product/cart-product";
import data from "../../data/data";
import './products.css'
import { ToastContainer } from "react-toastify";
import { Product } from "../../type";
import { toastSuccess } from "../../utils/toast";

interface Props {
  addToCart:Function
}

const Products = (props:Props) => {

  const handleAddToCart = (product:Product)=>{
    props.addToCart(product)
    toastSuccess("Đã thêm sản phẩm")
  }

  return (
    <div className="wrapper-products">
      <ToastContainer />
      <h3 className="title-products">Products</h3>
      <hr style={{color:'var(--border-color)',marginBottom:30}}></hr>
      <div className="product-list">
        {data.map((item) => {
          return <CartProduct handleAddToCart={handleAddToCart}  key={item.id} infor={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
