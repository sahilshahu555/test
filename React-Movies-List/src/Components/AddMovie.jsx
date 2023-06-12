import React from "react";
import { useState } from "react";
const AddMovie = () => {
  const [inputdata, setInputdat] = useState({
    title: "",
    year: "",
    imdbID: "",
    type: "",
    rating: "",
    poster: "",
  });

  const handleChange = (e) => {
    setInputdat({ ...inputdata, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const PostData = {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(inputdata),
    };

    fetch(
      `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`,
      PostData
    )
      .then((res) => res.json())
      .then((val) => console.log(val));
  };

  return (
    <div data-testid="add-movie">
      <h1>Add Movie</h1>
      <form
        data-testid="add-movie-form"
        style={{ display: "grid", width: "25%" }}
        onSubmit={handleSubmit}
      >
        <label>Title:</label>
        <input type="text" name="title" onChange={handleChange} />
        <label>Year:</label>
        <input type="text" name="year" onChange={handleChange} />
        <label>IMDB ID:</label>
        <input type="text" name="imdbID" onChange={handleChange} />
        <label>Type:</label>
        <select name="type" onChange={handleChange}>
          <option>Select a type</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>

        <label>Rating:</label>
        <input type="text" name="rating" onChange={handleChange} />
        <label>Poster:</label>
        <input type="url" name="poster" onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMovie;
