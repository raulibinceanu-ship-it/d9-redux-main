import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToFavourites } from "../redux/actions";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="job-card">
      <a href={`/${data.company_name}`}>{data.company_name}</a>

      <button onClick={() => dispatch(addToFavourites(data.company_name))}>
        ⭐ Aggiungi ai preferiti
      </button>

      <h3>{data.title}</h3>
    </div>
  );
};

const Job = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: "1px solid #00000033", borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={9}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
  </Row>
);

export default Job;
