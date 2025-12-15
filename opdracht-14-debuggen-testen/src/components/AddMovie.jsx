import React, { useState } from 'react'; // ✅ Import useState

function AddMovie({ onAdd }) {
  const [movieName, setMovieName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!movieName) return;
    onAdd(movieName);
    setMovieName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        placeholder="Add a movie"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddMovie;
