import React from "react";

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}

      <button
        className="button"
        // this onClick runs removeItem from App.js
        onClick={() => props.removeItem(props.feature)}
      >
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
