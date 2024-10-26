import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Page components
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import MovieWatchlist from './pages/MovieWatchlist';
import AddMovie from './pages/AddMovie';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import UserProfile from './pages/UserProfile';
import AdminDashboard from './pages/AdminDashboard';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Logout from './pages/Logout';

// Other components
import LoginButton from './components/login';
import { gapi } from 'gapi-script';

// Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const clientId = "723447073505-5ph6b9rvg7h14j21tl0n5cua4dvl8cpa.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      });
    }
    gapi.load('client:auth2', start);

    // Cleanup function for gapi
    return () => {
      gapi.auth2.getAuthInstance().disconnect();
    };
  }, []);

  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/moviewatchlist" element={<MovieWatchlist />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/edit-movie" element={<EditMovie />} />
          <Route path="/movie/:id" element={<MovieDetails />} /> {/* Use dynamic route for movie details */}
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
        <LoginButton /> {/* LoginButton component outside of Routes */}
      </Router>
 
  );
}

export default App;