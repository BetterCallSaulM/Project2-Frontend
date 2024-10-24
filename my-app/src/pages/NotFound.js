import React from 'react';
import Layout from '../components/Layout'; 
import { Link } from 'react-router-dom';  // For navigation back to home
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

function NotFound() {
  return (
    <Layout>
      <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '80vh', color: '#fff' }}>
        <h1 className="display-3 mb-3">404 - Page Not Found</h1>
        <p className="lead mb-4">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-warning btn-lg">Go Back to Home</Link>
      </div>
    </Layout>
  );
}

export default NotFound;
