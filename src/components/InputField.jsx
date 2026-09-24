import { useState } from "react";

export default function InputField({ label, type = "text", value, onChange }) {
  const [show, setShow] = useState(false);

  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type === "password" ? (show ? "text" : "password") : type}
        value={value}
        onChange={onChange}
        className="input"
      />
      {type === "password" && (
        <button type="button" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>
      )}
    </div>
  );
}