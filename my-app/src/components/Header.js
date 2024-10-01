import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Styles for header and navigation
const styles = {
  header: {
    backgroundColor: '#2c2c2c',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-between', // Spread items to left and right
    alignItems: 'center',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center', // Center the main navigation links
    flexGrow: 1, // Allow the nav to take up the middle space
  },
  ul: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '20px',
  },
  li: {
    display: 'inline',
  },
  link: {
    color: '#FFD700', // Gold color for links
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  activeLink: {
    color: '#FF6347', // Active link highlighted in red
  },
  auth: {
    display: 'flex',
    gap: '15px', // Space between auth links
  },
};

const links = [
  { path: '/', label: 'Home' },
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/moviewatchlist', label: 'Watchlist' },
  { path: '/profile', label: 'Profile' },
  { path: '/add-movie', label: 'Add Movie' },
  { path: '/edit-movie', label: 'Edit Movie' },
  { path: '/movie-details', label: 'Movie Details' },
  { path: '/admin', label: 'Admin Dashboard' },
  { path: '/search', label: 'Search' },
];

const authLinks = [
  { path: '/login', label: 'Login' },
  { path: '/signup', label: 'Sign Up' },
  { path: '/logout', label: 'Logout' },
];

function Header() {
  const location = useLocation(); // Get the current location

  // Function to generate list items for navigation
  const renderNavLink = (path, label) => (
    <li style={styles.li} key={path}>
      <Link to={path} style={location.pathname === path ? styles.activeLink : styles.link}>
        {label}
      </Link>
    </li>
  );

  return (
    <header style={styles.header}>
      {/* Main navigation links */}
      <nav style={styles.nav}>
        <ul style={styles.ul}>
          {links.map(({ path, label }) => renderNavLink(path, label))}
        </ul>
      </nav>

      {/* Authentication-related links (aligned to the right) */}
      <div style={styles.auth}>
        {authLinks.map(({ path, label }) => renderNavLink(path, label))}
      </div>
    </header>
  );
}

export default Header;
