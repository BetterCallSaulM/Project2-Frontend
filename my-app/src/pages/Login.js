import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout'; 
import LoginButton from '../components/login';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => { // Added async here
    e.preventDefault();

    try {
      const requestUrl = `/Users/login/?username=${username}&password=${password}`;
      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (response.ok && data.message === "Login successful") {
        sessionStorage.setItem('username', data.user.username);
        sessionStorage.setItem('password', data.user.password);
        sessionStorage.setItem('is_admin', data.user.is_admin);
        navigate('/dashboard'); // Redirect to dashboard on successful login
      } else {
        alert('Invalid login credentials');
      }
    } catch (error) {
      alert('An error occurred, try again');
    }
  };

  return (
    <Layout>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="col-md-6 bg-dark p-4 rounded shadow-sm">
          <h1 className="text-center mb-4 text-warning">Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-light">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control bg-dark text-white border-light"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-light">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control bg-dark text-white border-light"
                required
              />
            </div>
            <button type="submit" className="btn btn-warning w-100">Login</button>
          </form>
          <div className="mt-3 text-center">
            <LoginButton />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
