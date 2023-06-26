import { Link } from "react-router-dom"

function RestaurantCard({ id, image, type, rating, number_of_votes, price_starts_from,  name,  removeRestaurant }) {
  return (
    <div
      key={id}
      style={{
        
        border: "1px dashed black",
        margin: "10px",
        padding: "10px"
      }}>
      <img src={image} alt={name} />
      <p>ID : {id} </p>
      <p> Name : {name}</p>
      <p>Type : {type}</p>
      <p>Rating : {rating}</p>
      <p>Number of votes : {number_of_votes}</p>
      <p>Price Starts from :{price_starts_from}</p>
      <button onClick={() => removeRestaurant(id)}>DELETE</button>
      <Link to={`/restaurants/${id}`}>
        <button>EDIT</button>
      </Link>
    </div>
  )
}

export default RestaurantCard
