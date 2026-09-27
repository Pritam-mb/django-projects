import React from "react";
import ProductList from "./pages/ProductList";
import "./index.css"; // Ensure global styles apply if needed

export default function App() {
  return (
    <div className="app-root">
      <ProductList />
    </div>
  );
}