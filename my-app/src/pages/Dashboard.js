import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';  // Importing the Layout
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

function Dashboard() {
  const navigate = useNavigate();
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/Movies/'); 
        if (!response.ok) throw new Error('Failed to fetch movies');
        
        const data = await response.json();
        setTopMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);
  return (
    <Layout>
      <h1>Top Movies</h1>
      <p>Explore the top trending movies this week!</p>

      {/* Section for displaying the top movies in a clean grid format */}
      <section style={styles.movieGrid}>
        {topMovies.map(movie => (
          <div key={movie.id} style={styles.movieCard}>
            <img src={movie.poster} alt={movie.title} style={styles.poster} />
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <p>Director: {movie.director}</p>
          </div>
        ))}
      </section>

      {/* Placeholder for personalized recommendations */}
      <section>
        <h2>Recommended for You</h2>
        <p>Personalized movie recommendations based on your watchlist will appear here.</p>
      </section>

      {/* Profile management section */}
      <section>
        <h2>Your Profile</h2>
        <p>Manage your account, update your information, and check your watchlist history.</p>
        <button onClick={() => navigate('/profile')} style={styles.button}>Edit Profile</button>
      </section>
    </Layout>
  );
}

// Minimal styling for a clean and modern look, using a dark and light contrast
const styles = {
  movieGrid: {
    display: 'flex',
    justifyContent: 'space-around',  // Evenly distribute movie cards
    flexWrap: 'wrap',  // Ensure cards wrap on smaller screens
    gap: '20px',  // Add space between movie cards
  },
  movieCard: {
    backgroundColor: '#2c2c2c',  // Dark background for the cards
    color: '#fff',  // White text for contrast
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',  // Soft shadow for depth
    width: '200px',  // Consistent card width
  },
  poster: {
    width: '100%',  // Ensure the poster fits the card width
    height: 'auto',  // Maintain aspect ratio
    borderRadius: '8px',  // Rounded edges for a smooth look
    marginBottom: '10px',  // Space between poster and text
  },
  button: {
    padding: '10px 20px',  // Comfortable button padding
    backgroundColor: '#FFD700',  // Highlight button with gold color
    color: '#2c2c2c',  // Dark text for readability
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',  // Pointer cursor for better UX
    fontSize: '16px',
  },
};

export default Dashboard;
