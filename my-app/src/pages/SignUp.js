import React, { useState } from 'react';
import Layout from '../components/Layout'; 
import axios from 'axios';
import LoginButton from '../components/login';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap

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
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-dark p-4 rounded shadow-sm">
            <h1 className="text-center mb-4 text-warning">Sign Up</h1>
            <form onSubmit={insertRow}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label text-light">Name</label>  {/* Gray for labels */}
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-light"  
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-light">Email</label>  {/* Gray for labels */}
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
