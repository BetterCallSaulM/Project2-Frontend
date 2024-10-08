import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout'; 

function LogoutConfirmation() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/'); // Redirect to home page after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigate]);

  return (
    <Layout>
      <div style={styles.container}>
        <h1>Logout Confirmation</h1>
        <p>You have successfully logged out. Redirecting to the homepage...</p>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    marginTop: '50px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  }
};

export default LogoutConfirmation;
