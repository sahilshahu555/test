import * as types from "./actionTypes";

const Success = (data) => {
  return { type: types.GET_JOBS_SUCCESS, payload: data };
};
const Failure = () => {
  return { type: types.GET_JOBS_FAILURE };
};
const Request = () => {
  return { type: types.GET_JOBS_REQUEST };
};

export { Success, Failure, Request };
