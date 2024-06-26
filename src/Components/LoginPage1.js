import  { useState } from 'react';
import './LoginPage.css'; // Import CSS file for styling
import {useNavigate } from 'react-router-dom';

const LoginPage1= () => {
    const history = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your login logic here, like sending the login data to the backend
    console.log(loginData);
    history('/RegistrationPage');
  };

  return (
    <div className="login-container"> {/* Added a class for styling */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage1;