import React, { useState } from 'react';
import Layout from '../components/Layout'; 
function EditMovie() {
  const [movieName, setMovieName] = useState('Inception');

  const handleEditMovie = (e) => {
    e.preventDefault();
    // Logic to edit movie details
    console.log("Movie Edited:", movieName);
  };

  return (
    <Layout>
      <h1>Edit Movie</h1>
      <form onSubmit={handleEditMovie}>
        <div>
          <label>Movie Name</label>
          <input type="text" value={movieName} onChange={(e) => setMovieName(e.target.value)} required />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </Layout>
  );
}

export default EditMovie;
