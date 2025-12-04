import { combineReducers } from "redux";
import favouritesReducer from "./reducers/favouritesReducer";
import jobsReducer from "./reducers/jobsReducer";

const rootReducer = combineReducers({
  favourites: favouritesReducer,
  jobs: jobsReducer,
});

export default rootReducer;
