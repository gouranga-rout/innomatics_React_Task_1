import React from "react";
import './FormBox.css';


const Register = ({ toggleForm, closeFormBox }) => {
  return (
    <div className="form-box-content">
      <span className="close-btn" onClick={closeFormBox}>&times;</span>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p onClick={toggleForm}>Already have an account? Login here.</p>
    </div>
  );
};

export default Register;

