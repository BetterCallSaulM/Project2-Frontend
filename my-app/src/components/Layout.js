import React from 'react';
import Header from './Header.js';  // Import the header
import Footer from './Footer.js';  // Import the footer

const layoutStyle = {
  minHeight: '100vh', // Ensure the layout covers the full viewport
  display: 'flex',
  flexDirection: 'column',
};

const contentStyle = {
  flex: '1', // Pushes the footer to the bottom
  padding: '20px',
};

function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      <Header />  {/* Reusable Header */}
      <main style={contentStyle}>
        {children} {/* Page-specific content goes here */}
      </main>
      <Footer />  {/* Reusable Footer */}
    </div>
  );
}

export default Layout;
