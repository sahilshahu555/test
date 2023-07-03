import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ rest }) => {
  let navigate = useNavigate();  
  let { id, image, type, name, number_of_votes, price_starts_from ,rating } = rest;

  return <div className='restaurant_card' onClick={()=>{navigate(`/restaurant/${id}`)}}>
    <img className='image' src={image} alt='HotelImage' />
    <div>
      <h2 className='name'>Name: {name}</h2>
      <h3 className='type'>Type: {type}</h3>
      <p className='votes'>Votes: {number_of_votes}</p>
      <p className='price'>Price: {price_starts_from}</p>
      <p className='rating'>Rating: {rating}</p>
    </div>
  </div>;
};

export default RestaurantCard;
