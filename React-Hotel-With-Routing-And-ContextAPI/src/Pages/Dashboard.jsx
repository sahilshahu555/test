import React, {useContext, useEffect, useState} from "react";
import { AuthContext } from "../Context/AuthContext";
import { Loader } from "../Components/Loader";
import { RoomsContainer } from "../Components/RoomsContainer";

export const Dashboard=()=>{

  const [rooms, setRooms] = useState([]);
  const {authState, logoutUser} = useContext(AuthContext);


  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/rooms`);
      const data = await response.json();
      setRooms(data);
    })()
  }, [])

  return (
    <div data-testid="dashboard-component">
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div data-testid="room-container">
        {rooms.length > 0 ? <RoomsContainer rooms={rooms}/> : <Loader/>}
      </div>
    </div>
  );
}

