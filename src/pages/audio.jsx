import { Link } from "react-router-dom";

const Audio = () => {
  return (
    <div>
      <h1>Audio</h1>
      <Link to="/" relative="path">
        Home
      </Link>
      <Link to="/marconi" relative="path">
        Marconi
      </Link>
      <Link to="/telegraph" relative="path">
        Telegraph
      </Link>
      <h3>Nothing here yet</h3>
    </div>
  );
};

export default Audio;
