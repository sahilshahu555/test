import { GET_RESTAURANTS_FAILURE, GET_RESTAURANTS_REQUEST, GET_RESTAURANTS_SUCCESS, GET_SINGLE_RESTAURANT_FAILURE, GET_SINGLE_RESTAURANT_REQUEST, GET_SINGLE_RESTAURANT_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  restaurants: [],
  totalPages: 0,
  restaurant:{}
};

// complete reducer function

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_RESTAURANTS_REQUEST:{
            return{
                ...state,
                isLoading:true,
            }
        }
        case GET_RESTAURANTS_SUCCESS:{
            return{
                ...state,
                isLoading: false,
                restaurants: action.payload.data,
                totalPages: action.payload.totalPages
            }
        }
        case GET_RESTAURANTS_FAILURE:{
            return{
                ...state,
                isLoading: false,
                isError: true,
                restaurants: []
            }
        }

        case GET_SINGLE_RESTAURANT_REQUEST:{
            return{
                ...state,
                isLoading:true,
            }
        }
        case GET_SINGLE_RESTAURANT_SUCCESS:{
            return{
                ...state,
                isLoading: false,
                restaurant: action.payload.data,
            }
        }
        case GET_SINGLE_RESTAURANT_FAILURE:{
            return{
                ...state,
                isLoading: false,
                restaurant: {}
            }
        }

        default:
            return state;
    }
};
