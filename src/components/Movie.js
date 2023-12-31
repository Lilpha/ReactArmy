import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, image, title, summary, genres }) {
  return (
    <div>
      <img src={image} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary.length > 255 ? `${summary.slice(0,255)}...` : summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.prototype = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.String).isRequired,
};
export default Movie;
