import { useState, useContext } from "react";
import { validateLogin } from "../utils/validation";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Modal from "../components/Modal";
import Toast from "../components/Toast";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username && password) {
        setLoading(true);
        setTimeout(() => {
          login(username, password);  
          setLoading(false);
          setToast({ message: "Login successful!", type: "success" });
          setShowModal(true);
          setTimeout(()=> navigate("/"), 2000);
        },1500);
        }else{
            setToast({message: "Please fill all fields", type: "error"});
        }
    };
        

  return (
    <div className="auth-container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
      {loading && <Loader />}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
      {showModal && (
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
            <h3>Login Successful</h3>
            <p> Welcome Back , {username}. </p>
            <Button onClick= {() => setShowModal(false)}>Close</Button>
            </Modal>
      )}
    </div>
  );
}