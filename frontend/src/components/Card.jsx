import { Link } from "react-router-dom";
import AddButton from "./AddButton";
import { productImage } from "../api";

export default function Card({ product }) {
  const detail = `/product/${product.id}`;
  return (
    <article className="card">
      <Link to={detail} aria-label={`View details for ${product.name}`}>
        <img className="vehicle-photo" src={productImage(product.image)} alt="" />
      </Link>
      <div className="card-body">
        <h2><Link to={detail}>{product.name}</Link></h2>
        <p className="rate"><strong>${product.price}</strong> / day</p>
        {product.description && <p className="excerpt">{product.description}</p>}
        <div className="actions"><Link to={detail}>View details</Link><AddButton product={product} /></div>
      </div>
    </article>
  );
}
