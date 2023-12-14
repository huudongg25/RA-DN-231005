import React, { useEffect, useState } from "react";

import "./App.css";
import Header from "./components/header/header";
import Sidebar from "./components/sidebar/sidebar";
import DefaultLayout from "./layouts/defaultLayout/defaultLayout";
import Products from "./components/products/products";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { Home } from "./components/home/home";
import CartLayout from "./layouts/cartLayout/cartLayout";
import Carts from "./components/carts/carts";
import { Cart, Product } from "./type";
import "react-toastify/dist/ReactToastify.css";
import data from "./data/data";
import { toastError, toastSuccess } from "./utils/toast";
import { ToastContainer } from "react-toastify";

function App() {
  const [updateTheme,setUpdateTheme] = useState<boolean>(false)
  const [carts, setCarts] = useState<Cart[]>([]);
  useEffect(() => {
    if (localStorage.getItem("theme") === 'dark') {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [updateTheme]);
  const location = useLocation();
  const navigate = useNavigate();

  const handleUpdateTheme = ()=>{
    setUpdateTheme(!updateTheme)
  }

  useEffect(() => {
    if (location.state == "Xong") {
      toastSuccess("Đã thanh toán thành công");
    }
  }, [location.state]);

  const addToCart = (product: Product) => {
    if (carts.length == 0) {
      setCarts([{ ...product, quantity: 1 }]);
    } else {
      const checkIndex = carts.findIndex((item) => item.id == product.id);
      if (checkIndex >= 0) {
        const newCart = [...carts];
        newCart[checkIndex].quantity = newCart[checkIndex].quantity + 1;
        setCarts(newCart);
      } else {
        setCarts((prev) => [...prev, { ...product, quantity: 1 }]);
      }
    }
  };

  const handlePlus = (id: number) => {
    const checkIndex = carts.findIndex((item) => item.id == id);
    const checkData: any = data.find((item) => item.id == id);
    if (checkIndex >= 0 && checkData?.stock >= carts[checkIndex].quantity) {
      const newCart = [...carts];
      newCart[checkIndex].quantity = newCart[checkIndex].quantity + 1;
      setCarts(newCart);
    } else {
      toastError("Quá số lượng sản phẩm");
    }
  };

  const handleMinus = (id: number) => {
    const checkIndex = carts.findIndex((item) => item.id == id);
    const checkData: any = data.find((item) => item.id == id);
    if (checkIndex >= 0 && carts[checkIndex].quantity > 1) {
      const newCart = [...carts];
      newCart[checkIndex].quantity = newCart[checkIndex].quantity - 1;
      setCarts(newCart);
    } else {
      toastError("Số lượng vui lòng lớn hơn 1");
    }
  };

  const handleDelete = (id: number) => {
    const newData = carts.filter((item) => item.id != id);
    setCarts(newData);
    toastSuccess("Đã xoá thành công");
  };

  const handlePayment = () => {
    setCarts([]);
    navigate("/", { state: "Xong" });
  };

  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout handleUpdateTheme={handleUpdateTheme} carts={carts} child={<Home />} />}
        />
        <Route
          path="/product"
          element={
            <DefaultLayout
            handleUpdateTheme={handleUpdateTheme}
              carts={carts}
              child={<Products addToCart={addToCart} />}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <DefaultLayout handleUpdateTheme={handleUpdateTheme} carts={carts} child={<h1>Coming soon...</h1>} />
          }
        />
        <Route
          path="/cart"
          element={
            <CartLayout
              carts={carts}
              child={
                <Carts
                  handlePayment={handlePayment}
                  handleDelete={handleDelete}
                  handlePlus={handlePlus}
                  handleMinus={handleMinus}
                  carts={carts}
                />
              }
            />
          }
        />
        <Route
          path="/*"
          element={<DefaultLayout handleUpdateTheme={handleUpdateTheme} carts={carts} child={<>Not Found</>} />}
        />
      </Routes>
    </div>
  );
}

export default App;
