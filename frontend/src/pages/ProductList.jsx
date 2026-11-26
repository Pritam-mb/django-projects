import { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import Card from "../components/Card";

export default function ProductList() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true;
    fetchProducts().then(data => active && setProducts(data)).catch(() => active && setError(true));
    return () => { active = false; };
  }, []);
  return (
    <>
      <h1>Explore the fleet</h1>
      {error ? <p role="alert">Could not load the fleet. Please refresh to try again.</p>
        : !products ? <p role="status">Loading vehicles…</p>
        : products.length === 0 ? <p>No vehicles available yet.</p>
        : <div className="grid">{products.map(product => <Card key={product.id} product={product} />)}</div>}
    </>
  );
}
