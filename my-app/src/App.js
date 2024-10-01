import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.js';
import Dashboard from './pages/Dashboard.js';
import MovieWatchlist from './pages/MovieWatchlist.js';
import AddMovie from './pages/AddMovie.js';
import EditMovie from './pages/EditMovie.js';
import MovieDetails from './pages/MovieDetails.js';
import UserProfile from './pages/UserProfile.js';
import AdminDashboard from './pages/AdminDashboard.js';
import Search from './pages/Search.js';
import NotFound from './pages/NotFound.js';
import Login from './pages/Login.js';
import SignUp from './pages/SignUp.js';
import Logout from './pages/Logout.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/moviewatchlist" element={<MovieWatchlist />} /> {/* Ensure this path matches the link */}
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/edit-movie" element={<EditMovie />} />
        <Route path="/movie-details" element={<MovieDetails />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/search" element={<Search />} /> 
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<NotFound />} /> Catch-all route for 404 pages
      </Routes>
    </Router>
  );
}

export default App;
