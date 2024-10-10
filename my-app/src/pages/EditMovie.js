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
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <h1>Edit Movie</h1>
          <form onSubmit={handleEditMovie} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Movie Title</label>
              <input 
                type="text" 
                value={movieTitle} 
                onChange={(e) => setMovieTitle(e.target.value)} 
                required 
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Director</label>
              <input 
                type="text" 
                value={director} 
                onChange={(e) => setDirector(e.target.value)} 
                required 
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Image URL</label>
              <input 
                type="text" 
                value={imageUrl} 
                onChange={(e) => setImageUrl(e.target.value)} 
                required 
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Description</label>
              <textarea 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
                style={styles.textarea}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Genre</label>
              <input 
                type="text" 
                value={genre} 
                onChange={(e) => setGenre(e.target.value)} 
                required 
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Year</label>
              <input 
                type="number" 
                value={year} 
                onChange={(e) => setYear(e.target.value)} 
                required 
                style={styles.input}
              />
            </div>
            <button type="submit" style={styles.button}>Save Changes</button>
          </form>
        </div>

        <div style={styles.movieDetails}>
          <h2>Current Movie Info</h2>
          <img 
            src={savedMovie.image} 
            alt={savedMovie.title} 
            style={styles.poster}
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

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px',
    padding: '20px',
  },
  formContainer: {
    flex: 1,
    maxWidth: '500px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '5px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
  },
  textarea: {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    height: '100px',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
    width: '100%',
  },
  movieDetails: {
    flex: 1,
    maxWidth: '500px',
  },
  poster: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '20px',
  },
};

export default EditMovie;
