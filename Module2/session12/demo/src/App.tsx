import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/defaultLayout";
import TableComponent from "./components/table";
import DatePickerComponent from "./components/datePicker";
import PaymentLayout from "./layouts/paymentLayout";

function App() {
  // useParam() :để lấy param
  //useNavigate() : để chuyển hướng và có thể truyền dữ liệu kèm khi chuyển hướng
  // useLocation() : lấy thông tin ở trang hiện tại

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<DefaultLayout child={<TableComponent />} />}
        />

        <Route
          path="/date"
          element={<PaymentLayout child={<DatePickerComponent />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
