import React from "react";

const Error = ({ error }) => {
  return (
    <div>
      <h4> ERROR: {error.message}</h4>
    </div>
  );
};

export default Error;
