import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const is_admin = sessionStorage.getItem('is_admin');
  const username = sessionStorage.getItem('username');
  const isUserLoggedIn = username && username !== 'null';
  const navigate = useNavigate();

  // Redirects you to login if you try to access website while not logged in
  const handleClick = (event) => {
    if (!isUserLoggedIn) {
      navigate('/login');
    }
  }

  // Clear session variables and redirect to login page
  const handleLogout = (event) => {
    sessionStorage.clear();
    navigate('/login');
  };

  return (
    <header className="bg-dark py-3">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link className="navbar-brand text-warning" to="/">
            Movie Wishlist
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Main Menu Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-warning"
                  href="#"
                  id="mainMenuDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                {/* handleClick function prevents you from accessing the website if you are not logged in */}
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="mainMenuDropdown" onClick={handleClick}>
                  { !isUserLoggedIn && (
                    <li><Link to="/" className="dropdown-item">Home</Link></li>
                  )}
                  <li><Link to="/dashboard" className="dropdown-item">Dashboard</Link></li>
                  <li><Link to="/moviewatchlist" className="dropdown-item">Watchlist</Link></li>
                  <li><Link to="/add-movie" className="dropdown-item">Add Movie</Link></li>
                  <li><Link to="/edit-movie" className="dropdown-item">Edit Movie</Link></li>

                  <li><Link to="/movie-details" className="dropdown-item">Movie Details</Link></li>
                  {/* Admin dashboard only available if you are an admin user */}
                  { is_admin === 'true' && (
                    <li><Link to="/admin" className="dropdown-item">Admin Dashboard</Link></li>
                  )}

                  <li><Link to="/search" className="dropdown-item">Search</Link></li>
                </ul>
              </li>
            </ul>

            {/* Account Dropdown */}
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-warning"
                  href="#"
                  id="accountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="accountDropdown">
                  {/* Links only appear when user is not logged in */}
                  { !isUserLoggedIn && (
                    <>
                      <li><Link to="/login" className="dropdown-item">Login</Link></li>
                      <li><Link to="/signup" className="dropdown-item">Sign Up</Link></li>
                    </>
                  )}
                  {/* Links only appear when user is logged in */}
                  { isUserLoggedIn && (
                    <>
                      <li><Link to="/profile" className="dropdown-item">Settings</Link></li>
                      <li><Link to="/logout" className="dropdown-item" onClick={handleLogout}>Logout</Link></li>
                    </>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
