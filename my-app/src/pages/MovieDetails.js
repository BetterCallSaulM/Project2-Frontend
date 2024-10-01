import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout'; 
function MovieDetails() {
  const { id } = useParams();  // Get the movie ID from URL

  // Fetch movie details based on ID (placeholder details for now)
  const movie = { id, name: "The Matrix", description: "A sci-fi movie about simulated reality." };

  return (
    <Layout>
      <h1>{movie.name}</h1>
      <p>{movie.description}</p>
    </Layout>
  );
}

export default MovieDetails;
