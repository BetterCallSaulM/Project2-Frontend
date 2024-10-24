import React, { useState } from 'react';
import Layout from '../components/Layout';

function EditMovie() {
  const [movieTitle, setMovieTitle] = useState('The Dark Knight');
  const [director, setDirector] = useState('Christopher Nolan');
  const [imageUrl, setImageUrl] = useState('https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg');
  const [description, setDescription] = useState('Batman raises the stakes in his war on crime.');
  const [genre, setGenre] = useState('Action');
  const [year, setYear] = useState(2008);

  const handleEditMovie = (e) => {
    e.preventDefault();
    console.log("Movie Edited:", { movieTitle, director, imageUrl, description, genre, year });
  };

  return (
    <Layout>
      <div className="container my-3">
        <div className="row">
          {/* Edit Movie Form */}
          <div className="col-lg-5 col-md-6 col-sm-8 col-12 bg-dark text-white p-3 rounded shadow-sm mx-auto">
            <h2 className="text-center mb-3 text-warning" style={{ fontSize: '1.5rem' }}>Edit Movie</h2>
            <form onSubmit={handleEditMovie}>
              <div className="mb-2">
                <label className="form-label" style={{ fontSize: '0.9rem' }}>Movie Title</label>
                <input
                  type="text"
                  value={movieTitle}
                  onChange={(e) => setMovieTitle(e.target.value)}
                  className="form-control bg-dark text-white border-secondary"
                  required
                  style={{ fontSize: '0.9rem' }}
                />
              </div>
              <div className="mb-2">
                <label className="form-label" style={{ fontSize: '0.9rem' }}>Director</label>
                <input
                  type="text"
                  value={director}
                  onChange={(e) => setDirector(e.target.value)}
                  className="form-control bg-dark text-white border-secondary"
                  required
                  style={{ fontSize: '0.9rem' }}
                />
              </div>
              <div className="mb-2">
                <label className="form-label" style={{ fontSize: '0.9rem' }}>Image URL</label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="form-control bg-dark text-white border-secondary"
                  required
                  style={{ fontSize: '0.9rem' }}
                />
              </div>
              <div className="mb-2">
                <label className="form-label" style={{ fontSize: '0.9rem' }}>Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control bg-dark text-white border-secondary"
                  required
                  style={{ fontSize: '0.9rem' }}
                />
              </div>
              <div className="mb-2">
                <label className="form-label" style={{ fontSize: '0.9rem' }}>Genre</label>
                <input
                  type="text"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="form-control bg-dark text-white border-secondary"
                  required
                  style={{ fontSize: '0.9rem' }}
                />
              </div>
              <div className="mb-2">
                <label className="form-label" style={{ fontSize: '0.9rem' }}>Year</label>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  className="form-control bg-dark text-white border-secondary"
                  required
                  style={{ fontSize: '0.9rem' }}
                />
              </div>
              <button type="submit" className="btn btn-warning w-100" style={{ fontSize: '0.9rem' }}>Save Changes</button>
            </form>
          </div>

          {/* Current Movie Info */}
          <div className="col-lg-5 col-md-6 col-sm-8 col-12 mt-4 mx-auto">
            <h2 className="text-center mb-3 text-warning" style={{ fontSize: '1.5rem' }}>Current Movie Info</h2>
            <img
              src={imageUrl}
              alt={movieTitle}
              className="img-fluid rounded shadow mb-3"
              style={{ maxHeight: '250px', objectFit: 'cover' }}
            />
            <p className="text-white" style={{ fontSize: '0.9rem' }}><strong>Title:</strong> {movieTitle}</p>
            <p className="text-white" style={{ fontSize: '0.9rem' }}><strong>Director:</strong> {director}</p>
            <p className="text-white" style={{ fontSize: '0.9rem' }}><strong>Genre:</strong> {genre}</p>
            <p className="text-white" style={{ fontSize: '0.9rem' }}><strong>Year:</strong> {year}</p>
            <p className="text-white" style={{ fontSize: '0.9rem' }}><strong>Description:</strong> {description}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default EditMovie;
