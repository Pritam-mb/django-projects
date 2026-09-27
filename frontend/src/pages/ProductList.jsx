import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import Card from '../components/Card';
import './ProductList.css';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
        <div className="loading-state">Loading premium vehicles...</div>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
