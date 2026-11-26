import { useEffect, useState } from "react";
import { fetchCart } from "../api";

export default function Cart() {
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCart()
      .then(setCart)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading cart...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Your Cart</h1>

      {cart.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.items.map((item) => (
          <div key={item.id}>
            {item.product_image && (
              <img
                src={`http://localhost:8000${item.product_image}`}
                alt={item.product_name}
                width="100"
              />
            )}

            <h2>{item.product_name}</h2>
            <p>Quantity: {item.quantity}</p>
            <p>Subtotal: ${item.subtotal}</p>
          </div>
        ))
      )}

      <h2>Total: ${cart.total}</h2>
    </main>
  );
}