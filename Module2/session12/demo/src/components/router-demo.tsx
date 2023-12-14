import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import TableComponent from "./table";
import Product from "./product";
import Test from "./test";
import DatePickerComponent from "./datePicker";
const RouterDemo = () => {
  return (
    <div>
        <header>
        <Link to="/" style={{ marginRight: 50 }}>
          Home
        </Link>
        <Link to="/test/date">Date</Link>
        <Link to="/product/2">Product</Link>
      </header>
      <Routes>
        <Route path="/" element={<TableComponent />} />
        <Route path="product/:id" element={<Product />} />
        <Route path="/abc/cba/ok" element={<p>OK</p>} />
        <Route path="/test" element={<Test />}>
          <Route path="date" element={<DatePickerComponent />} />
          <Route
            path="date2"
            element={
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptate reprehenderit inventore quod obcaecati sit saepe ullam
                dignissimos? Numquam vel odit incidunt nam dolore quam placeat
                labore, at facere, a ab.
              </p>
            }
          />
        </Route>
        <Route path="*" element={<h1>Not found</h1>} />
      </Routes>
    </div>
  )
}

export default RouterDemo