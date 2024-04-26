import React from "react";
import "../styles/Error.css";

const Error = ({ error }) => {
  return (
    <div className="error--container">
        <p>{error}</p>
    </div>
  );
};

//Prop types thingys here

export default Error;
