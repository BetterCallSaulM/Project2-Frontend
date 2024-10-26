import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

function UserProfile() {
  let username = sessionStorage.getItem('username');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    try {
      const requestUrl = `/Users/delete/?username=${username}&password=${password}`;
      const response = await fetch(requestUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Redirect to login after successful account deletion, otherwise gives appropiate error message
      if (response.status === 202) {
        navigate('/login');
      } else if (response.status === 404) {
        setMessage('Incorrect password');
      } else if (response.status === 400) {
        setMessage('Enter your password to confirm account deletion');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-dark text-white p-4 rounded shadow-sm">
            <h1 className="text-center mb-4 text-warning">Settings</h1>
            <form onSubmit={handleUpdateProfile}>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Enter Password</label>
                <input 
                  type="password" 
                  id="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <button type="submit" className="btn btn-warning w-100 mt-3">Delete Profile</button>
            </form>
            {message && <p className="mt-3 text-center text-light">{message}</p>}  {/* White/Gray feedback message */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserProfile;
