import React from 'react';
import Header from './Header.js';  // Import the header
import Footer from './Footer.js';  // Import the footer

const layoutStyle = {
  minHeight: '100vh',  // Ensure the layout covers the full viewport
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',  // Ensure header is at the top, footer at the bottom
  backgroundColor: '#f4f4f9',  // Light background for the layout
};

const mainStyle = {
  flex: '1',  // Take up the remaining space between header and footer
  maxWidth: '1200px',   // Consistent max width for all pages
  width: '100%',        // Ensure full width within the max width
  padding: '20px',      // Uniform padding for all pages
  margin: '20px auto',  // Center content horizontally
  backgroundColor: '#fff',  // White background for content
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Subtle shadow for depth
  borderRadius: '8px',  // Rounded corners
  textAlign: 'center',
};

const footerStyle = {
  padding: '20px',
  backgroundColor: '#f1f1f1',
  textAlign: 'center',
  width: '100%',
};

// Styles for forms
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
};

const inputStyle = {
  padding: '10px',
  margin: '10px 0',
  width: '100%',
  maxWidth: '400px',  // Maximum width for the input fields
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const buttonStyle = {
  padding: '10px 20px',
  
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '16px',
};

function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <Header />  {/* Reusable Header */}
      <main style={mainStyle}>
        {children} {/* Page-specific content goes here */}
      </main>
      <footer style={footerStyle}>
        <Footer />  {/* Reusable Footer */}
      </footer>
    </div>
  );
}

export default Layout;

export { formStyle, inputStyle, buttonStyle };
