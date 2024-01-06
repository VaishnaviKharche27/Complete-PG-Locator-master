import React, { useState, useEffect } from "react";
import { getAllProperties, deleteResidency } from "../../utils/api";

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
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-semibold mb-4 text-white">Admin Page</h1>
      <table className="min-w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {residencies.map((residency) => (
            <tr key={residency.id}>
              <td className="py-2 px-4 border-b">{residency.title}</td>
              <td className="py-2 px-4 border-b">{residency.description}</td>
              <td className="py-2 px-4 border-b">{residency.price}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleDeleteResidency(residency.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded"
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
