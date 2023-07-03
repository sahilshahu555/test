// complete below functions for api requests
import axios from 'axios';

export const getRestaurants = (page) => {
    return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=9`);
};

export const getSingleRestaurant = (id) => {
    return axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`);
};
