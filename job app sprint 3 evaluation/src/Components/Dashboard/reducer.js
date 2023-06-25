const reducer = (state, action) => {
  switch (action.type) {
    case "GET_JOBS_REQUEST": {
      return {  data: [],  isLoading: true,  isError: false, };
    }

    case "GET_JOBS_SUCCESS": {
      return {  data: action.payload,  isLoading: false,  isError: false, };
    }
    
    case "GET_JOBS_FAILURE": {
      return { data: [], isLoading: false, isError: true, };
    }

    default: throw new Error(`Invalid action type`,type);
  }
};
export { reducer };
