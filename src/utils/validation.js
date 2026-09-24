export function validateLogin(username, password) {
  const errors = {};
  if (!username.trim()) errors.username = "Username is required";
  if (!password.trim()) errors.password = "Password is required";
  return errors;
}

export function validateRegister(username, email, password) {
  const errors = {};
  if (!username.trim()) errors.username = "Username is required";
  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    errors.email = "Invalid email format";
  }
  if (!password.trim()) errors.password = "Password is required";
  else if (password.length < 6) errors.password = "Password must be at least 6 characters";
  return errors;
}

export function validateForgotPassword(email) {
  const errors = {};
  if (!email.trim()) errors.email = "Email is required";
  else if (!/^\S+@\S+\.\S+$/.test(email)) errors.email = "Invalid email format";
  return errors;
}

export function validateResetPassword(password, confirmPassword) {
  const errors = {};
  if (!password.trim()) errors.password = "Password is required";
  else if (password.length < 6) errors.password = "Password must be at least 6 characters";
  if (password !== confirmPassword) errors.confirmPassword = "Passwords do not match";
  return errors;
}