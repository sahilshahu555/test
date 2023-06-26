import { useEffect, useReducer, useState } from "react"
import { getRestaurants, deleteRestaurant } from "../utils/api.js"
import RestaurantCard from "../components/RestaurantCard"
import { dataFetchReducer } from "../reducer/restaurantReducer"

const initState = { loading: false, data: [],  err: false }

function Restaurants() {
  const [state, dispatch] = useReducer(dataFetchReducer, initState)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(4)
  const [sortBy, setSortBy] = useState("rating")
  const [sortOrder, setSortOrder] = useState("asc")

  const fetchAndUpdateData = (page, limit, sortBy, sortOrder) => {
    dispatch({ type: "FETCH_LOADING" })
    getRestaurants({ page, limit, sortBy, sortOrder })
    .then((res) => { dispatch({ type: "FETCH_SUCCESS", payload: res?.data }) })
    .catch((err) => {dispatch({ type: "FETCH_FAILURE" }) })
  }

  const removeRestaurant = (id) => {
    deleteRestaurant(id).then(() =>
      fetchAndUpdateData(page, limit, sortBy, sortOrder)
    )
  }

  useEffect(() => {
    fetchAndUpdateData(page, limit, sortBy, sortOrder)
  }, [page, limit, sortBy, sortOrder])

  const handlePageChange = (val) => {
    setPage(page + val)
  }

  const { loading, err, data } = state

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (err) {
    return <h1>Something went wrong...</h1>
  }

  return (
    <div>
      <div id="page_number_section">
        <button onClick={() => handlePageChange(-1)}>PREVIOUS</button>
        <button disabled>{page}</button>
        <button onClick={() => handlePageChange(1)}>NEXT</button>
      </div>
      <div id="sort_order_section">
        <button onClick={() => setSortOrder("asc")}>ASCENDING</button>
        <button onClick={() => setSortOrder("desc")}>DESCENCING</button>
      </div>
     
          {data?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              {...restaurant}
              removeRestaurant={removeRestaurant}
             
            />
          ))}
     
    </div>
  )
}

export default Restaurants
