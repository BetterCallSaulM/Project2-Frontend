import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout'; // Ensure you have Layout component, or remove it if unnecessary

function Search() {
  const { id } = useParams(); // Optional dynamic id from URL, if provided
  const [searchTerm, setSearchTerm] = useState(''); // Store search input

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    if (id) {
      console.log("Dynamic ID:", id);
    }
  };

  return (
    <Layout>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term as user types
          placeholder="Enter movie name..."
        />
        <button type="submit">Search</button>
      </form>
    </Layout>
  );
}

export default Search;
