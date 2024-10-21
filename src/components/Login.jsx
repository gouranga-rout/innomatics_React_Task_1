import React from "react";
import './FormBox.css';


const Login = ({ toggleForm, closeFormBox }) => {
  return (
    <div className="form-box-content">
      <span className="close-btn" onClick={closeFormBox}>&times;</span>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p onClick={toggleForm}>Don't have an account? <span>Register here.</span></p>
    </div>
  );
};

export default Login;

