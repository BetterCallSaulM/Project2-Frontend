import React from 'react';

const footerStyle = {
  backgroundColor: '#2c2c2c',
  color: '#FFD700', // Gold color for footer text
  textAlign: 'center',
  padding: '20px',
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
};

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>Movie Wishlist &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
