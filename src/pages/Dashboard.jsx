import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard! Choose an option:</p>

      <div className="button-group">
        <Link to="/login">
          <button className="btn btn-primary">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-secondary">Register</button>
        </Link>
        <Link to="/Profile">
          <button className="btn btn-primary">User Profile</button>
        </Link>
         <Link to="/reset">
          <button className="btn btn-primary">Reset Password</button>
        </Link>
        <Link to="/forgot">
          <button className="btn btn-secondary">Forgot Password</button>
        </Link>
      </div>
    </div>
  );
}