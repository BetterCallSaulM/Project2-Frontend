import React, { useState } from 'react';
import Layout from '../components/Layout';

function AddMovie() {
  const [movieTitle, setMovieTitle] = useState('');
  const [directors, setDirectors] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [movieAdded, setMovieAdded] = useState(false); // State for confirmation message

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
    // Display confirmation message
    setMovieAdded(true);
    // Clear form after submission
    setMovieTitle('');
    setDirectors('');
    setImageUrl('');
    setDescription('');
    setGenre('');
  };

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-dark text-white p-4 rounded shadow-sm">
            <h1 className="text-center mb-4 text-warning">Add Movie to Movie List</h1>

            {movieAdded && (
              <div className="alert alert-success text-center">
                Movie successfully added to your list!
              </div>
            )}

            <form onSubmit={handleAddMovie}>
              <div className="mb-3">
                <label className="form-label">Movie Title</label>
                <input
                  type="text"
                  value={movieTitle}
                  onChange={(e) => setMovieTitle(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Directors</label>
                <input
                  type="text"
                  value={directors}
                  onChange={(e) => setDirectors(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Image URL</label>
                <input
                  type="text"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Genre</label>
                <input
                  type="text"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <button type="submit" className="btn btn-warning w-100 mt-3">Add Movie</button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddMovie;
