import React from 'react';
import './Card.css';
import { addProduct } from '../api';
import {useCart} from "../context/CardContext.jsx";
export default function Card({ product, onClick }) {
  const { addToCart } = useCart();
  // Use a fallback image if no image is provided
  const imageUrl = product.image ? `http://localhost:8000${product.image}` : 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600';
  const handleAddToCart = async (product) => {
    try {
      await addProduct(product);
      addToCart(product);
      alert(`${product.name} added to cart!`);
    } catch (error) {
      alert(error.message);
    }
  };
  const handledetails = (product) => {
    navigation(`/product/${product.id}`);
  }
  return (
    <div className="card-container" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={imageUrl} alt={product.name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{product.name}</h3>
        <p className="card-description">
          {product.description || 'Experience premium performance and unparalleled comfort.'}
        </p>
        <div className="card-footer">
          <span className="card-price">${product.price}</span>
          <div className="card-actions">
            <button
              onClick={(event) => {
                event.stopPropagation();
                handleAddToCart(product);
              }}
              className="card-button"
            >
              Rent Now
            </button>
            <button
              onClick={() => handledetails(product)}
              className="card-button"
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}