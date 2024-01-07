import React, { useState, useEffect } from "react";
import { getAllProperties, deleteResidency } from "../../utils/api";
import "./Admin.css";

const AdminPage = () => {
  const [residencies, setResidencies] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getAllProperties();
      setResidencies(data);
    } catch (error) {
      console.error("Error fetching residencies:", error);
    }
  };

  const handleDeleteResidency = async (id) => {
    try {
      await deleteResidency(id);
      alert("Residency deleted successfully");
      fetchData();
    } catch (error) {
      console.error("Error deleting residency:", error);
      alert("Error deleting residency");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ margin: "2rem auto", maxWidth: "800px" }}>
      <h1
        style={{
          fontSize: "1.875rem",
          fontWeight: "600",
          marginBottom: "1rem",
          color: "#FFF",
        }}
      >
        Admin Page
      </h1>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#FFF",
          border: "1px solid #D1D5DB",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "0.5rem 1rem",
                borderBottom: "1px solid #D1D5DB",
              }}
            >
              Title
            </th>
            <th
              style={{
                padding: "0.5rem 1rem",
                borderBottom: "1px solid #D1D5DB",
              }}
            >
              Description
            </th>
            <th
              style={{
                padding: "0.5rem 1rem",
                borderBottom: "1px solid #D1D5DB",
              }}
            >
              Price
            </th>
            <th
              style={{
                padding: "0.5rem 1rem",
                borderBottom: "1px solid #D1D5DB",
              }}
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {residencies.map((residency) => (
            <tr key={residency.id}>
              <td
                style={{
                  padding: "0.5rem 1rem",
                  borderBottom: "1px solid #D1D5DB",
                }}
              >
                {residency.title}
              </td>
              <td
                style={{
                  padding: "0.5rem 1rem",
                  borderBottom: "1px solid #D1D5DB",
                }}
              >
                {residency.description}
              </td>
              <td
                style={{
                  padding: "0.5rem 1rem",
                  borderBottom: "1px solid #D1D5DB",
                }}
              >
                {residency.price}
              </td>
              <td
                style={{
                  padding: "0.5rem 1rem",
                  borderBottom: "1px solid #D1D5DB",
                }}
              >
                <button
                  onClick={() => handleDeleteResidency(residency.id)}
                  style={{
                    backgroundColor: "#EF4444",
                    color: "#FFF",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "0.25rem",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
