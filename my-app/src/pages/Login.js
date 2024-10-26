import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout'; 
import LoginButton from '../components/login';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      // Pass username and password directly in the URL for a GET request
      const requestUrl = `/Users/login/?username=${username}&password=${password}`;
      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      if (response.ok && data.message === "Login successful") {
        navigate('/dashboard'); // Redirect to dashboard on successful login
        sessionStorage.setItem('username', data.user.username);
        sessionStorage.setItem('password', data.user.password);
        sessionStorage.setItem('is_admin', data.user.is_admin);
      } else {
        alert('Invalid login credentials');
      }
    } catch (error) {
      
     alert(`An error occurred, try again`);
    }
  };

  return (
    <Layout>
      <div className="container mt-5 d-flex justify-content-center">
        <div className="col-md-6 bg-dark p-4 rounded shadow-sm">
          <h1 className="text-center mb-4 text-warning">Login</h1> {/* Gold title */}
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label text-light">Username</label> {/* Light text for labels */}
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
              <label htmlFor="password" className="form-label text-light">Password</label> {/* Light text for labels */}
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control bg-dark text-white border-light"  
                required
              />
            </div>
            <button type="submit" className="btn btn-warning w-100">Login</button>  {/* Gold button for consistency */}
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
