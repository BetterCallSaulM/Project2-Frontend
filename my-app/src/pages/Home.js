import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import LoginButton from '../components/login';

const homeStyle = {
  backgroundColor: '#1a1a1a', 
  color: '#FFFFFF',           
  padding: '20px',
  borderRadius: '8px',
  textAlign: 'center',
};

const linkStyle = {
  color: '#F5C518',           
  textDecoration: 'none',      
};

function Home() {
  return (
    <Layout>
      
        <h1>Welcome to the Home Page</h1>
        <p>This is the home page of the application.</p>
        
        {/* Add a link to the login page */}
        <Link to="/login" style={linkStyle}>Go to Login</Link>
        
        {/* Optional: Add the login button if needed */}
        <div className="mt-3">
          <LoginButton />
        </div>
      
    </Layout>
  );
}

export default Home;
