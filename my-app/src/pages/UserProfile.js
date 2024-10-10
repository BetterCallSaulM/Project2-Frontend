import React, { useState } from 'react';
import Layout from '../components/Layout'; 

function UserProfile() {
  const [username, setUsername] = useState('JohnDoe');
  const [name, setName] = useState('John Doe');
  const [password, setPassword] = useState('');

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    console.log("Profile updated:", { username, name });
  };

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <Layout>
      <div className="profile-container" style={styles.container}>
        <h1 style={styles.header}>User Profile</h1>
        <form onSubmit={handleUpdateProfile} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="username" style={styles.label}>Username</label>
            <input 
              type="text" 
              id="username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="name" style={styles.label}>Name</label>
            <input 
              type="text" 
              id="name"
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input 
              type="password" 
              id="password"
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
    maxWidth: '500px',
    margin: '50px auto',  // Center the form on the page with margin
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
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
  label: {
    marginBottom: '5px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',  // Ensure padding doesn't affect width
  },
  updateButton: {
    padding: '10px 20px',
    
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
    width: '100%',  // Make the button full-width
  },
  logoutButton: {
    marginTop: '20px',
    padding: '10px 20px',

    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '100%',  // Make the button full-width
  },
};

export default UserProfile;
