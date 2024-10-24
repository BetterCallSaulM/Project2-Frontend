import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'; // Import Font Awesome stars

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
      <div className="container my-5 d-flex flex-column flex-md-row align-items-center">
        <div className="text-center mb-4 mb-md-0">
          <img src={movie.poster} alt={movie.title} className="img-fluid rounded" style={{ maxWidth: '300px' }} />
        </div>
        <div className="mx-md-5">
          <h1 className="text-warning">{movie.title}</h1>
          <p><strong>Director:</strong> {movie.director}</p>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Year:</strong> {movie.year}</p>
          <p>{movie.description}</p>

          {/* Rating Section */}
          <div className="my-3">
            <strong>Rating: </strong>
            {[...Array(5)].map((_, index) => {
              const fullRating = index + 1;
              const halfRating = index + 0.5;
              return (
                <span key={index} onClick={() => handleRatingClick(fullRating)} style={{ cursor: 'pointer' }}>
                  {rating >= fullRating ? (
                    <FaStar color="#ffcc00" />
                  ) : rating >= halfRating ? (
                    <FaStarHalfAlt color="#ffcc00" />
                  ) : (
                    <FaRegStar color="#ccc" />
                  )}
                </span>
              );
            })}
          </div>

          {/* Watchlist Section */}
          <div className="d-flex align-items-center">
            <label htmlFor="category" className="me-2">Add to Watchlist:</label>
            <select 
              id="category" 
              value={category} 
              onChange={(e) => setCategory(e.target.value)}
              className="form-select w-auto"
            >
              <option value="">--Select a Category--</option>
              <option value="Planned">Planned</option>
              <option value="In Progress">Favorite</option>
              <option value="Watched">Watched</option>
            </select>
            <button onClick={handleAddToWatchlist} className="btn btn-primary ms-2
             w-25">Add</button>
          </div>

          {successMessage && <p className="text-success mt-3">{successMessage}</p>}
        </div>
      </div>
    </Layout>
  );
}

export default MovieDetails;
