import { useReducer, useEffect } from "react"
import {initState, restaurantEditReducer} from "../reducer/restaurantEditReducer"
import { useParams } from "react-router-dom"
import { getSingleRestaurant, putRestaurant } from "../utils/api.js"

function EditRestaurant() {
  const [state, dispatch] = useReducer(restaurantEditReducer, initState)
  const { id } = useParams()

  const handleChange = (e) => {
    const { name, value, type } = e.target

    const val = type === "number" ? +value : value

    dispatch({ type: "CHANGE_INPUT", payload: { name: name, value: val } })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    putRestaurant(id, { ...state })
  }

  useEffect(() => {
    getSingleRestaurant(id).then((res) => {

 const {  image,  name,  number_of_votes,  price_starts_from,  rating,  type} = res.data

      dispatch({
        type: "UPDATE_STATE",
        payload: { image, name, number_of_votes, price_starts_from, rating, type }
      })
    })
  }, [id])

  const { name, type, rating, number_of_votes, price_starts_from, image } = state
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
        <input  name="rating"  type="number"  placeholder="Rating"  value={rating}  onChange={handleChange} />
        <br />
        <br />

        <input  name="number_of_votes"  type="number"  placeholder="Number of votes"  value={number_of_votes}  onChange={handleChange} />
        <br />
        <br />

        <input  name="price_starts_from"  type="number"  placeholder="Price Starts From"  value={price_starts_from}  onChange={handleChange}  />
        <br />
        <br />

        <input  name="image"  type="text"  placeholder="Add Image URL"  value={image}  onChange={handleChange}  />
        <br />
        <br />
        <input type="submit" value="EDIT RESTAURANT" />

        <br />
        <br />
      </form>
      <hr />
    </div>
  )
}

export default EditRestaurant
