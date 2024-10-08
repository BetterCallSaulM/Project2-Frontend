import React, { useState } from 'react';
import Layout from '../components/Layout'; 

function UserProfile() {
  const [username, setUsername] = useState('JohnDoe');
  const [name, setName] = useState('John Doe');
  const [password, setPassword] = useState('');

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    // Logic to update user profile
    console.log("Profile updated:", { username, name });
  };

  const handleLogout = () => {
    // Logic to handle logout
    console.log("User logged out");
  };

  return (
    <Layout>
      <div style={styles.container}>
        <h1>User Profile</h1>
        <form onSubmit={handleUpdateProfile} style={styles.form}>
          <div style={styles.formGroup}>
            <label>Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label>Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.updateButton}>Update Profile</button>
        </form>
        <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  updateButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  logoutButton: {
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default UserProfile;
