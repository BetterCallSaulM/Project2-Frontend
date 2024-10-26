import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { UserContext } from '../context/UserContext'; // Import UserContext
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieDetails() {
  const { id } = useParams(); // Get the movie ID from the URL
  const { userId } = useContext(UserContext); // Get userId from UserContext
  const [movie, setMovie] = useState(null); // State to hold movie data
  const [category, setCategory] = useState(''); // Store the selected category
  const [successMessage, setSuccessMessage] = useState(''); // Success notification
  const [errorMessage, setErrorMessage] = useState(''); // Error notification

  // Fetch movie details based on the movie ID
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`/Movies/${id}/`);
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
        setErrorMessage('Error fetching movie details. Please try again later.');
      }
    };

    fetchMovie();
  }, [id]);

  // Handle adding the movie to the user's watchlist
  const handleAddToWatchlist = async () => {
    if (category && userId) { // Ensure userId is available
      try {
        const newWatchlistItem = {
          watchlist_id: null, // Assuming it's auto-generated by the server
          watchlist_name: category,
          status: category, // or use "Planned" if that fits better
          movie: id, // Assuming this is the movie title or movie ID
          username: userId, // Use the userId from UserContext
        };
  
        // Log the data in array format to match the provided structure
        console.log([
          {
            watchlist_id: newWatchlistItem.watchlist_id,
            watchlist_name: newWatchlistItem.watchlist_name,
            username: newWatchlistItem.username,
            movie: newWatchlistItem.movie,
            status: newWatchlistItem.status,
          }
        ]);
  
        const response = await fetch('/Watchlists/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newWatchlistItem),
        });
  
        if (response.ok) {
          setSuccessMessage(`"${movie.title}" has been added to your watchlist under "${category}".`);
          setErrorMessage('');
          setCategory(''); // Reset category after adding
        } else {
          const errorData = await response.json();
          console.error('Failed to add movie to watchlist:', errorData);
          setErrorMessage('Failed to add movie to watchlist. Please check console for details.');
        }
      } catch (error) {
        console.error('Error adding movie to watchlist:', error);
        setErrorMessage('An error occurred while adding the movie to the watchlist.');
      }
    } else if (!userId) {
      setErrorMessage('User is not logged in. Please log in to add items to the watchlist.');
    } else {
      setErrorMessage('Please select a category first.');
    }
  };

  if (!movie) {
    return (
      <Layout>
        <div className="container my-5">
          <p className="text-center text-white">Loading movie details...</p>
        </div>
      </Layout>
    );
  }

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

          {/* Watchlist Section */}
          <div className="d-flex align-items-center mt-4">
            <label htmlFor="category" className="me-2">Add to Watchlist:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select w-auto"
            >
              <option value="">--Select a Category--</option>
              <option value="Planned">Planned</option>
              <option value="In Progress">In Progress</option>
              <option value="Watched">Watched</option>
            </select>
            <button onClick={handleAddToWatchlist} className="btn btn-primary ms-2 w-25">Add</button>
          </div>

          {/* Notification Messages */}
          {successMessage && <p className="text-success mt-3">{successMessage}</p>}
          {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
        </div>
      </div>
    </Layout>
  );
}

export default MovieDetails;
