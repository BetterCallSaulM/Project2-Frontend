import React, { useState } from 'react';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

function UserProfile() {
  const [username, setUsername] = useState('JohnDoe');
  const [name, setName] = useState('John Doe');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('johndoe@example.com');

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log("Profile updated:", { username, name, email });
  };

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <Layout>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-dark text-white p-4 rounded shadow-sm">
            <h1 className="text-center mb-4 text-warning">User Profile</h1>
            <form onSubmit={handleUpdateProfile}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input 
                  type="text" 
                  id="username"
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input 
                  type="password" 
                  id="password"
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <button type="submit" className="btn btn-warning w-100 mt-3">Update Profile</button>
            </form>
            <button onClick={handleLogout} className="btn btn-secondary w-100 mt-3">Logout</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default UserProfile;
