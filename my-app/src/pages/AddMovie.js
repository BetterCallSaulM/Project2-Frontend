import React, { useState } from 'react';
import Layout from '../components/Layout'; 

function AddMovie() {
  const [movieTitle, setMovieTitle] = useState('');
  const [directors, setDirectors] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');

  const handleAddMovie = (e) => {
    e.preventDefault();
    // Logic to add the movie to the wishlist or backend
    const newMovie = {
      title: movieTitle,
      directors,
      image: imageUrl,
      description,
      genre,
    };
    console.log("Movie Added:", newMovie);
    // You can send `newMovie` to the backend or handle it further here
  };

  return (
    <Layout>
      <h1>Add Movie to movie list</h1>
      <form onSubmit={handleAddMovie}>
        <div>
          <label>Movie Title</label>
          <input 
            type="text" 
            value={movieTitle} 
            onChange={(e) => setMovieTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Directors</label>
          <input 
            type="text" 
            value={directors} 
            onChange={(e) => setDirectors(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Image URL</label>
          <input 
            type="text" 
            value={imageUrl} 
            onChange={(e) => setImageUrl(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Genre</label>
          <input 
            type="text" 
            value={genre} 
            onChange={(e) => setGenre(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </Layout>
  );
}

export default AddMovie;
