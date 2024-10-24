import React, { useState } from 'react';
import Layout from '../components/Layout'; 
import axios from 'axios';
import LoginButton from '../components/login';

function SignUp() {
  const [name, setName] = useState('');      
  const [email, setEmail] = useState('');    
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // State to store feedback messages

  // Handle form submission
  const insertRow = async (e) => {
    e.preventDefault();  // Prevent form from refreshing the page

    try {
      const response = await axios.post('/signup', {
        name: name, 
        email: email, 
        password: password
      });

      // Handle success
      setMessage('Signup successful! Please log in.');
      setName(''); 
      setEmail(''); 
      setPassword('');

    } catch (error) {
      // Handle errors
      setMessage('Signup failed. Please try again.');
    }
  };

  return (
    <Layout>
      <div style={styles.container}>
        <h1>Sign Up</h1>
        <form onSubmit={insertRow} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
          </div>
          <button type="submit" style={styles.submitButton}>Sign Up</button>
        </form>
        <LoginButton />
        {message && <p style={styles.message}>{message}</p>} {/* Display feedback message */}
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
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
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    fontSize: '14px',
    color: 'green',
  },
};

export default SignUp;
