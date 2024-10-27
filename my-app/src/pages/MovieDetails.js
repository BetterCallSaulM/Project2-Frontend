import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function MovieDetails() {
  const { title } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState(null);
  const [formValues, setFormValues] = useState({
    title: '',
    director: '',
    genre: '',
    year: '',
    description: '',
    poster: ''
  });
  const [message, setMessage] = useState({ text: '', type: '' });

  const fetchMovie = async () => {
    try {
      const response = await fetch(`/Movies/movie/?name=${title}`);
      if (!response.ok) throw new Error('Failed to fetch movie details');

      const data = await response.json();
      setMovie(data.movie);
      setFormValues({
        title: data.movie.title || '',
        director: data.movie.director || '',
        genre: data.movie.genre || '',
        year: data.movie.year || '',
        description: data.movie.description || '',
        poster: data.movie.poster || ''
      });
    } catch (error) {
      setMessage({ text: 'Error fetching movie details. Please try again later.', type: 'error' });
    }
  };

  // Fetch movie details when the component loads
  useEffect(() => {
    fetchMovie();
  }, [title]);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  // Submit changes to the server
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the request URL with updated fields
    const requestUrl = `/Movies/edit/?name=${title}&` +
      `title=${encodeURIComponent(formValues.title)}&` +
      `director=${encodeURIComponent(formValues.director)}&` +
      `genre=${encodeURIComponent(formValues.genre)}&` +
      `year=${encodeURIComponent(formValues.year)}&` +
      `description=${encodeURIComponent(formValues.description)}&` +
      `poster=${encodeURIComponent(formValues.poster)}`;

    try {
      const response = await fetch(requestUrl, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        const updatedTitle = formValues.title || movie.title;
        alert(`"${updatedTitle}" has been successfully updated.`);
        setMovie((prevMovie) => ({ ...prevMovie, ...formValues }));
        navigate(`/Dashboard`);
      } else {
        throw new Error('Failed to update movie');
      }
    } catch (error) {
      alert('Failed to update movie. Please try again later.');
    }
  };

  if (!movie) {
    return (
      <Layout>
        <div className="container my-5">
          <p className="text-center text-white">Loading movie details...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container my-5 d-flex flex-column flex-md-row align-items-center text-center">
        <div className="mx-md-5 text-center">
          <form onSubmit={handleSubmit}>
            <p><strong>Title: </strong> <input name="title" value={formValues.title} onChange={handleChange} /></p>
            <p><strong>Director: </strong> <input name="director" value={formValues.director} onChange={handleChange} /></p>
            <p><strong>Genre: </strong> <input name="genre" value={formValues.genre} onChange={handleChange} /></p>
            <p><strong>Year: </strong> <input type="number" name="year" value={formValues.year} onChange={handleChange} /></p>
            <p><strong>Description: </strong> <textarea name="description" value={formValues.description} onChange={handleChange} /></p>
            <p><strong>Poster URL: </strong> <input name="poster" value={formValues.poster} onChange={handleChange} /></p>
            <button type="submit" className="btn btn-primary ms-2 w-25">Update</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default MovieDetails;
