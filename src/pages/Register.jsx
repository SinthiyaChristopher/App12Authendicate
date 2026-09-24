import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage("Registered successfully!");

    // After 2 seconds, redirect to dashboard
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="auth-container">
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Username</label>
          <input type="text" placeholder="Enter username" />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="submit">Register</button>
      </form>

      {/* ✅ Success message */}
      {message && <p style={{ color: "green" }}>{message}</p>}
    </div>
  );
}