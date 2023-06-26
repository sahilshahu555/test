import { Stack, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { reducer } from "./reducer";
import { initialState } from "./initialState";
import { Request, Failure, Success } from "./actionCreators";
import Pagination from "../Pagination";
import JobCard from "../JobCard";

export default function Dashboard() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [page, setPage] = React.useState(1);
  React.useEffect(() => {
    dispatch(Request());
    axios
      .get(
        `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/jobs?_page=${page}&_limit=4`,
        {
          headers: {
            "Cache-Control": "no-cache",
          },
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(Success(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(Failure());
      });
  }, [page]);

  return (
    <div>
      <Stack spacing={5}>
        <SimpleGrid spacing={10} className="job_cards_wrapper" columns={4}>
          {/* if data is in loading state then show four skeleton inside react fragments <></> */}
          {state.isLoading ? (
            <>
              <Skeleton height="200px" />
              <Skeleton height="200px" />
              <Skeleton height="200px" />
              <Skeleton height="200px" />
            </>
          ) : (
            <>
              {state.data.map((job, idx) => {
                return (
                  <JobCard
                    key={idx}
                    title={job.title}
                    company={job.company}
                    location={job.location}
                    description={job.description}
                    requirements={job.requirements}
                    responsibilities={job.responsibilities}
                  />
                );
              })}
            </>
          )}
        </SimpleGrid>
        {state.isLoading === false ? <Pagination setPage={setPage} /> : null}
      </Stack>
    </div>
  );
}
