import React, { useState } from 'react';
import Layout from '../components/Layout'; 

function MovieWatchlist() {
  // Simulated user movies and all available movies
  const [userMovies, setUserMovies] = useState([
    { id: 1, title: "The Matrix", status: "Favorite", watchlist_id: 1001 },
    { id: 2, title: "Inception", status: "Planned", watchlist_id: 1002 },
    { id: 3, title: "The Dark Knight", status: "Watched", watchlist_id: 1003 },
  ]);

  const allMovies = [
    { movieId: 1, title: "The Matrix" },
    { movieId: 2, title: "Inception" },
    { movieId: 3, title: "The Dark Knight" },
    { movieId: 4, title: "Pulp Fiction" },
    { movieId: 5, title: "Interstellar" }
  ];

  // Handle updating the movie details
  const handleUpdate = (e, watchlistId) => {
    e.preventDefault();
    // Logic to update the movie in the watchlist
    console.log("Movie updated for watchlistId:", watchlistId);
  };

  // Handle deleting the movie from the watchlist
  const handleDelete = (e, watchlistId) => {
    e.preventDefault();
    // Logic to delete the movie from the watchlist
    setUserMovies(userMovies.filter(movie => movie.watchlist_id !== watchlistId));
    console.log("Movie deleted from watchlistId:", watchlistId);
  };

  return (
    <Layout>
      <h2>Update Your Favorite Movies</h2>

      {userMovies && userMovies.length > 0 ? (
        userMovies.map((movie) => (
          <form key={movie.watchlist_id} onSubmit={(e) => handleUpdate(e, movie.watchlist_id)}>
            <div>
              <strong>Title:</strong> {movie.title} (Current)
              <input type="hidden" name="watchlistId" value={movie.watchlist_id} />
            </div>

            <div>
              <label htmlFor="movieId">Change Movie:</label>
              <select name="movieId" defaultValue={movie.id}>
                {allMovies.map((m) => (
                  <option key={m.movieId} value={m.movieId}>
                    {m.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="status">Status:</label>
              <select name="status" defaultValue={movie.status}>
                <option value="Planned">Planned</option>
                <option value="Watched">Watched</option>
                <option value="Favorite">Favorite</option>
              </select>
            </div>

            <div>
              <button type="submit">Update Movie</button>
              <button type="button" onClick={(e) => handleDelete(e, movie.watchlist_id)}>
                Delete
              </button>
            </div>

            <br /><br />
          </form>
        ))
      ) : (
        <p>No movies found in your watchlist.</p>
      )}
    </Layout>
  );
}

export default MovieWatchlist;
