import React from 'react';
import Layout from '../components/Layout'; 
function MovieWatchlist() {
  // This will fetch and display the user's movie wishlist
  const movies = [
    { id: 1, name: "The Matrix" },
    { id: 2, name: "Inception" }
  ];

  return (
    <Layout>
      <h1>My Movie Wishlist</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.name}</li>
        ))}
      </ul>
    </Layout>
  );
}

export default MovieWatchlist;
