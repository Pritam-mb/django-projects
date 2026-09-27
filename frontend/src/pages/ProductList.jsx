import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchProducts } from '../api';
import Card from '../components/Card';
import './ProductList.css';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Premium Fleet</h1>
      {loading ? (
        <div className="loading-container">
          <div className="modern-spinner"></div>
          <div className="loading-text">Loading premium vehicles...</div>
        </div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <Card onClick={() => navigate(`/product/${product.id}`)} key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
