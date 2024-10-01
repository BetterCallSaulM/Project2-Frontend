import React from 'react';
import { Link } from 'react-router-dom'; 
import Layout from '../components/Layout'; 
function Home() {
  return (
    <Layout>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of the applications.</p>
      {/* Add a link to the login page */}
      <Link to="/login">Go to Login</Link>
    </Layout>
  );
}

export default Home;