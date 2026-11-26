import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { product_details, productImage } from "../api";
import AddButton from "../components/AddButton";

export default function ProductDetail() {
  const { id } = useParams();
  return <Vehicle key={id} id={id} />;
}

function Vehicle({ id }) {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    let active = true;
    product_details(id).then(data => active && setProduct(data)).catch(() => active && setError(true));
    return () => { active = false; };
  }, [id]);
  return (
    <>
      <Link className="back" to="/">Back to fleet</Link>
      {error ? <p role="alert">Could not load this vehicle.</p>
        : !product ? <p role="status">Loading vehicle…</p>
        : <article className="detail">
            <img className="vehicle-photo" src={productImage(product.image)} alt={product.name} />
            <div><h1>{product.name}</h1><p>{product.description}</p>
              <p className="rate"><strong>${product.price}</strong> / day</p>
              <AddButton product={product} />
            </div>
          </article>}
    </>
  );
}
