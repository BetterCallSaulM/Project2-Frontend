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
      <div style={styles.container}>
        <h1 style={styles.header}>Add Movie to Movie List</h1>
        <form onSubmit={handleAddMovie} style={styles.form}>
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
            <label style={styles.label}>Directors</label>
            <input 
              type="text" 
              value={directors} 
              onChange={(e) => setDirectors(e.target.value)} 
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
              style={styles.input}
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
          <button type="submit" style={styles.updateButton}>Add Movie</button>
        </form>
      </div>
    </Layout>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
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
  updateButton: {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
    width: '100%',
  },
};

export default AddMovie;
