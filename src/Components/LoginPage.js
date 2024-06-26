// LoginPage.js
import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter username and password.');
    } else {
      setError('');
      
      history('/chat');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="form-group" onSubmit={handleLogin}>
        <div>
          <label className="label">Username:</label>
          <input className="input1"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="label">Password:</label>
          <input className="input1"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button1" type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
