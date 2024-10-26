import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

function UserProfile() {
  let username = sessionStorage.getItem('username');
  const [password, setPassword] = useState('');
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
      console.log(response);

      if (response.status === 202) {
        navigate('/login');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    let username = sessionStorage.getItem('username');
    console.log(username); // Prints null
    navigate('/login');
  };

  return (
    <Layout>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-dark text-white p-4 rounded shadow-sm">
            <h1 className="text-center mb-4 text-warning">Settings</h1>
            <form onSubmit={handleUpdateProfile}>
              {/* <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input 
                  type="text" 
                  id="username"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  className="form-control bg-dark text-white border-secondary"
                />
              </div> */}
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
            <button onClick={handleLogout} className="btn btn-secondary w-100 mt-3">Logout</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserProfile;
