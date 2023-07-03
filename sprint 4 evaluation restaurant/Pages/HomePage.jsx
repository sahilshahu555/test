import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurants } from "../Redux/action";
import { GET_RESTAURANTS_FAILURE, GET_RESTAURANTS_REQUEST, GET_RESTAURANTS_SUCCESS } from "../Redux/actionTypes";
import Pagination from '../Components/Pagination'
import RestaurantCard from '../Components/RestaurantCard'

const HomePage = () => {
  // Show below loading indicator while data is being loaded
  const dispatch = useDispatch();
  const { isLoading, isError, totalPages, restaurants } = useSelector(store => store);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({ type: GET_RESTAURANTS_REQUEST });
    getRestaurants(page)
      .then(res => { dispatch({ type: GET_RESTAURANTS_SUCCESS, payload: res.data }); console.log(res.data) })
      .catch(err => dispatch({ type: GET_RESTAURANTS_FAILURE }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);
  return (
    <div>
      {
        isLoading ? <h1 className="loading_indicator">Loading...</h1>
          : isError ? <h1 className="error_indicator">Something went wrong...</h1>
            : (<><div className="restaurants_wrapper">
              {
                restaurants?.map((rest) => {
                  return(
                    <RestaurantCard rest={rest} />
                  )
                })
              }
              </div>
              <Pagination totalPages={totalPages} page={page} setPage={setPage} />  
            </>)
      }
    </div>
  );
};

export default HomePage;
