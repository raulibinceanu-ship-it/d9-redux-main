import { useDispatch } from "react-redux";
import { addToFavourites } from "../redux/actions";
import { Link } from "react-router-dom";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="job-card">
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>

      <button
        onClick={() => dispatch(addToFavourites(data.company_name))}
        style={{ marginLeft: "10px" }}
      >
        Aggiungi ai preferiti
      </button>
      <button onClick={() => dispatch(removeFromFavourites(data.company_name))}>
        Rimuovi dai preferiti
      </button>

      <h3>{data.title}</h3>
    </div>
  );
};

export default Job;
