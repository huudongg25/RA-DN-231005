import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductService from "../../services/product.service";

const Home = () => {
  const [product, setProduct] = useState([]);
  const productService = new ProductService()
  useEffect(() => {
    const getProduct = async () =>{
      const result = await productService.getAll()
      setProduct(result)
    }

    getProduct()
  }, []);


  return (
    <div>
      Chào mừng
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Home;
