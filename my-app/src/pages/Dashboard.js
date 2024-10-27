import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';  // Importing the Layout
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation

function Dashboard() {
  const navigate = useNavigate();
  const [userLists, setUserLists] = useState({Watchlists : []});
  const [topMovies, setTopMovies] = useState([]);
  const [selectedWatchlist, setSelectedWatchlist] = useState("");

  const user_id = sessionStorage.getItem('user_id');

  const fetchWatchlists = async () => {
    try {
      const requestUrl = `/Watchlists/lists/?user=${user_id}`;
      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      setUserLists(data);
    } catch (error) {
      alert(error);
    }
  }

  const addToWatchList = async (id) => {
    try {
      const requestUrl = `/WatchlistMovies/add/?movie=${id}&watchlist=${selectedWatchlist}&status=Not%20Watched`;
      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log(data);
      setUserLists(data);
    } catch (error) {
      alert(error);
    }
  }

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
    fetchWatchlists();
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
            <form>
              <select
                value={selectedWatchlist}
                onChange={(e) => setSelectedWatchlist(e.target.value)}
              >
                <option value="">Select a watchlist</option>
                {userLists.Watchlists && userLists.Watchlists.length > 0 ? (
                  userLists.Watchlists.map((watchlist) => (
                    <option key={watchlist.watchlist_id} value={watchlist.watchlist_id}>
                      {watchlist.watchlist_name}
                    </option>
                  ))
                ) : (
                  <option disabled>No watchlists available</option>
                )}
              </select>
              <button
                className="btn btn-warning mt-1 mb-5 w-80"
                onClick={(e) => {
                  e.preventDefault(); // Prevent form submission
                  addToWatchList(movie.movie_id);
                }}
                disabled={!selectedWatchlist} // Disable button if no watchlist is selected
              >
                Add to Watchlist
              </button>
            </form>
          </div>
        ))}
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
