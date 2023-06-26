

const dataFetchReducer = (state, { type, payload }) => {
  
  switch (type) {

    case "FETCH_LOADING": { return { ...state,  loading: true, err: false, data: [] } }

    case "FETCH_SUCCESS": { return { ...state, loading: false, err: false, data: payload }}

    case "FETCH_FAILURE": { return {  ...state,  loading: false,  err: true,  data: [] } }

    default: { throw new Error(`invalid action type`, type) }
  }

}
  
export { dataFetchReducer }
  