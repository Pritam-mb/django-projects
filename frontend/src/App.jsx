import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/Product_detail";
import Cart from "./pages/Cart";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <header className="topbar">
        <nav className="wrap nav" aria-label="Main navigation">
          <Link to="/" className="brand" aria-label="Premium Fleet home">
            <span className="mark" aria-hidden="true"><i /><i /><i /></span>
            Premium Fleet
          </Link>
          <NavLink to="/cart" className="cart-link">View cart</NavLink>
        </nav>
      </header>
      <main className="wrap page">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
