import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites);

  return (
    <div>
      <h1>Aziende Preferite</h1>

      <ul>
        {favourites.map((company, index) => (
          <li key={index}>
            <Link to={`/${company}`}>{company}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourites;
