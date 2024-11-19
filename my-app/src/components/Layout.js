import React from 'react';
import Header from './Header.js';  // Import the header component
import Footer from './Footer.js';  // Import the footer component
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS

// Layout style to ensure the page covers the full viewport and remains flexible
const layoutStyle = {
  minHeight: '100vh',  // Full viewport height
  display: 'flex',
  flexDirection: 'column',  // Vertical layout with header and footer
  justifyContent: 'space-between',  // Ensure header stays at the top, footer at the bottom
  backgroundColor: '#2c2c2c',  // Dark background for the entire page
};

// Main content area styling
const mainStyle = {
  flex: '1', 
  maxWidth: '1200px',
  width: '100%',
  padding: '20px',
  margin: '20px auto',
  backgroundColor: '#2c2c2c',  // Dark background
  color: '#FFF',  // White text for contrast
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Subtle shadow for depth
  borderRadius: '8px',
  textAlign: 'center',
};

// Footer style to match the dark design of the layout
const footerStyle = {
  padding: '20px',  // Padding inside the footer
  backgroundColor: '#2c2c2c',  // Dark background to match the header
  color: '#FFF',  // White text for contrast
  textAlign: 'center',  // Center the footer content
  width: '100%',  // Full-width footer
  borderTop: '1px solid #FFD700',  // Gold top border for a movie-inspired look
};

// Styling for forms that blend well with the movie theme, using Bootstrap
const formStyle = {
  display: 'flex',
  flexDirection: 'column',  // Align form elements vertically
  alignItems: 'center',  // Center the form content
  width: '100%',  // Full-width form container
};

// Input field styling that aligns with the overall design
const inputStyle = {
  padding: '10px',  // Comfortable padding inside input fields
  margin: '10px 0',  // Spacing between input fields
  width: '100%',  // Full width, up to the maximum specified
  maxWidth: '400px',  // Limit the maximum width of input fields
  borderRadius: '4px',  // Rounded corners
  border: '1px solid #ccc',  // Subtle border for the input fields
  fontSize: '16px',  // Readable font size
};

// Button styling with a gold color and dark text for a movie-inspired feel
const buttonStyle = {
  padding: '10px 20px',  // Padding around the button text
  backgroundColor: '#FFD700',  // Gold button color for contrast
  color: '#2c2c2c',  // Dark text for readability on the gold background
  border: 'none',  // No border to keep the button clean
  borderRadius: '4px',  // Rounded corners for a modern look
  cursor: 'pointer',  // Pointer cursor on hover for better UX
  fontSize: '16px',  // Readable and accessible font size
};

function Layout({ children }) {
  return (
    <div style={layoutStyle}>
      {/* Reusable Header */}
      <Header />
      
      {/* Main content area */}
      <main style={mainStyle} className="container">
        {children} {/* Dynamically passed page-specific content */}
      </main>
      
      {/* Reusable Footer */}
      <footer style={footerStyle}>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;

// Export common styles for forms, inputs, and buttons to ensure design consistency
export { formStyle, inputStyle, buttonStyle };
