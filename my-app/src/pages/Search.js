import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([
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

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [selectedGenre, setSelectedGenre] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedGenre) {
      document.title = `${selectedGenre} movies`;
    } else if (searchTerm) {
      document.title = `Search results for "${searchTerm}"`;
    } else {
      document.title = 'Search Movies';
    }
  }, [selectedGenre, searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedGenre('');
    const results = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.year.toString().includes(searchTerm)
    );
    setFilteredMovies(results);
  };

  const handleGenreClick = (genre) => {
    setSearchTerm('');
    setSelectedGenre(genre);
    const results = movies.filter(movie => movie.genre === genre);
    setFilteredMovies(results);
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
          <button type="submit" className="btn btn-warning">Search</button>
        </form>

        {/* Movie Cards */}
        <div className="row">
          {filteredMovies.length > 0 ? (
            filteredMovies.map(movie => (
              <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card bg-dark text-white" style={{ maxWidth: '180px', margin: '0 auto' }}>
                  <img src={movie.poster} alt={movie.title} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h6 className="card-title">{movie.title}</h6>
                    <p className="card-text"><small><strong>Director:</strong> {movie.director}</small></p>
                    <p className="card-text"><small><strong>Year:</strong> {movie.year}</small></p>
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
