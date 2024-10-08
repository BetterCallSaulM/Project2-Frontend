import React, { useState } from 'react';
import Layout from '../components/Layout'; 

function EditMovie() {
  // Prepopulate with "The Dark Knight" data
  const [movieTitle, setMovieTitle] = useState('The Dark Knight');
  const [director, setDirector] = useState('Christopher Nolan');
  const [imageUrl, setImageUrl] = useState('https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg');
  const [description, setDescription] = useState('Batman raises the stakes in his war on crime.');
  const [genre, setGenre] = useState('Action');
  const [year, setYear] = useState(2008);

  const [savedMovie, setSavedMovie] = useState({
    title: movieTitle,
    director,
    image: imageUrl,
    description,
    genre,
    year,
  });

  const handleEditMovie = (e) => {
    e.preventDefault();
    // Update the savedMovie state when the form is submitted
    setSavedMovie({
      title: movieTitle,
      director,
      image: imageUrl,
      description,
      genre,
      year,
    });
    console.log("Movie Edited:", savedMovie);
  };

  return (
    <Layout>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Form for editing movie */}
        <div style={{ flex: 1 }}>
          <h1>Edit Movie</h1>
          <form onSubmit={handleEditMovie}>
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
              <label>Director</label>
              <input 
                type="text" 
                value={director} 
                onChange={(e) => setDirector(e.target.value)} 
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
            <div>
              <label>Year</label>
              <input 
                type="number" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
                required 
              />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </div>

        {/* Display current movie info */}
        <div style={{ flex: 1, marginLeft: '20px' }}>
          <h2>Current Movie Info</h2>
          <img 
            src={savedMovie.image} 
            alt={savedMovie.title} 
            style={{ width: '200px', marginBottom: '20px' }}
          />
          <p><strong>Title:</strong> {savedMovie.title}</p>
          <p><strong>Director:</strong> {savedMovie.director}</p>
          <p><strong>Genre:</strong> {savedMovie.genre}</p>
          <p><strong>Year:</strong> {savedMovie.year}</p>
          <p><strong>Description:</strong> {savedMovie.description}</p>
        </div>
      </div>
    </Layout>
  );
}

export default EditMovie;
