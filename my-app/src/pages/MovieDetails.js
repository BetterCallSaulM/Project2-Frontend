import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';

function MovieDetails() {
  const { id } = useParams();  // Get the movie ID from URL

  // Simulating "The Dark Knight" movie details
  const movie = { 
    id, 
    title: "The Dark Knight", 
    description: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.", 
    director: "Christopher Nolan",
    genre: "Action",
    year: 2008,
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" 
  };

  const [category, setCategory] = useState('');  // Store the selected category
  const [successMessage, setSuccessMessage] = useState('');  // Success notification
  const [rating, setRating] = useState(0);  // Store the rating

  const handleAddToWatchlist = () => {
    if (category) {
      console.log(`Added ${movie.title} to watchlist under "${category}"`);
      setSuccessMessage(`"${movie.title}" added to your watchlist under "${category}"!`);
      setCategory('');  // Reset category after adding
    } else {
      setSuccessMessage('Please select a category first.');
    }
  };

  const handleRatingClick = (value) => {
    setRating(value);  // Set the selected rating
  };

  return (
    <Layout>
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img src={movie.poster} alt={movie.title} style={styles.poster} />
        </div>
        <div style={styles.detailsContainer}>
          <h1>{movie.title}</h1>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Year:</strong> {movie.year}</p>
          <p>{movie.description}</p>

          {/* Rating Section */}
          <div style={styles.ratingContainer}>
            <strong>Rating: </strong>
            {[...Array(5)].map((_, index) => (
              <span
                key={index}
                style={index < rating ? styles.starFilled : styles.star}
                onClick={() => handleRatingClick(index + 1)}
              >
                &#9733;
              </span>
            ))}
          </div>

          {/* Watchlist Section */}
          <div>
            <label htmlFor="category">Add to Watchlist: </label>
            <select 
              id="category" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              style={styles.select}
            >
              <option value="">--Select a Category--</option>
              <option value="Planned">Planned</option>
              <option value="In Progress">In Progress</option>
              <option value="Watched">Watched</option>
            </select>
            <button onClick={handleAddToWatchlist} style={styles.button}>
              Add to Watchlist
            </button>
          </div>

          {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
        </div>
      </div>
    </Layout>
  );
}

// Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
  },
  imageContainer: {
    flex: 1,
    textAlign: 'center',
  },
  poster: {
    width: '300px',
    borderRadius: '10px',
  },
  detailsContainer: {
    flex: 1,
    maxWidth: '400px',
    textAlign: 'left',
  },
  select: {
    marginLeft: '10px',
    padding: '5px',
  },
  button: {
    marginLeft: '10px',
    padding: '5px 15px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  successMessage: {
    color: 'green',
    marginTop: '10px',
  },
  ratingContainer: {
    marginBottom: '15px',
  },
  star: {
    fontSize: '25px',
    cursor: 'pointer',
    color: '#ccc',  // Empty star color
  },
  starFilled: {
    fontSize: '25px',
    cursor: 'pointer',
    color: '#ffcc00',  // Filled star color
  },
};

export default MovieDetails;
