import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";
import Product_detail from "./pages/Product_detail";
import "./index.css"; 

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<Product_detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}