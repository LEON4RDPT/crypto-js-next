import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import Register from './Register'; // Import the Register component
import GridModal from './GridModal'; // Import the GridModal component
//import './App.css';
//import './Register.css'; // Import styles for the register form

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [showGridModal, setShowGridModal] = useState(false); // State for the grid modal

  const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY; // Updated for Next.js

  const handleLogin = (e) => {
    e.preventDefault();
    const encryptedPassword = CryptoJS.AES.encrypt(password, privateKey).toString();
    console.log(`Username: ${username}, Encrypted Password: ${encryptedPassword}`);
    alert(`Username: ${username}, Encrypted Password: ${encryptedPassword}`);
  };

  return (
    <div className="App">
      <div className="login-card">
      <img src="/next.svg" alt="App Logo" className="login-logo" /> {/* Use direct URL here */}
        <h2>My Cryptograph Login</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="login-button padup">
            Login
          </button>
        </form>
        <button onClick={() => setShowRegister(true)} className="login-button padup">
          Register
        </button>
        <button onClick={() => setShowGridModal(true)} className="login-button padup">
          Show Grid
        </button>
      </div>

      {showRegister && (
        <div className="overlay">
          <Register onClose={() => setShowRegister(false)} />
        </div>
      )}

      {showGridModal && (
        <GridModal onClose={() => setShowGridModal(false)} />
      )}
    </div>
  );
}

export default App;
