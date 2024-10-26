import React, { useState, useEffect } from 'react';
import Layout, { buttonStyle } from '../components/Layout';  // Correctly import Layout and styles
import { useNavigate } from 'react-router-dom';  // For navigation
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported

function AdminDashboard() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userAdded, setUserAdded] = useState(false); // State for confirmation message

  const [movieTitle, setMovieTitle] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [poster, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [movieAdded, setMovieAdded] = useState(false); // State for confirmation message

  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/Users/'); 
        if (!response.ok) throw new Error('Failed to fetch users');
        
        const data = await response.json();
        setUsers(data);
        console.log(users);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('/Movies/'); 
        if (!response.ok) throw new Error('Failed to fetch movies');
        
        const data = await response.json();
        setMovies(data);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const deleteUser = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await fetch(`/Users/${id}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) throw new Error('Failed to delete user');
  
        // Update the local state to reflect the deletion
        setUsers(users.filter(user => user.user_id !== id));
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    }
  };

  const deleteMovieFromUser = (userId, movieId) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        return { ...user, watchlist: user.watchlist.filter(movie => movie.id !== movieId) };
      }
      return user;
    }));
  };

  const deleteMovie = async (movieId) => {
    if (window.confirm("Are you sure you want to delete this movie?")) {
      try {
        const response = await fetch(`/Movies/${movieId}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) throw new Error('Failed to delete movie');
  
        // Update the local state to reflect the deletion
        setMovies(movies.filter(movie => movie.movie_id !== movieId));
      } catch (error) {
        console.error('Error deleting movie:', error);
      }
    }
  };

  const addMovie = () => {
    navigate('/add-movie');
  };

  const editMovie = (movieId) => {
    navigate(`/edit-movie/${movieId}`);
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    const newUser = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch('/Users/', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        console.log("User Added")
      } else {
        console.log('Failed to add user.'); 
      }
    } catch (error) {
      console.log('An error occurred while adding the user.'); 
    }

    console.log("User Added:", newUser);
    // Display confirmation message
    setUserAdded(true);
    // Clear form after submission
    setUsername('');
    setPassword('');
  };

  const handleAddMovie = async (e) => {
    e.preventDefault();
    const newMovie = {
      title: movieTitle,
      year: year,
      director: director,
      poster: poster,
      description: description,
      genre: genre,
    };

    try {
      const response = await fetch('/Movies/', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      });

      if (response.ok) {
        console.log("Movie Logged")
      } else {
        console.log('Failed to add movie.'); 
      }
    } catch (error) {
      console.log('An error occurred while adding the movie.'); 
    }

    console.log("Movie Added:", newMovie);
    // Display confirmation message
    setMovieAdded(true);
    // Clear form after submission
    setMovieTitle('');
    setYear('');
    setDirector('');
    setImageUrl('');
    setDescription('');
    setGenre('');
  };

  useEffect(() => {
    console.log('Use effect')
    let is_admin = sessionStorage.getItem('is_admin');
    
    if (is_admin === 'false') {
      navigate('/dashboard');
    } else if (is_admin === 'null') {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <Layout>
      <div className="container my-5 d-flex flex-column align-items-center">
        <h1 className="text-center mb-4">Admin Dashboard</h1>
        <p className="text-center mb-4">Manage users, movies, and watchlists.</p>

        {/* Add New Movie Button */}
        <div className="d-flex justify-content-center mb-4">
          <button className="btn btn-primary" onClick={addMovie} style={styles.buttonGold}>Add New Movie</button>
        </div>

        {/* Users Table */}
        <div className="d-flex justify-content-center w-100 mb-4">
          <div className="table-responsive" style={{ maxWidth: '900px' }}>
            <h2 className="text-center">Users</h2>
            <table className="table table-dark table-bordered text-center mx-auto" style={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>ID</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.user_id}>
                    <td>{user.username}</td>
                    <td>{user.is_admin ? 'Yes' : 'No'}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.user_id)} style={styles.buttonRed}>Delete User</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Watchlists */}
        <div className="w-100">
          <h2 className="text-center">Movie Watchlists</h2>
          {users.map(user => (
            <div key={user.id} className="d-flex justify-content-center mb-4">
              <div className="table-responsive" style={{ maxWidth: '700px' }}>
                <h3 className="text-center">{user.username}'s Watchlist</h3>
                {user.watchlist && user.watchlist.length > 0 ? (
                  <table className="table table-dark table-bordered text-center mx-auto" style={styles.table}>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Movie Title</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {user.watchlist.map(movie => (
                        <tr key={movie.id}>
                          <td>{movie.id}</td>
                          <td>{movie.title}</td>
                          <td>
                            <button className="btn btn-danger btn-sm" onClick={() => deleteMovieFromUser(user.id, movie.id)} style={styles.buttonRed}>Delete Movie</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className="text-center">No movies in the watchlist.</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* All Movies Table */}
        <div className="d-flex justify-content-center w-100">
          <div className="table-responsive" style={{ maxWidth: '900px' }}>
            <h2 className="text-center">All Movies</h2>
            <table className="table table-dark table-bordered text-center mx-auto" style={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Director</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {movies.map(movie => (
                  <tr key={movie.id}>
                    <td>{movie.id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.director}</td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => editMovie(movie.id)} style={styles.buttonGold}>Edit</button>
                      <button className="btn btn-danger btn-sm" onClick={() => deleteMovie(movie.movie_id)} style={styles.buttonRed}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add User */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-dark text-white p-4 rounded shadow-sm">
            <h1 className="text-center mb-4 text-warning">Add User</h1>

            {userAdded && (
              <div className="alert alert-success text-center">
                User successfully added to your database!
              </div>
            )}

            <form onSubmit={handleAddUser}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <button type="submit" className="btn btn-warning w-100 mt-3">Add User</button>
            </form>
          </div>
        </div>
      </div>

      {/* Add Movie */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-dark text-white p-4 rounded shadow-sm">
            <h1 className="text-center mb-4 text-warning">Add Movie to Movie List</h1>

            {movieAdded && (
              <div className="alert alert-success text-center">
                Movie successfully added to your list!
              </div>
            )}

            <form onSubmit={handleAddMovie}>
              <div className="mb-3">
                <label className="form-label">Movie Title</label>
                <input
                  type="text"
                  value={movieTitle}
                  onChange={(e) => setMovieTitle(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Year</label>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Directors</label>
                <input
                  type="text"
                  value={director}
                  onChange={(e) => setDirector(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="form-control bg-dark text-white border-secondary"
                />
                </div>
              <div className="mb-3">
                <label className="form-label">Genre</label>
                <input
                  type="text"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
                <div className="mb-3">
                  <label className="form-label">Image URL</label>
                  <input
                    type="text"
                    value={poster}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                    className="form-control bg-dark text-white border-secondary"
                  />
                </div>
              <button type="submit" className="btn btn-warning w-100 mt-3">Add Movie</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// IMDb-inspired styles with black grid lines
const styles = {
  buttonGold: {
    backgroundColor: '#FFD700',
    color: '#000',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  buttonRed: {
    backgroundColor: '#6c757d', // Darker red than default Bootstrap
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  table: {
    backgroundColor: '#2c2c2c',  // Dark background
    color: '#FFF',  // White text for readability
    borderColor: '#000',  // Black grid lines
  }
};

export default AdminDashboard;
