import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={product.path} className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h3>{product.name}</h3>

        <button className="view-btn">
          View Details
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;