import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "The Matrix",
      genre: "Sci-Fi",
      director: "The Wachowskis",
      year: 1999,
      poster:  "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
  
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
  const [selectedGenre, setSelectedGenre] = useState(''); // Store selected genre
  const [displayedGenres, setDisplayedGenres] = useState({}); // Track which genres are showing "genre movies"
  const navigate = useNavigate();

  // Update the title based on the selected genre or search term
  useEffect(() => {
    if (selectedGenre) {
      document.title = `${selectedGenre} movies`;
    } else if (searchTerm) {
      document.title = `Search results for "${searchTerm}"`;
    } else {
      document.title = 'Search Movies';
    }
  }, [selectedGenre, searchTerm]);

  // Filter movies by search term
  const handleSearch = (e) => {
    e.preventDefault();
    setSelectedGenre('');  // Clear selected genre when searching
    const results = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.year.toString().includes(searchTerm)
    );
    setFilteredMovies(results);
  };

  // Filter movies by genre (from the movie card buttons) and append "movies" to the genre
  const handleGenreClick = (genre) => {
    setSearchTerm(''); // Clear search term when filtering by genre
    setSelectedGenre(genre);
    setDisplayedGenres((prev) => ({
      ...prev,
      [genre]: true
    }));
    const results = movies.filter(movie => movie.genre === genre);
    setFilteredMovies(results);
  };

  const redirectToMovieInfo = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <Layout>
      <div style={styles.container}>
        <h1>{selectedGenre ? `${selectedGenre} movies` : searchTerm ? `Search results for "${searchTerm}"` : 'Search Movies'}</h1>
        
        {/* Search Form */}
        <form onSubmit={handleSearch} style={styles.form}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title, director, or year..."
            style={styles.searchInput}
          />
          <button type="submit" style={styles.searchButton}>Search</button>
        </form>

        {/* Movie List */}
        <div style={styles.gridContainer}>
          {filteredMovies.length > 0 ? (
            filteredMovies.map(movie => (
              <div key={movie.id} style={styles.movieCard}>
                <h3>{movie.title}</h3>
                <p>Director: {movie.director}</p>
                <p>Year: {movie.year}</p>
                <button 
                  onClick={() => handleGenreClick(movie.genre)} 
                  style={{ padding: '10px', cursor: 'pointer', backgroundColor: movie.genre === selectedGenre  }}
                >
                  {movie.genre}
                </button>
                <img src={movie.poster} alt={movie.title} style={styles.poster} />
              </div>
            ))
          ) : (
            <p>No movies found.</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  form: {
    marginBottom: '20px',
  },
  searchInput: {
    padding: '10px',
    width: '300px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  searchButton: {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
  },
  movieCard: {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '10px',
    textAlign: 'center',
    maxWidth: '200px',
  },
  poster: {
    width: '150px',
    borderRadius: '5px',
    marginTop: '10px',
  }
};

export default Search;
