import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSingleRestaurant } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { GET_SINGLE_RESTAURANT_FAILURE, GET_SINGLE_RESTAURANT_SUCCESS } from '../Redux/actionTypes';

const RestaurantPage = () => {
  const [show,setShow]=useState(false)
  const { id } = useParams()
  const dispatch = useDispatch();
  const { restaurant } = useSelector(store => store);
  useEffect(() => {
    getSingleRestaurant(id)
      .then(res => { dispatch({ type: GET_SINGLE_RESTAURANT_SUCCESS, payload: res.data }) })
      .catch(err => dispatch({ type: GET_SINGLE_RESTAURANT_FAILURE }));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="restaurant_single_wrapper">
      {/* Show success message here if restaurant booked successfully */}
      {show ? <h1 className='success_msg'>Restaurant Booked Successfully !!</h1> : null}
      {/* Create Restaurant Details Card Here */}
      <div className="restaurant_single_card">
        <img className='image' src={restaurant.image} alt='HotelImage' />
        <div>
          <h2 className='name'>Name: {restaurant.name}</h2>
          <h3 className='type'>Type: {restaurant.type}</h3>
          <p className='rating'>Rating: {restaurant.rating}</p>
          <p className='votes'>Votes: {restaurant.number_of_votes}</p>
          <p className='price'>Price: {restaurant.price_starts_from}</p>
          { !show ?
            <button onClick={()=>{setShow(true)}}
              className="book_now_btn" 
              style={{backgroundColor:'orange', color:'white'}}
            >
              Book Now!
            </button>
            : 
            <Link to='/' className="go_back">Go To Home</Link> 
          }
        </div>
      </div>
    </div>
  );
};

export default RestaurantPage;
