import { useDispatch, useSelector } from "react-redux";
import { fetchJobsAction } from "./redux/action";

const Home = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.results);

  const handleSearch = (query) => {
    dispatch(fetchJobsAction(query));
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      <JobList jobs={jobs} />
    </>
  );
};
export default Home;
