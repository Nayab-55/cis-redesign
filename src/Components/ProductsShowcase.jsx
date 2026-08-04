import { useState, useEffect } from "react";
import product1 from "../assets/products/product1.png";
import product2 from "../assets/products/product2.png";
import product3 from "../assets/products/product3.png";
import product4 from "../assets/products/product4.png";
import product5 from "../assets/products/product5.png";
import product6 from "../assets/products/product6.png";

function ProductsShowcase() {
  const [activeFilter, setActiveFilter] = useState("SHOW ALL");

  const categories = [
  "SHOW ALL",
  "Water Quality",
  "Agriculture",
  "CMS",
  "Industrial Solutions",
  "Smart Parking",
  "Smart Meters",
];

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts =
    activeFilter === "SHOW ALL"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section className="products-showcase">
      <div className="filter-tabs">
        <div className="products-heading">
      <p className="products-subheading">Work of Excellence</p>
      <h2>Our Products</h2>
    </div>

    <div className="filter-tabs"></div>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product, index) => (
          <div className="product-item" key={index}>
            
            <img
      src={`http://127.0.0.1:8000/images/products/${product.image}`}
      alt={product.name}
    />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsShowcase;