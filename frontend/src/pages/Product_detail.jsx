import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { product_details } from "../api";

export default function Product_detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        product_details(id).then(data => setProduct(data))
    }, [id]);

    if (!product) {
        return (
            <div style={{ padding: '60px', color: 'white', backgroundColor: '#0f172a', minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
                <h2>Loading premium vehicle...</h2>
            </div>
        );
    }

    const imageUrl = product.image ? `http://localhost:8000${product.image}` : 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=600';

    return (
        <div style={{ padding: '60px', color: 'white', backgroundColor: '#0f172a', minHeight: '100vh' }}>
            <button onClick={() => navigate(-1)} style={{ marginBottom: '40px', padding: '10px 20px', cursor: 'pointer', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', color: '#fff', fontWeight: 'bold' }}>&larr; Back to Fleet</button>

            <div style={{ display: 'flex', gap: '50px', flexWrap: 'wrap' }}>
                <img src={imageUrl} alt={product.name} style={{ width: '500px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }} />
                <div style={{ maxWidth: '600px' }}>
                    <h1 style={{ fontSize: '3.5rem', margin: '0 0 20px', background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', color: 'transparent' }}>{product.name}</h1>
                    <p style={{ fontSize: '1.2rem', color: '#94a3b8', marginBottom: '30px', lineHeight: '1.6' }}>{product.description}</p>
                    <h2 style={{ color: '#34d399', fontSize: '2.5rem', margin: '0 0 30px 0' }}>${product.price} <span style={{ fontSize: '1rem', color: '#64748b' }}>/ day</span></h2>

                    <button style={{ padding: '15px 40px', fontSize: '1.2rem', background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(99, 102, 241, 0.4)' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}                                       