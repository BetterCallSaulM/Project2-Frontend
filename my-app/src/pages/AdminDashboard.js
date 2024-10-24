import React, { useState } from 'react';
import Layout, { buttonStyle } from '../components/Layout';  // Correctly import Layout and styles
import { useNavigate } from 'react-router-dom';  // For navigation
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap is imported

function AdminDashboard() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    { id: 1, name: 'Luis Ruiz', email: 'luis.ruiz@example.com', watchlist: [{ id: 101, title: 'The Matrix' }, { id: 102, title: 'Inception' }] },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', watchlist: [{ id: 103, title: 'The Dark Knight' }] },
    { id: 3, name: 'John Smith', email: 'john.smith@example.com', watchlist: [{ id: 104, title: 'Pulp Fiction' }, { id: 105, title: 'Interstellar' }] }
  ]);

  const [movies, setMovies] = useState([
    { id: 101, title: 'The Matrix', director: 'The Wachowskis' },
    { id: 102, title: 'Inception', director: 'Christopher Nolan' },
    { id: 103, title: 'The Dark Knight', director: 'Christopher Nolan' },
    { id: 104, title: 'Pulp Fiction', director: 'Quentin Tarantino' },
    { id: 105, title: 'Interstellar', director: 'Christopher Nolan' }
  ]);

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const deleteMovieFromUser = (userId, movieId) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        return { ...user, watchlist: user.watchlist.filter(movie => movie.id !== movieId) };
      }
      return user;
    }));
  };

  const deleteMovie = (movieId) => {
    setMovies(movies.filter(movie => movie.id !== movieId));
    setUsers(users.map(user => ({
      ...user,
      watchlist: user.watchlist.filter(movie => movie.id !== movieId)
    })));
  };

  const addMovie = () => {
    navigate('/add-movie');
  };

  const editMovie = (movieId) => {
    navigate(`/edit-movie/${movieId}`);
  };

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
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => deleteUser(user.id)} style={styles.buttonRed}>Delete User</button>
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
                <h3 className="text-center">{user.name}'s Watchlist</h3>
                {user.watchlist.length > 0 ? (
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
                      <button className="btn btn-danger btn-sm" onClick={() => deleteMovie(movie.id)} style={styles.buttonRed}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
