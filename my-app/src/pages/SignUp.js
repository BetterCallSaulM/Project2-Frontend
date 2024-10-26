import React, { useState } from 'react';
import Layout from '../components/Layout'; 
import LoginButton from '../components/login';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap

function SignUp() {   
  const [username, setUsername] = useState('');    
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State to store feedback messages

  // Handle form submission
  const insertRow = async (e) => {
    e.preventDefault();  // Prevent form from refreshing the page

    try {
      const requestUrl = `/Users/newuser/?username=${username}&password=${password}`;
      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response['ok']) { // Successful API call
        setMessage('Account created successfully! Please log in.')
        setUsername(''); 
        setPassword('');
      } else { // API call failed (Email already in use)
        setMessage('Account creation was unsuccessful. Email is already in use')
      }
    } catch (error) {
      // Handle errors
      setMessage('Signup failed. Please try again.');
    }
  };

  return (
    <Layout>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-dark p-4 rounded shadow-sm">
            <h1 className="text-center mb-4 text-warning">Sign Up</h1>
            <form onSubmit={insertRow}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">Username</label>  {/* Gray for labels */}
                <input
                  type="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-light"  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label text-light">Password</label>  {/* Gray for labels */}
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-light"  
                />
              </div>
              <button type="submit" className="btn btn-light w-100 mb-3">Sign Up</button>  {/* Add margin-bottom to Sign Up button */}
            </form>
            <LoginButton className="mt-3 p-2" />
            {message && <p className="mt-3 text-center text-light">{message}</p>}  {/* White/Gray feedback message */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignUp;
