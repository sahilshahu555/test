import React, {useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const SingleRoom = () => {
  const {id} = useParams();
  const [room, setRoom] = useState({});
  const [show,setShow] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/rooms/${id}`);
      const data = await response.json();
      setRoom(data);
    })()
  }, [id]);

  return <div data-testid="SingleRoom">
  <div data-testid="room-info">
  <h2>{room?.name}</h2>
  <img src={room?.image} alt={room?.image}/>
  <p>{room?.description}</p>
  <h3>{room?.bathroom}</h3>
  <h3>Capacity:{room?.capacity}</h3>
  <h3>Size : {room?.size}</h3>
  <h3>Price : {room?.price}</h3>
  <h3>Amenities.</h3>
  <ul>
   {room?.amenities && room.amenities.map((item, index) => <li key={index}>{item}</li>)} 
  </ul>
  </div>
  {show ? <button onClick={() => setShow((pre) => !pre)}>Book Now</button> : <><h3>Booking Successful goto <Link to="/dashboard">Dashboard</Link></h3></>}
  </div>;
};
