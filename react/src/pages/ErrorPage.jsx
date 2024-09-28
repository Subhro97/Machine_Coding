import { Link } from "react-router-dom";

import "./Error.css";

const ErrorPage = () => {
  return (
    <div className="error-cont">
      <p>Route Not defined!</p>
      <p>Please select proper Route!</p>
      <Link to=".." relative="path">
        Go Back
      </Link>
    </div>
  );
};

export default ErrorPage;
