import React, { useState } from 'react';
import Layout from '../components/Layout';  // Importing the Layout
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

function Dashboard() {
  const navigate = useNavigate();
  const [topMovies, setTopMovies] = useState([
    {
      id: 1,
      title: "The Matrix",
      genre: "Sci-Fi",
      director: "The Wachowskis",
      year: 1999,
      poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
      id: 2,
      title: "Inception",
      genre: "Sci-Fi",
      director: "Christopher Nolan",
      year: 2010,
      poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg"
    },
    {
      id: 3,
      title: "The Dark Knight",
      genre: "Action",
      director: "Christopher Nolan",
      year: 2008,
      poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
    },
    {
      id: 4,
      title: "Pulp Fiction",
      genre: "Crime",
      director: "Quentin Tarantino",
      year: 1994,
      poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
    },
    {
      id: 5,
      title: "Interstellar",
      genre: "Sci-Fi",
      director: "Christopher Nolan",
      year: 2014,
      poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    }
  ]);

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
