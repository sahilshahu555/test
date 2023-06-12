import React from "react";

const MovieCard = ({ elem }) => {
  return (
    <div data-testid="movie-card">
      <div>
        <img src={elem.poster} alt="##" />
      </div>
      <h2>{elem.title}</h2>
      <h4>Year: {elem.year}</h4>
      <h6>ID: {elem.imdbID}</h6>
      <p>Type: {elem.type}</p>
      <p>Rating: {elem.rating}</p>
    </div>
  );
};

export default MovieCard;
