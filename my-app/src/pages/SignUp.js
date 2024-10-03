import React, { useState } from 'react';
import Layout from '../components/Layout'; 
import axios from 'axios';
import LoginButton from '../components/login';

function SignUp() {
  const [name, setName] = useState('');      // State for name
  const [email, setEmail] = useState('');    // State for email
  const [password, setPassword] = useState(''); // State for password

const insertRow = () => {
  axios.post('/signup', {
      row: {name: name, email: email, password: password}
  });

  console.log(name);
};

  return (
    <Layout>
      <form onSubmit={insertRow}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required // Optional: Makes the field mandatory
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required // Optional: Makes the field mandatory
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required // Optional: Makes the field mandatory
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <LoginButton />
    </Layout>
  );
}

export default SignUp;