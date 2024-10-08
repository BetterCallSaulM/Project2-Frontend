import React, { useState } from 'react';
import Layout, { buttonStyle } from '../components/Layout';  // Correctly import Layout and styles
import { useNavigate } from 'react-router-dom';  // For navigation

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
      <div>
        <h1>Admin Dashboard</h1>
        <p>Manage users, movies, and watchlists.</p>

        <button style={buttonStyle} onClick={addMovie}>Add New Movie</button>

        <h2>Users</h2>
        <table>
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
                  <button style={buttonStyle} onClick={() => deleteUser(user.id)}>Delete User</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>Movie Watchlists</h2>
        {users.map(user => (
          <div key={user.id}>
            <h3>{user.name}'s Watchlist</h3>
            {user.watchlist.length > 0 ? (
              <table>
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
                        <button style={buttonStyle} onClick={() => deleteMovieFromUser(user.id, movie.id)}>Delete Movie</button>
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

        <h2>All Movies</h2>
        <table>
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
                  <button style={buttonStyle} onClick={() => editMovie(movie.id)}>Edit</button>
                  <button style={buttonStyle} onClick={() => deleteMovie(movie.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default AdminDashboard;
