import React, { useState } from 'react';
import Layout from '../components/Layout'; 

function AddMovie() {
  const [movieName, setMovieName] = useState('');

  const handleAddMovie = (e) => {
    e.preventDefault();
    // Logic to add a movie to the wishlist
    console.log("Movie Added:", movieName);
  };

  return (
    <Layout>
      <h1>Add Movie to movie list</h1>
      <form onSubmit={handleAddMovie}>
        <div>
          <label>Movie Name</label>
          <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} required />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </Layout>
  );
}

export default AddMovie;
