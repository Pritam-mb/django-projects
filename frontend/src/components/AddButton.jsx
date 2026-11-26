import { useState } from "react";
import { addProduct } from "../api";

export default function AddButton({ product }) {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  async function add() {
    setBusy(true);
    setMessage("");
    try {
      await addProduct(product);
      setMessage(`${product.name} added to cart.`);
    } catch {
      setMessage("Could not add this vehicle. Please try again.");
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="add">
      <button onClick={add} disabled={busy}>{busy ? "Adding…" : "Add to cart"}</button>
      <span role="status">{message}</span>
    </div>
  );
}
