// src/Register.js
import React, { useState } from 'react';

function Register({onClose}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  console.log(onclose);


  const handleRegister = (e) => {
    e.preventDefault();
    // Add your registration logic here, e.g., API call to register the user
    
    if (password === repeatPassword) {
      alert(`Registered User: ${username}`);
      onClose(); // Close the registration form after registration
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="register-modal">
      <h2 className='registerh2 '>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="input-container">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            placeholder="Enter your username"
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>
        <div className="input-container">
          <label htmlFor="repeat-password">Repeat Password</label>
          <input
            type="password"
            id="repeat-password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
            placeholder="Repeat your password"
          />
        </div>
        <button type="submit" className="button buttonRadius padu1">
          Register
        </button>
        <button type="button" onClick={onClose} className="button buttonRadius padu1">
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Register;