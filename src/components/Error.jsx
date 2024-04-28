import React from "react";
import "../styles/Error.css";
import PropTypes from "prop-types";

const Error = ({ error }) => {
  return (
    <div className="error--container">
      <p>{error}</p>
    </div>
  );
};

Error.propTypes = {
  error: PropTypes.string,
};

export default Error;
