import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Admin from "./AdminPage"; // Import the Admin component
import "./Admin.css";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false); // State to track login error
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Simulated authentication logic
    const isAdminAuthenticated =
      username === "admin" && password === "adminpassword";

    if (isAdminAuthenticated) {
      // Redirect to the Admin component after successful login
      navigate("/admin");
    } else {
      setError(true); // Set error state to true on failed login
      console.log("Admin login failed. Invalid credentials.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "0.5rem",
          width: "24rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          Admin Login
        </h2>
        {error && (
          <p style={{ color: "red", marginBottom: "1rem" }}>
            Invalid username or password
          </p>
        )}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#4B5563",
              }}
            >
              Username:
            </label>
            <input
              type="text"
              style={{
                marginTop: "0.25rem",
                padding: "0.5rem",
                border: "1px solid #E5E7EB",
                borderRadius: "0.25rem",
                width: "100%",
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label
              style={{
                fontSize: "0.875rem",
                fontWeight: "500",
                color: "#4B5563",
              }}
            >
              Password:
            </label>
            <input
              type="password"
              style={{
                marginTop: "0.25rem",
                padding: "0.5rem",
                border: "1px solid #E5E7EB",
                borderRadius: "0.25rem",
                width: "100%",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            style={{
              backgroundColor: "#3B82F6",
              color: "white",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              cursor: "pointer",
              transition: "background-color 0.3s ease-in-out",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
