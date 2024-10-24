import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap

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
      <div className="container d-flex justify-content-center align-items-center" style={styles.fullHeight}>
        <div className="text-center">
          <h1 className="text-white mb-4">Logout Successful</h1>
          <p className="text-white-50">You have successfully logged out. Redirecting to the homepage...</p>
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  fullHeight: {
    minHeight: '25vh',  // 25% of the viewport height
  }
};

export default LogoutConfirmation;
