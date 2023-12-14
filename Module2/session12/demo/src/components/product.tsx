import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Product = () => {
  const id = useParams();
  console.log(id);

  const location = useLocation();
  console.log(location);

  const navigate = useNavigate();

  return (
    <div>
      Product
      <button
        onClick={() => {
          console.log(1 + 2);
          navigate("/", { state: "Đã thanh toán thành công" });
        }}
      >
        click
      </button>
    </div>
  );
};

export default Product;
