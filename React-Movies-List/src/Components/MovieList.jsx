import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const [data, setData] = useState([]);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const handleSort = (e) => {
    setSort(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const fetchData = () => {
    let url = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/movies`;
    if (sort === "Oldest first") {
      url += "?_sort=year&_order=asc";
    } else if (sort === "Newest first") {
      url += "?_sort=year&_order=desc";
    }

    if (filter === "movie") {
      sort ? (url += "&type=movie") : (url += "?type=movie");
    } else if (filter === "series") {
      sort ? (url += "&type=series") : (url += "?type=series");
    } else if (filter === "game") {
      sort ? (url += "&type=game") : (url += "?type=game");
    }

    fetch(url)
      .then((res) => res.json())
      .then((val) => setData(val));
  };

  useEffect(() => {
    fetchData();
  }, [sort, filter, data]);

  return (
    <div data-testid="movie-list">
      <h1>Movies List</h1>
      <div>
        <label>Sort By Year</label>
        <select data-testid="sort" onChange={handleSort}>
          <option>--</option>
          <option>Oldest first</option>
          <option>Newest first</option>
        </select>
      </div>
      <div>
        <label>Filter By Type</label>
        <select data-testid="filter" onChange={handleFilter}>
          <option>--</option>
          <option value="movie">Movie</option>
          <option value="series">Series</option>
          <option value="game">Game</option>
        </select>
      </div>
      <div data-testid="movie-container">
        {
          /* render all the movies data with the help of MovieCard component here */
          data.map((elem, index) => (
            <MovieCard elem={elem} key={index} />
          ))
        }
      </div>
    </div>
  );
};

export default MovieList;
