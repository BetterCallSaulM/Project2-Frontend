import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

function Footer() {
  return (
    <footer className="bg-dark text-warning text-center py-3 fixed-bottom">
      <p>Movie Watchlist &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
