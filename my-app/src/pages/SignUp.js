import React, { useState } from 'react';
import Layout from '../components/Layout'; 
function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log("Username:", username, "Password:", password);
  };

  return (
    <Layout>
      <h1>Create Account</h1>
      <form onSubmit={handleSignUp}>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </Layout>
  );
}

export default SignUp;
