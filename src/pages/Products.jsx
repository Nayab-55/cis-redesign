import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import heroImage from "../assets/productbanner2.png";

// Maps product names from the database to their existing detail page routes
const routeMap = {
  "AgroCure Device": "/agrocure",
  "AutoFiller Device": "/autofiller",
  "Biological Water Quality Device": "/biological",
  "CMS Monitoring Device": "/cms",
  "HVDS Pole Unit": "/hvds",
  "MarkIt Paper System": "/markit",
  "MicroMeter Device": "/micrometer",
  "Smart Car Parking System": "/smartcarparking",
  "Water Quality Monitoring Tank": "/waterquality",
  "Single Phase Smart Meter": "/singlephasesmartmeters",
  "Three Phase Smart Meter": "/threephasesmartmeters",
  "AquaCure Device": "/aquacure",
};

// Looks up a route ignoring case and extra spaces, so small naming
// differences in the database don't silently break the link
function getProductRoute(name) {
  const normalizedTarget = name.trim().toLowerCase();
  const match = Object.keys(routeMap).find(
    (key) => key.trim().toLowerCase() === normalizedTarget
  );
  return match ? routeMap[match] : "/products";
}

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All Products" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "Water Quality",
    "Agriculture",
    "CMS",
    "Industrial Solutions",
    "Smart Parking",
    "Smart Meters",
  ];

  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      <div
        style={{
          backgroundImage: `linear-gradient(rgba(13,27,76,0.15), rgba(13,27,76,0.15)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "80px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>Our Products</h1>
        <p style={{ fontSize: "15px", opacity: 0.85 }}>Home &gt; Products</p>
      </div>

      <div style={{ maxWidth: "1200px", margin: "40px auto", padding: "0 20px", display: "flex", gap: "30px" }}>

        <div style={{ width: "260px", flexShrink: 0 }}>
          <div style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 14px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ border: "1px solid #eee", borderRadius: "8px", padding: "16px", marginBottom: "20px" }}>
            <h3 style={{ marginBottom: "12px", fontSize: "16px" }}>Categories</h3>
            <div
              onClick={() => setSelectedCategory("All Products")}
              style={{
                padding: "10px 14px",
                backgroundColor: selectedCategory === "All Products" ? "#1565C0" : "transparent",
                color: selectedCategory === "All Products" ? "white" : "#333",
                borderRadius: "6px",
                marginBottom: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              All Products
            </div>
            {categories.map((cat, index) => (
              <div
                key={index}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: "10px 14px",
                  backgroundColor: selectedCategory === cat ? "#1565C0" : "transparent",
                  color: selectedCategory === cat ? "white" : "#333",
                  borderRadius: "6px",
                  borderBottom: selectedCategory === cat ? "none" : "1px solid #f0f0f0",
                  cursor: "pointer",
                }}
              >
                {cat}
              </div>
            ))}
          </div>

          <div style={{ border: "1px solid #eee", borderRadius: "8px", padding: "16px" }}>
            <h3 style={{ marginBottom: "8px", fontSize: "16px" }}>Need Help?</h3>
            <p style={{ fontSize: "14px", color: "#666", marginBottom: "12px" }}>
              We're here to help you find the perfect solution.
            </p>
            <Link
              to="/contact"
              style={{
                display: "block",
                textAlign: "center",
                padding: "10px",
                backgroundColor: "#1565C0",
                color: "white",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div style={{ flex: 1 }}>
          <p style={{ marginBottom: "20px", color: "#666" }}>
            Showing {filteredProducts.length} of {products.length} Products
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "24px",
            }}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                style={{
                  border: "1px solid #eee",
                  borderRadius: "10px",
                  overflow: "hidden",
                  backgroundColor: "white",
                }}
              >
                <img
                  src={`http://127.0.0.1:8000/images/products/${product.image}`}
                  alt={product.name}
                  style={{ width: "100%", height: "180px", objectFit: "cover" }}
                />
                <div style={{ padding: "16px" }}>
                  <h3 style={{ fontSize: "17px", marginBottom: "8px" }}>{product.name}</h3>
                  <p style={{ fontSize: "14px", color: "#666", marginBottom: "16px", minHeight: "40px" }}>
                    {product.description}
                  </p>
                  <Link
                    to={getProductRoute(product.name)}
                    style={{
                      display: "inline-block",
                      padding: "8px 16px",
                      border: "1px solid #1565C0",
                      color: "#1565C0",
                      borderRadius: "6px",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;