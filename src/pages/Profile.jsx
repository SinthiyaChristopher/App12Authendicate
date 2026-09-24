import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Button from "../components/Button";
export default function Profile() {
  const { user, logout } = useContext(AuthContext);
  if (!user) {
    return <p> No user Logged in..</p>;
  }
  return (
    <div className = "profile-container">
      <h2> User Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email || "Not provided"}</p>
        <Button onClick = {logout}>Logout</Button>
    </div>
  );
}