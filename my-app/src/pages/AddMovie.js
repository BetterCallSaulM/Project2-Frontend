import React, { useState } from 'react';
import Layout from '../components/Layout';

function AddMovie() {
  const [movieTitle, setMovieTitle] = useState('');
  const [year, setYear] = useState('');
  const [director, setDirector] = useState('');
  const [poster, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [movieAdded, setMovieAdded] = useState(false); // State for confirmation message



  
  const handleAddMovie = async (e) => {
    e.preventDefault();
    const newMovie = {
      title: movieTitle,
      year: year,
      director: director,
      poster: poster,
      description: description,
      genre: genre,
    };

    try {
      const response = await fetch('/Movies/', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMovie),
      });

      if (response.ok) {
        console.log("Movie Logged")
      } else {
        console.log('Failed to add movie.'); 
      }
    } catch (error) {
      console.log('An error occurred while adding the movie.'); 
    }

    console.log("Movie Added:", newMovie);
    // Display confirmation message
    setMovieAdded(true);
    // Clear form after submission
    setMovieTitle('');
    setYear('');
    setDirector('');
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
                <label className="form-label">Year</label>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  required
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Directors</label>
                <input
                  type="text"
                  value={director}
                  onChange={(e) => setDirector(e.target.value)}
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
                <div className="mb-3">
                  <label className="form-label">Image URL</label>
                  <input
                    type="text"
                    value={poster}
                    onChange={(e) => setImageUrl(e.target.value)}
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
