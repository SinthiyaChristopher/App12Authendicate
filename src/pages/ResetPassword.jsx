import { useState } from "react";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirm) {
      alert("Password reset successful!");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="password" placeholder="New Password"
          value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password"
          value={confirm} onChange={(e) => setConfirm(e.target.value)} />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
}