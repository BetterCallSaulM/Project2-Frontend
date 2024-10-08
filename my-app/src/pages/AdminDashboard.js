import React, { useState } from 'react';
import Layout from '../components/Layout'; // Adjust the path to your Layout component
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation

function AdminDashboard() {
  const navigate = useNavigate(); // To navigate to the Add Movie page

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

  // Delete user by ID
  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  // Delete a movie from a user's watchlist
  const deleteMovieFromUser = (userId, movieId) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        return { ...user, watchlist: user.watchlist.filter(movie => movie.id !== movieId) };
      }
      return user;
    }));
  };

  // Delete movie from the main movie list
  const deleteMovie = (movieId) => {
    setMovies(movies.filter(movie => movie.id !== movieId));
    setUsers(users.map(user => ({
      ...user,
      watchlist: user.watchlist.filter(movie => movie.id !== movieId)
    })));
  };

  // Navigate to Add Movie page
  const addMovie = () => {
    navigate('/add-movie'); // Adjust to your actual route for adding a movie
  };

  // Edit movie (you could navigate to an edit page)
  const editMovie = (movieId) => {
    navigate(`/edit-movie/${movieId}`); // Adjust to your actual edit movie route
  };

  return (
    <Layout>
      <div style={styles.container}>
        <h1>Admin Dashboard</h1>
        <p>Manage users, movies, and wishlists.</p>

        {/* Button to link to Add Movie page */}
        <button style={styles.addButton} onClick={addMovie}>Add New Movie</button>

        {/* Users Section */}
        <h2>Users</h2>
        <table style={styles.table}>
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
                  <button style={styles.deleteButton} onClick={() => deleteUser(user.id)}>Delete User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Watchlists per User */}
        <h2>Movie Watchlists</h2>
        {users.map(user => (
          <div key={user.id}>
            <h3>{user.name}'s Watchlist</h3>
            {user.watchlist.length > 0 ? (
              <table style={styles.table}>
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
                        <button style={styles.deleteButton} onClick={() => deleteMovieFromUser(user.id, movie.id)}>Delete Movie</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No movies in the watchlist.</p>
            )}
          </div>
        ))}

        {/* Admin Movie Management Section */}
        <h2>All Movies</h2>
        <table style={styles.table}>
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
                  <button style={styles.editButton} onClick={() => editMovie(movie.id)}>Edit</button>
                  <button style={styles.deleteButton} onClick={() => deleteMovie(movie.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  table: {
    width: '40%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
  },
  addButton: {
    padding: '10px 15px',
    marginBottom: '20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    padding: '5px 5px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  editButton: {
    padding: '5px 10px',
    marginRight: '10px',
    backgroundColor: '#2196F3',
    color: 'white',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
  th: {
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
    padding: '100px',
  },
  td: {
    padding: '3px',
    textAlign: 'left',
  },
};

export default AdminDashboard;
