import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
    
  const login = (username, password) => {
    // fake login for now
    setUser({ username, email: "demo@example.com" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout,setUser }}>
      {children}
    </AuthContext.Provider>
  );
}