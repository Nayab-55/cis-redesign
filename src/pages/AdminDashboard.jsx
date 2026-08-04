import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({ id: null, name: "", description: "", image: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [tenders, setTenders] = useState([]);
  const [tenderFormData, setTenderFormData] = useState({ id: null, title: "", opening_date: "", closing_date: "", category: "", status: "" });
  const [isEditingTender, setIsEditingTender] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [partners, setPartners] = useState([]);
  const hasLoggedVisit = useRef(false);

  useEffect(() => {
    console.log("Dashboard useEffect executed");
    const token = localStorage.getItem("admin_token");

    if (!token) {
        navigate("/admin-login");
        return;
    }

    if (!hasLoggedVisit.current) {
    hasLoggedVisit.current = true;

    fetch("http://127.0.0.1:8000/api/log-visit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({
            page: "Admin Dashboard",
        }),
    });
}

    fetchProducts();
    fetchTenders();
    fetchContacts();
    fetchPartners();

}, [navigate]);

  const fetchProducts = () => {
    fetch("http://127.0.0.1:8000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  };
  const fetchContacts = () => {
    const token = localStorage.getItem("admin_token");
    fetch("http://127.0.0.1:8000/api/contacts", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching contacts:", error));
  };
  const fetchPartners = () => {
    const token = localStorage.getItem("admin_token");
    fetch("http://127.0.0.1:8000/api/partners", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setPartners(data))
      .catch((error) => console.error("Error fetching partners:", error));
  };
  const fetchTenders = () => {
    fetch("http://127.0.0.1:8000/api/tenders")
      .then((response) => response.json())
      .then((data) => setTenders(data))
      .catch((error) => console.error("Error fetching tenders:", error));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleTenderChange = (e) => {
    setTenderFormData({ ...tenderFormData, [e.target.name]: e.target.value });
  };

  const handleTenderSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("admin_token");

    const url = isEditingTender
      ? `http://127.0.0.1:8000/api/tenders/${tenderFormData.id}`
      : "http://127.0.0.1:8000/api/tenders";
    const method = isEditingTender ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: tenderFormData.title,
          opening_date: tenderFormData.opening_date,
          closing_date: tenderFormData.closing_date,
          category: tenderFormData.category,
          status: tenderFormData.status,
        }),
      });

      if (response.ok) {
        setTenderFormData({ id: null, title: "", opening_date: "", closing_date: "", category: "", status: "" });
        setIsEditingTender(false);
        fetchTenders();
      } else {
        alert("Something went wrong. Please check your inputs.");
      }
    } catch (error) {
      alert("Unable to connect to server.");
    }
  };

  const handleTenderEdit = (tender) => {
    setTenderFormData(tender);
    setIsEditingTender(true);
  };

  const handleTenderDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this tender?")) return;

    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/tenders/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchTenders();
      }
    } catch (error) {
      alert("Unable to delete tender.");
    }
  };

  const handleTenderCancelEdit = () => {
    setTenderFormData({ id: null, title: "", opening_date: "", closing_date: "", category: "", status: "" });
    setIsEditingTender(false);
  };
  const handleContactDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/contacts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchContacts();
      }
    } catch (error) {
      alert("Unable to delete message.");
    }
  };
const handlePartnerDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this partner request?")) return;

    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/partners/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchPartners();
      }
    } catch (error) {
      alert("Unable to delete partner request.");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("admin_token");

    const url = isEditing
      ? `http://127.0.0.1:8000/api/products/${formData.id}`
      : "http://127.0.0.1:8000/api/products";
    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          description: formData.description,
          image: formData.image,
        }),
      });

      if (response.ok) {
        setFormData({ id: null, name: "", description: "", image: "" });
        setIsEditing(false);
        fetchProducts();
      } else {
        alert("Something went wrong. Please check your inputs.");
      }
    } catch (error) {
      alert("Unable to connect to server.");
    }
  };

  const handleEdit = (product) => {
    setFormData(product);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    const token = localStorage.getItem("admin_token");
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        fetchProducts();
      }
    } catch (error) {
      alert("Unable to delete product.");
    }
  };

  const handleCancelEdit = () => {
    setFormData({ id: null, name: "", description: "", image: "" });
    setIsEditing(false);
  };

  const handleLogout = async () => {
    const token = localStorage.getItem("admin_token");

    try {
      await fetch("http://127.0.0.1:8000/api/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Logout logging failed:", error);
    }

    localStorage.removeItem("admin_token");
    navigate("/admin-login");
  };

  return (
    <>
      <TopBar />
      <Header />
      <Navbar />

      <div className="ad-page">
        <div className="ad-topbar">
          <div>
            <p className="ad-eyebrow">CIS Control Panel</p>
            <h1 className="ad-title">Admin Dashboard</h1>
          </div>
          <button onClick={handleLogout} className="ad-logout-btn">
            Logout
          </button>
        </div>

        <section className="ad-section">
          <div className="ad-section-heading">
            <span className="ad-section-bar" />
            <div>
              <p className="ad-section-label">Section 01</p>
              <h2 className="ad-section-title">Products</h2>
            </div>
          </div>

          <div className="ad-card">
            <h3 className="ad-card-title">
              {isEditing ? "Edit Product" : "Add New Product"}
            </h3>
            <form onSubmit={handleSubmit} className="ad-form">
              <div className="ad-field">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Product name"
                  required
                />
              </div>
              <div className="ad-field">
                <label>Image filename</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="e.g. agrocure-device1.png"
                  required
                />
              </div>
              <div className="ad-field ad-field-full">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Short description"
                  rows="3"
                />
              </div>
              <div className="ad-form-actions">
                <button type="submit" className="ad-primary-btn">
                  {isEditing ? "Update Product" : "Add Product"}
                </button>
                {isEditing && (
                  <button type="button" onClick={handleCancelEdit} className="ad-secondary-btn">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="ad-table-card">
            <h3 className="ad-card-title">All Products</h3>
            <div className="ad-table-wrap">
              <table className="ad-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.image}</td>
                      <td>
                        <button onClick={() => handleEdit(product)} className="ad-edit-btn">
                          Edit
                        </button>
                        <button onClick={() => handleDelete(product.id)} className="ad-delete-btn">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="ad-section">
          <div className="ad-section-heading">
            <span className="ad-section-bar" />
            <div>
              <p className="ad-section-label">Section 02</p>
              <h2 className="ad-section-title">Tenders</h2>
            </div>
          </div>

          <div className="ad-card">
            <h3 className="ad-card-title">
              {isEditingTender ? "Edit Tender" : "Add New Tender"}
            </h3>
            <form onSubmit={handleTenderSubmit} className="ad-form">
              <div className="ad-field ad-field-full">
                <label>Title</label>
                <textarea
                  name="title"
                  value={tenderFormData.title}
                  onChange={handleTenderChange}
                  rows="2"
                  required
                />
              </div>
              <div className="ad-field">
                <label>Opening Date</label>
                <input
                  type="text"
                  name="opening_date"
                  value={tenderFormData.opening_date}
                  onChange={handleTenderChange}
                  required
                />
              </div>
              <div className="ad-field">
                <label>Closing Date</label>
                <input
                  type="text"
                  name="closing_date"
                  value={tenderFormData.closing_date}
                  onChange={handleTenderChange}
                  required
                />
              </div>
              <div className="ad-field">
                <label>Category</label>
                <input
                  type="text"
                  name="category"
                  value={tenderFormData.category}
                  onChange={handleTenderChange}
                  required
                />
              </div>
              <div className="ad-field">
                <label>Status</label>
                <input
                  type="text"
                  name="status"
                  value={tenderFormData.status}
                  onChange={handleTenderChange}
                  required
                />
              </div>
              <div className="ad-form-actions">
                <button type="submit" className="ad-primary-btn">
                  {isEditingTender ? "Update Tender" : "Add Tender"}
                </button>
                {isEditingTender && (
                  <button type="button" onClick={handleTenderCancelEdit} className="ad-secondary-btn">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="ad-table-card">
            <h3 className="ad-card-title">All Tenders</h3>
            <div className="ad-table-wrap">
              <table className="ad-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Opening</th>
                    <th>Closing</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tenders.map((tender) => (
                    <tr key={tender.id}>
                      <td>{tender.title}</td>
                      <td>{tender.opening_date}</td>
                      <td>{tender.closing_date}</td>
                      <td>{tender.category}</td>
                      <td>
                        <span className="ad-status-badge">{tender.status}</span>
                      </td>
                      <td>
                        <button onClick={() => handleTenderEdit(tender)} className="ad-edit-btn">
                          Edit
                        </button>
                        <button onClick={() => handleTenderDelete(tender.id)} className="ad-delete-btn">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="ad-section">
          <div className="ad-section-heading">
            <span className="ad-section-bar" />
            <div>
              <p className="ad-section-label">Section 03</p>
              <h2 className="ad-section-title">Contact Messages</h2>
            </div>
          </div>

          <div className="ad-table-card">
            <div className="ad-table-wrap">
              <table className="ad-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact.id}>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.subject}</td>
                      <td>{contact.message}</td>
                      <td>{contact.created_at}</td>
                      <td>
                        <button onClick={() => handleContactDelete(contact.id)} className="ad-delete-btn">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </section>
      </div>
      <section className="ad-section">
          <div className="ad-section-heading">
            <span className="ad-section-bar" />
            <div>
              <p className="ad-section-label">Section 04</p>
              <h2 className="ad-section-title">Partner Requests</h2>
            </div>
          </div>

          <div className="ad-table-card">
            <div className="ad-table-wrap">
              <table className="ad-table">
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Contact Person</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Location</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {partners.map((partner) => (
                    <tr key={partner.id}>
                      <td>{partner.company}</td>
                      <td>{partner.title} {partner.job_title}</td>
                      <td>{partner.email}</td>
                      <td>{partner.phone}</td>
                      <td>{partner.city}, {partner.state}, {partner.country}</td>
                      <td>{partner.message}</td>
                      <td>{partner.created_at}</td>
                      <td>
                        <button onClick={() => handlePartnerDelete(partner.id)} className="ad-delete-btn">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

      <Footer />
    </>
  );
}

export default AdminDashboard;