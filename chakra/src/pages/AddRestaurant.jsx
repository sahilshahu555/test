import { useReducer } from "react"
import {
  initState,
  restaurantFormReducer
} from "../reducer/restaurantFormReducer"
import { postRestaurant } from "../utils/api.js"

function AddRestaurant() {
  const [state, dispatch] = useReducer(restaurantFormReducer, initState)

  const handleChange = (e) => {
    const { name, value, type } = e.target

    const val = type === "number" ? +value : value

    dispatch({ type: "CHANGE_INPUT", payload: { name:name, value: val } })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postRestaurant({ ...state })
  }

  const {  name, type, rating, number_of_votes, price_starts_from, image} = state

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input  name="name"  type="text"  placeholder="Add restaurant name"  value={name}  onChange={handleChange}  />
        <br />
        <br />

        <select value={type} onChange={handleChange} name="type">
          <option value="">Select Type</option>
          <option value="ethnic">Ethnic</option>
          <option value="cafe">Cafe</option>
          <option value="casual_dining">Casual Dining</option>
          <option value="fine_dining">Fine Dining</option>
          <option value="fast_food">Fast Food</option>
        </select>
        <br />
        <br />
        <input  name="rating"  type="number"  placeholder="Rating"  value={rating}  onChange={handleChange}
        />
        <br />
        <br />

        <input  name="number_of_votes"  type="number"  placeholder="Number of votes"  value={number_of_votes}  onChange={handleChange}
        />
        <br />
        <br />

        <input  name="price_starts_from"  type="number"  placeholder="Price Starts From"  value={price_starts_from}  onChange={handleChange}
        />
        <br />
        <br />

        <input  name="image"  type="text"  placeholder="Add Image URL"  value={image}  onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="CREATE RESTAURANT" />
        <br />
        <br />
      </form>
      <hr />
    </div>
  )
}

export default AddRestaurant
