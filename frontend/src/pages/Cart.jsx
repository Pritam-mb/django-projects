import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCart, productImage } from "../api";

export default function Cart() {
    const [cart, setCart] = useState(null);
    const [error, setError] = useState(false);
    useEffect(() => {
        let active = true;
        fetchCart().then(data => active && setCart(data)).catch(() => active && setError(true));
        return () => { active = false; };
    }, []);
    return (
        <>
            <Link className="back" to="/">Back to fleet</Link>
            <h1>Your cart</h1>
            {error ? <p role="alert">Could not load your cart. Please refresh to try again.</p>
                : !cart ? <p role="status">Loading cart…</p>
                    : !cart.items.length ? <section className="empty"><h2>Your cart is empty.</h2><Link to="/">Browse the fleet</Link></section>
                        : <section className="cart-panel">
                            {cart.items.map(item => (
                                <article key={item.id} className="cart-row">
                                    <img src={productImage(item.product_image)} alt="" />
                                    <div><h2><Link to={`/product/${item.product}`}>{item.product_name}</Link></h2>
                                        <p>Quantity: {item.quantity}</p></div>
                                    <strong>${item.subtotal}</strong>
                                </article>
                            ))}
                            <div className="total"><span>Total</span><strong>${cart.total}</strong></div>
                        </section>}
        </>
    );
}
