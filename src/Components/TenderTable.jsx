import { useState, useEffect } from "react";
function TenderTable() {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tenders")
      .then((response) => response.json())
      .then((data) => setTenders(data))
      .catch((error) => console.error("Error fetching tenders:", error));
  }, []);

  return (
    <section className="tender-table-section">
      <h2>Tenders Details</h2>
      <div className="tender-table-wrapper">
        <table className="tender-table">
          <thead>
            <tr>
              <th>Tender ID</th>
              <th>Title</th>
              <th>Opening Date</th>
              <th>Closing Date</th>
              <th>Category</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tenders.map((tender) => (
              <tr key={tender.id}>
                <td>{tender.id}</td>
                <td>{tender.title}</td>
                <td>{tender.opening_date}</td>
                 <td>{tender.closing_date}</td>
                <td>{tender.category}</td>
                <td>
                  <span
                    className={
                      tender.status === "Closed" ? "status-closed" : "status-open"
                    }
                  >
                    {tender.status}
                  </span>
                </td>
                <td>
                  <button className="view-btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default TenderTable;