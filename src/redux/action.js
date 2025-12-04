// ACTION TYPES
export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const SET_JOBS = "SET_JOBS";

// ACTION CREATORS
export const addToFavourites = (company) => ({
  type: ADD_TO_FAVOURITES,
  payload: company,
});

export const removeFromFavourites = (company) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: company,
});

export const setJobs = (jobs) => ({
  type: SET_JOBS,
  payload: jobs,
});

// ASYNC ACTION CREATOR (FA IL FETCH)
export const fetchJobsAction = (searchQuery) => {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${searchQuery}&limit=10`
      );
      const data = await res.json();
      dispatch(setJobs(data.data)); // data.data contiene i job
    } catch (error) {
      console.log("Errore nel fetch dei job:", error);
    }
  };
};
