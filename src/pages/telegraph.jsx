import { Link } from "react-router-dom";

const Telegraph = () => {
  return (
    <div>
      <h1>The Telegraph Machine</h1>
      <Link to="/" relative="path">
        Home
      </Link>
      <Link to="/audio" relative="path">
        Audio
      </Link>
      <Link to="/marconi" relative="path">
        Marconi
      </Link>
      <h3>Nothing here yet</h3>
    </div>
  );
};

export default Telegraph;
