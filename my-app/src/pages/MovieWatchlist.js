import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

function MovieWatchlist() {
  const [userLists, setUserLists] = useState({Watchlists : []});
  const [allMovies, setAllMovies] = useState(null);
  const [watchlistMovies, setWatchlistMovies] = useState([]);
  const [listName, setListName] = useState('');

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
      setUserLists(data);
    } catch (error) {
      alert(error);
    }
  }

  const fetchAllMovies = async () => {
    try {
      const requestUrl = `/Movies/`;
      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setAllMovies(data);
    } catch (error) {
      alert(error);
    }
  }

  const fetchWatchlistMovies = async () => {
    const movies = []; 
    try {
      for (let item of userLists.Watchlists) {
        const requestUrl = `/WatchlistMovies/movies/?watchlist=${item.watchlist_id}`;
        const response = await fetch(requestUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();

        if (data.Movies) {
          movies.push(data.Movies)
        }
      }
      setWatchlistMovies(movies);
    } catch (error) {
      alert(error);
    }
  }

  const createWatchList = async () => {
    try {
      const requestUrl = `/Watchlists/newlist/?name=${listName}&user=${user_id}`;
      const response = await fetch(requestUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setListName('');
    } catch (error) {
      // alert(error);
    }
  }

  const deleteWatchList = async (id) => {
    try {
      const requestUrl = `/Watchlists/delete/?watchlist=${id}`;
      const response = await fetch(requestUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
    } catch (error) {
      // alert(error);
    }
  }

  const deleteFromWatchList = async (id) => {
    try {
      const requestUrl = `/WatchlistMovies/delete/?id=${id}`;
      const response = await fetch(requestUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
    } catch (error) {
      // alert(error);
    }
  }

  useEffect(() => {
    fetchAllMovies();
    fetchWatchlists();
  }, []);

  useEffect(() => {
    if (userLists.Watchlists.length > 0) {
      fetchWatchlistMovies();
    }
  }, [userLists]);

  const getWatchlistName = (watchlistId) => {
    const watchlist = userLists.Watchlists.find((wl) => wl.watchlist_id === watchlistId);
    return watchlist? watchlist.watchlist_name : 'Unknown Watchlist';
  };

  const getMovieTitle = (movieId) => {
    const movie = allMovies.find((mv) => mv.movie_id === movieId);
    return movie ? movie.title : 'Unknown Movie';
  };

  return (
    <Layout>
      <div className="container mt-5 d-flex flex-column align-items-center">
        <h2 className="mb-4 text-center text-warning">Manage Your Watchlist</h2>

        <div className='mb-4'>
          <form>
            <p>Watchlist Name: <input onChange={(e) => setListName(e.target.value)}></input></p>
            <button className="btn btn-warning mt-1 w-100" onClick={createWatchList}>Add Watchlist</button>
          </form>
        </div>

        <div className="container mt-5 d-flex flex-column align-items-center">
          {userLists.Watchlists && userLists.Watchlists.length > 0 ? (
            watchlistMovies.map((watchlistGroup, index) => (
              <div key={index}>
                <h3>{getWatchlistName(userLists.Watchlists[index].watchlist_id)}</h3>
                {watchlistGroup.length > 0 ? (
                  <div className="mb-5 mt-2">
                    {watchlistGroup.map((movie) => (
                      <div key={movie.id}>
                        <p>Movie: {getMovieTitle(movie.movie_id)}</p>
                        <p>Status: {movie.status}</p>
                        <form onSubmit={(e) => { deleteFromWatchList(movie.id); }}>
                          <button className="btn btn-warning mt-1 mb-5 w-80" type="submit">Remove Movie</button>
                      </form>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p>No movies in this watchlist.</p>
                )}
                <form>
                  <button className="btn btn-warning mb-5 w-100" onClick={() => deleteWatchList(userLists.Watchlists[index].watchlist_id)}>Delete Watchlist</button>
                </form>
              </div>
            ))
          ) : (
            <p>No watchlists available. Please create a new watchlist!</p>
          )}
        </div>
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
