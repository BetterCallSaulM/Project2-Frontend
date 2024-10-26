import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout'; // Include Layout component
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]); // Array to store all movies fetched from the API
  const [filteredMovies, setFilteredMovies] = useState([]); // Array to store filtered results
  const [selectedGenre, setSelectedGenre] = useState('');
  const navigate = useNavigate();

  // Fetch movies from the API and store them in 'movies' array
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/Movies/');
        const data = await response.json();

        const formattedMovies = data.map((movie) => ({
          id: movie.movie_id,
          title: movie.title,
          genre: movie.genre,
          director: movie.director,
          year: movie.year,
          poster: movie.poster,
        }));

        setMovies(formattedMovies); // Save all fetched movies in 'movies' array
        setFilteredMovies(formattedMovies); // Initially, filteredMovies will be all movies
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedGenre(''); // Reset the selected genre when searching
    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.year.toString().includes(searchTerm)
    );
    setFilteredMovies(results); // Update filteredMovies based on search term
  };

  const handleGenreClick = (genre) => {
    setSearchTerm(''); // Reset the search term when filtering by genre
    setSelectedGenre(genre);
    const results = movies.filter((movie) => movie.genre === genre);
    setFilteredMovies(results); // Update filteredMovies based on selected genre
  };

  const redirectToMovieInfo = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <Layout>
      <div className="container mt-5">
        <h1 className="text-center mb-4 text-warning">
          {selectedGenre ? `${selectedGenre} movies` : searchTerm ? `Search results for "${searchTerm}"` : 'Search Movies'}
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="d-flex justify-content-center mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title, director, or year..."
            className="form-control me-2"
            style={{ maxWidth: '300px' }}
          />
          <button type="submit" className="btn btn-warning">
            Search
          </button>
        </form>

        {/* Movie Cards */}
        <div className="row">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card bg-dark text-white" style={{ maxWidth: '180px', margin: '0 auto' }}>
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="card-img-top"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <p className="card-text">
                      <small>
                        <strong>Director:</strong> {movie.director}
                      </small>
                    </p>
                    <p className="card-text">
                      <small>
                        <strong>Year:</strong> {movie.year}
                      </small>
                    </p>
                    <button
                      onClick={() => handleGenreClick(movie.genre)}
                      className="btn btn-outline-warning btn-sm mb-2"
                    >
                      {movie.genre}
                    </button>
                    <button
                      onClick={() => redirectToMovieInfo(movie.id)}
                      className="btn btn-warning btn-sm"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-white">No movies found.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Search;
