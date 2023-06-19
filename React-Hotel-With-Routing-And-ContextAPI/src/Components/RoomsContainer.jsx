import React from "react";
import { Link } from "react-router-dom";

export const RoomsContainer = ({ rooms }) => {
  return (
    <div data-testid="rooms-container">
      {rooms.map((item) => (
        <div>
          <h2>{item.name}</h2>
          <img src={item.image} alt={item.image} />
          <p>{item.description}</p>
          <Link to={`/dashboard/${item.id}`}>
            <button>View Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
