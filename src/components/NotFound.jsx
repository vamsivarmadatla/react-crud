import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="not-found">
        <h1 className="display-3">Page Not Found</h1>
        <p>We couldn't find what you were looking for.</p>
        <span>
          go to home page{" "}
          <Link to={`/`} className="btn btn-primary">
            Home
          </Link>
        </span>
      </div>
    </>
  );
};

export default NotFound;
