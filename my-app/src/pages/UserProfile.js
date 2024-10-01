import React, { useState } from 'react';
import Layout from '../components/Layout'; 
function UserProfile() {
  const [username, setUsername] = useState('JohnDoe');
  const [password, setPassword] = useState('');

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Logic to update user profile
    console.log("Profile updated:", username);
  };

  return (
    <Layout>
      <h1>User Profile</h1>
      <form onSubmit={handleUpdateProfile}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </Layout>
  );
}

export default UserProfile;
