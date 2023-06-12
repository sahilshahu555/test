import React from "react";
import { useState } from "react";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/AddMovie";
const App = () => {
  const [state, setState] = useState(true);
  const [name, setName] = useState("Add Movie");
  const changeText = () => {
    setState(!state);
  };
  return (
    <div className="App">
      <h1>React Movies List</h1>
      {/* The below button should have text content as either `Show Movies`or `Add Movie` */}
      <button data-testid="toggle-btn" onClick={changeText}>
        {state ? "Add Movie" : "Show Movies"}
      </button>
      <div data-testid="container">
        {
          /* Add the required components here either AddMovie or MovieList will exist on DOM at a time*/
          state ? <MovieList /> : <AddMovie />
        }
      </div>
    </div>
  );
};

export default App;
