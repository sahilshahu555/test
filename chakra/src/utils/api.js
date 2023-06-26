import axios from "axios"

export const getRestaurants = (params) => {
  const queryParams = {}

  if (params.page) { queryParams._page = params.page }

  if (params.limit) { queryParams._limit = params.limit }

  if (params.sortBy) { queryParams._sort = params.sortBy }

  if (params.sortOrder) { queryParams._order = params.sortOrder }

  return axios({
     method: "get", 
     url: `http://localhost:8080/restaurants`,  
     params: queryParams
  })
}

export const getSingleRestaurant = (id) => {
  return axios({ method: "get",  url: `http://localhost:8080/restaurants/${id}` })
}

export const postRestaurant = (restaurantData) => {
  return axios({ 
     method: "post",  url: `http://localhost:8080/restaurants`, data: restaurantData 
  })
}

export const deleteRestaurant = (id) => {
  return axios({  method: "delete",  url: `http://localhost:8080/restaurants/${id}`})
}

export const putRestaurant = (id, data) => {
  return axios({ 
     method: "put",  url: `http://localhost:8080/restaurants/${id}`,  data: data
  })
}
