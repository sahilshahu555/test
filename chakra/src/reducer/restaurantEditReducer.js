const initState = {
    name: "", //string
    type: "", // one of -->  ethnic, cafe, casual_dining, fine_dining, fast_food
    rating: "", // number --> 1-5
    number_of_votes: "", // number
    price_starts_from: "", // number
    image: "" // string imageUrl
  }
  
  const restaurantEditReducer = (state, { type, payload }) => {
    switch (type) {

      case "CHANGE_INPUT": { return { ...initState, [payload.name]: payload.value } }

      case "UPDATE_STATE": { return { ...initState, ...payload } }
  
      default: { throw new Error(`invalid action type`, type) }
    }
  }
  
  export { initState, restaurantEditReducer }
  