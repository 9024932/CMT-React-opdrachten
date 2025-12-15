import React, { useState } from 'react'; // ✅ Import useState
import Header from './components/Header';
import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';

import './App.css';

function App() {
  const [movies, setMovies] = useState([]); // initialize with empty array

  const addMovie = (newMovie) => {
    if (movies.includes(newMovie)) { // alert if movie already exists
      alert('This movie is already in your favorites!');
      return;
    }
    setMovies([...movies, newMovie]); // use setMovies, not setMovie
  };

  const deleteMovie = (movieToDelete) => {
    setMovies(movies.filter((movie) => movie !== movieToDelete));
  };

  return (
    <section className='container'>
      <Header />
      <AddMovie onAdd={addMovie} />
      <MovieList movies={movies} onDelete={deleteMovie} />
    </section>
  );
}

export default App;
