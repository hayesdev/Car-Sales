import React from "react";
import { bindActionCreators } from "redux";

const Total = props => {
  return (
    <div className="content">
      <h4>{`Total Amount: $${props.car.price}`}</h4>
    </div>
  );
};

export default Total;

// props.car.features;
