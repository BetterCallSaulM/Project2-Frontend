import React, { useState } from 'react';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

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
    console.log("Movie updated for watchlistId:", watchlistId);
  };

  // Handle deleting the movie from the watchlist
  const handleDelete = (e, watchlistId) => {
    e.preventDefault();
    setUserMovies(userMovies.filter(movie => movie.watchlist_id !== watchlistId));
    console.log("Movie deleted from watchlistId:", watchlistId);
  };

  return (
    <Layout>
      <div className="container mt-5 d-flex flex-column align-items-center">
        <h2 className="mb-4 text-center text-warning">Manage Your Watchlist</h2>

        {userMovies && userMovies.length > 0 ? (
          userMovies.map((movie) => (
            <form
              key={movie.watchlist_id}
              onSubmit={(e) => handleUpdate(e, movie.watchlist_id)}
              className="mb-4 w-75 bg-dark p-4 rounded"  // Dark background with padding and rounded corners
            >
              <div className="form-group row justify-content-center text-light">
                <label className="col-sm-4 col-form-label text-right font-weight-bold">
                  Title (Current):
                </label>
                <div className="col-sm-6">
                  <p className="form-control-plaintext text-left">{movie.title}</p>
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <label htmlFor="movieId" className="col-sm-4 col-form-label text-right text-light">
                  Change Movie:
                </label>
                <div className="col-sm-6">
                  <select name="movieId" className="form-control custom-dropdown">
                    {allMovies.map((m) => (
                      <option key={m.movieId} value={m.movieId}>
                        {m.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <label htmlFor="status" className="col-sm-4 col-form-label text-right text-light">
                  Status:
                </label>
                <div className="col-sm-6">
                  <select name="status" className="form-control custom-dropdown">
                    <option value="Planned">Planned</option>
                    <option value="Watched">Watched</option>
                    <option value="Favorite">Favorite</option>
                  </select>
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-6 offset-sm-4">
                  <button type="submit" className="btn btn-warning mt-1 w-100">
                    Update Movie
                  </button>
                </div>
              </div>

              <div className="form-group row justify-content-center">
                <div className="col-sm-6 offset-sm-4">
                  <button
                    type="button"
                    className="btn btn-secondary w-100 mt-1"
                    onClick={(e) => handleDelete(e, movie.watchlist_id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </form>
          ))
        ) : (
          <p className="text-warning">No movies found in your watchlist.</p>
        )}
      </div>
    </Layout>
  );
}

// Custom CSS applied inline for now
const styles = `
.custom-btn-danger {
  background-color: #b30000; /* Slightly darker red */
  color: #fff;
}

.custom-btn-danger:hover {
  background-color: #990000; /* Darker red on hover */
}

.custom-dropdown {
  background-color: #2c2c2c;  /* Dark background for the dropdown */
  color: #fff;  /* White text for dropdown */
}

.custom-dropdown option {
  color: #000; /* Default black text for dropdown options */
}
`;

// Add the styles directly to the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default MovieWatchlist;
